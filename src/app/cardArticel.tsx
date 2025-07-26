// components/ArticleCard.tsx
"use client";

import { Calendar, ExternalLink, Tag } from 'lucide-react';
import { MediumPost } from '../app/types';

interface ArticleCardProps {
  post?: MediumPost;
  variant?: 'default' | 'featured' | 'compact' | 'horizontal'; // Tambahkan 'horizontal'
  className?: string;
}

export default function ArticleCard({ post, variant = 'default', className = '' }: ArticleCardProps) {  // Fallback data if no post provided (for maintaining existing design)
  const fallbackPost = {
    title: "Sample Article Title",
    excerpt: "This is a sample excerpt for the article that shows how content will be displayed...",
    link: "#",
    date: new Date().toISOString(),
    categories: ["Design", "Technology"],
    image: "https://i.pinimg.com/736x/39/3b/a8/393ba8246897375c3c167a11a637b251.jpg"
  };

  const articleData = post || fallbackPost;

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
    } catch {
      return 'Recent';
    }
  };

  const handleCardClick = () => {
    if (articleData.link !== "#") {
      window.open(articleData.link, '_blank', 'noopener noreferrer');
    }
  };

  if (variant === 'horizontal') {
    return (
      <div 
        onClick={handleCardClick}
        className={`
          group mx-2 relative flex items-start space-x-3 bg-white cursor-pointer
          border-2 border-black shadow-[4px_4px_0px_0px_black] 
          hover:shadow-[0px_0px_0_0_black] transition-all duration-200
          hover:translate-x-[3px] hover:translate-y-[3px] p-3
          ${className}
        `}
      >
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-24 h-full border-2 border-black overflow-hidden">
          {articleData.image ? (
            <img 
              src={articleData.image} 
              alt={articleData.title} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="w-full h-24 bg-yellow-100 flex items-center justify-center">
              <span className="text-2xl">📄</span>
            </div>
          )}
        </div>
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-base text-black mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {articleData.title}
          </h4>
          <p className="text-sm text-gray-700 mb-2 line-clamp-2">
            {articleData.excerpt}
          </p>
          <div className="text-xs text-gray-600 font-medium uppercase tracking-wider">
            {formatDate(articleData.date)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={handleCardClick}
      className={`
        group relative overflow-hidden bg-white cursor-pointer
        border-2 border-black shadow-[4px_4px_0px_0px_black] 
        hover:shadow-[0px_0px_0_0_black] transition-all duration-200
        hover:translate-x-[3px] hover:translate-y-[3px]
        ${className}
      `}
    >
      {/* Image Container */}
      <div className="relative h-40 overflow-hidden">
        {articleData.image ? (
          <img 
            src={articleData.image} 
            alt={articleData.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
            <div className="text-4xl">📖</div>
          </div>
        )}
        
        {/* Brutal overlay badge */}
        <div className="absolute top-2 right-2 bg-yellow-400 border-2 border-black px-2 py-1 text-xs font-bold uppercase tracking-wider">
          NEW
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-black mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
          {articleData.title}
        </h3>
        
        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
          {articleData.excerpt}
        </p>

        {/* Categories - Brutal style */}
        {articleData.categories && articleData.categories.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {articleData.categories.slice(0, 2).map((category, index) => (
              <span 
                key={index}
                className="inline-block border-2 border-black bg-yellow-400 text-black text-xs font-bold px-2 py-1 uppercase tracking-wider"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Footer with brutal styling */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-600 font-medium uppercase tracking-wider">
            {formatDate(articleData.date)}
          </div>
          <div className="bg-black text-white p-1">
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
