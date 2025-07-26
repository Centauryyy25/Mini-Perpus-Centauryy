// src/app/api/medium/route.ts
import Parser from 'rss-parser';
import { NextResponse } from 'next/server';

interface MediumItem {
  title?: string;
  link?: string;
  isoDate?: string;
  categories?: string[];
  content?: string;
}

interface MediumFeedItem {
  title: string;
  link: string;
  date: string;
  categories?: string[];
  excerpt: string;
  image: string;
}

export async function GET() {
  try {
    const parser: Parser<{}, MediumItem> = new Parser({
      customFields: {
        item: [
          ['content:encoded', 'content'],
        ],
      },
    });

    const feed = await parser.parseURL(
      'https://medium.com/feed/@centauryy'
    );

    if (!feed.items) {
      return NextResponse.json(
        { error: 'No items found in feed' },
        { status: 404 }
      );
    }

    const items: MediumFeedItem[] = feed.items
      .filter((item): item is Required<Pick<MediumItem, 'title' | 'link' | 'isoDate'>> & MediumItem =>
        Boolean(item.title && item.link && item.isoDate)
      )
      .map((item) => {
        const cleanContent = item.content?.replace(/<[^>]+>/g, '') || '';
        const excerpt = cleanContent.slice(0, 180) + (cleanContent.length > 180 ? '...' : '');
        const imageMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);

        return {
          title: item.title,
          link: item.link,
          date: item.isoDate,
          categories: item.categories || [],
          excerpt,
          image: imageMatch?.[1] || '',
        };
      });

    return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Medium feed' },
      { status: 500 }
    );
  }
}
