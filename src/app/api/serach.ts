// pages/api/search.ts - Next.js API Route
import { NextApiRequest, NextApiResponse } from 'next';

// Types for our search functionality
interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  url: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
  thumbnail?: string;
}

interface SearchResult {
  article: Article;
  relevanceScore: number;
  matchedFields: string[];
}

interface SearchResponse {
  results: SearchResult[];
  totalResults: number;
  query: string;
  processingTime: number;
}

// Mock data - Replace this with your actual Medium articles data
const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Getting Started with React Hooks',
    content: 'React Hooks revolutionized how we write React components. In this comprehensive guide, we explore useState, useEffect, and custom hooks...',
    excerpt: 'Learn how React Hooks can simplify your component logic and make your code more reusable.',
    url: 'https://medium.com/@yourusername/react-hooks-guide',
    publishedAt: '2024-01-15',
    tags: ['react', 'javascript', 'frontend', 'hooks'],
    readTime: 8,
    thumbnail: 'https://example.com/react-thumb.jpg'
  },
  {
    id: '2',
    title: 'Modern CSS Grid Layouts',
    content: 'CSS Grid is a powerful layout system that allows you to create complex, responsive layouts with ease. This article covers grid basics...',
    excerpt: 'Master CSS Grid to create stunning, responsive layouts for modern web applications.',
    url: 'https://medium.com/@yourusername/css-grid-layouts',
    publishedAt: '2024-02-10',
    tags: ['css', 'layout', 'frontend', 'responsive'],
    readTime: 6,
    thumbnail: 'https://example.com/css-thumb.jpg'
  },
  {
    id: '3',
    title: 'Building APIs with Node.js',
    content: 'Node.js provides an excellent platform for building scalable APIs. We will explore Express.js, middleware, authentication...',
    excerpt: 'Step-by-step guide to building robust REST APIs using Node.js and Express.',
    url: 'https://medium.com/@yourusername/nodejs-api-guide',
    publishedAt: '2024-03-05',
    tags: ['nodejs', 'api', 'backend', 'express'],
    readTime: 12,
    thumbnail: 'https://example.com/node-thumb.jpg'
  }
];

// Search engine class
class ArticleSearchEngine {
  private articles: Article[];

  constructor(articles: Article[]) {
    this.articles = articles;
  }

  // Main search function
  search(query: string, limit: number = 10): SearchResult[] {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const normalizedQuery = this.normalizeText(query);
    const queryTerms = normalizedQuery.split(' ').filter(term => term.length > 0);

    const results: SearchResult[] = [];

    for (const article of this.articles) {
      const relevanceScore = this.calculateRelevance(article, queryTerms);
      
      if (relevanceScore > 0) {
        const matchedFields = this.getMatchedFields(article, queryTerms);
        results.push({
          article,
          relevanceScore,
          matchedFields
        });
      }
    }

    // Sort by relevance score (descending)
    results.sort((a, b) => b.relevanceScore - a.relevanceScore);

    return results.slice(0, limit);
  }

  // Calculate relevance score for an article
  private calculateRelevance(article: Article, queryTerms: string[]): number {
    let score = 0;

    const titleWords = this.normalizeText(article.title).split(' ');
    const contentWords = this.normalizeText(article.content).split(' ');
    const excerptWords = this.normalizeText(article.excerpt).split(' ');
    const tags = article.tags.map(tag => this.normalizeText(tag));

    for (const term of queryTerms) {
      // Title matches (highest weight)
      if (titleWords.some(word => word.includes(term))) {
        score += 10;
      }

      // Exact title word match
      if (titleWords.includes(term)) {
        score += 15;
      }

      // Tag matches (high weight)
      if (tags.some(tag => tag.includes(term))) {
        score += 8;
      }

      // Excerpt matches (medium weight)
      if (excerptWords.some(word => word.includes(term))) {
        score += 5;
      }

      // Content matches (lower weight)
      const contentMatches = contentWords.filter(word => word.includes(term)).length;
      score += Math.min(contentMatches * 2, 10); // Cap content score

      // Exact word matches get bonus
      if (contentWords.includes(term)) {
        score += 3;
      }
    }

    return score;
  }

  // Identify which fields matched the search
  private getMatchedFields(article: Article, queryTerms: string[]): string[] {
    const matchedFields: string[] = [];

    const titleWords = this.normalizeText(article.title).split(' ');
    const contentWords = this.normalizeText(article.content).split(' ');
    const excerptWords = this.normalizeText(article.excerpt).split(' ');
    const tags = article.tags.map(tag => this.normalizeText(tag));

    for (const term of queryTerms) {
      if (titleWords.some(word => word.includes(term)) && !matchedFields.includes('title')) {
        matchedFields.push('title');
      }
      if (tags.some(tag => tag.includes(term)) && !matchedFields.includes('tags')) {
        matchedFields.push('tags');
      }
      if (excerptWords.some(word => word.includes(term)) && !matchedFields.includes('excerpt')) {
        matchedFields.push('excerpt');
      }
      if (contentWords.some(word => word.includes(term)) && !matchedFields.includes('content')) {
        matchedFields.push('content');
      }
    }

    return matchedFields;
  }

  // Normalize text for searching
  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
  }

  // Get suggestions based on partial input
  getSuggestions(query: string, limit: number = 5): string[] {
    if (!query || query.trim().length < 2) {
      return [];
    }

    const normalizedQuery = this.normalizeText(query);
    const suggestions = new Set<string>();

    // Get suggestions from titles
    for (const article of this.articles) {
      const titleWords = this.normalizeText(article.title).split(' ');
      for (const word of titleWords) {
        if (word.startsWith(normalizedQuery) && word.length > normalizedQuery.length) {
          suggestions.add(word);
        }
      }

      // Add tag suggestions
      for (const tag of article.tags) {
        const normalizedTag = this.normalizeText(tag);
        if (normalizedTag.startsWith(normalizedQuery)) {
          suggestions.add(tag);
        }
      }
    }

    return Array.from(suggestions).slice(0, limit);
  }
}

// Initialize search engine
const searchEngine = new ArticleSearchEngine(MOCK_ARTICLES);

// API handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const startTime = Date.now();
    const { q: query, limit = '10' } = req.query;

    if (typeof query !== 'string') {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    const searchLimit = parseInt(limit as string, 10);
    if (isNaN(searchLimit) || searchLimit < 1 || searchLimit > 50) {
      return res.status(400).json({ error: 'Limit must be between 1 and 50' });
    }

    const results = searchEngine.search(query, searchLimit);
    const processingTime = Date.now() - startTime;

    const response: SearchResponse = {
      results,
      totalResults: results.length,
      query,
      processingTime
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Separate API route for suggestions: pages/api/search/suggestions.ts
export async function suggestionsHandler(
  req: NextApiRequest,
  res: NextApiResponse<{ suggestions: string[] } | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { q: query, limit = '5' } = req.query;

    if (typeof query !== 'string') {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    const suggestionLimit = parseInt(limit as string, 10);
    const suggestions = searchEngine.getSuggestions(query, suggestionLimit);

    res.status(200).json({ suggestions });
  } catch (error) {
    console.error('Suggestions error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}