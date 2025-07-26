"use client";

import { useState, useMemo, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import useMediumPosts from '../../hooks/useMediumPosts';
import { Search, X, Calendar, ExternalLink, Loader2, AlertCircle } from 'lucide-react';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

type Post = {
  title: string;
  excerpt: string;
  link: string;
  date?: string;
  categories?: string[];
};

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const { posts, isLoading, error } = useMediumPosts();
  const [query, setQuery] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Auto focus on input when modal opens
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Reset state when modal closes
  useEffect(() => {
    if (!open) {
      setQuery('');
      setFocusedIndex(-1);
    }
  }, [open]);

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: [
          { name: 'title', weight: 0.7 },
          { name: 'excerpt', weight: 0.3 }
        ],
        includeMatches: true,
        threshold: 0.3,
        includeScore: true,
      }),
    [posts]
  );

  const results: Post[] = useMemo(() => {
    if (!query.trim()) return posts.slice(0, 6); // Show recent posts when no query
    return fuse.search(query).map((r) => r.item);
  }, [query, posts, fuse]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && focusedIndex >= 0) {
      e.preventDefault();
      window.open(results[focusedIndex].link, '_blank');
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
    } catch {
      return '';
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-start justify-center p-4 pt-16">
        <div 
          className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all"
          onKeyDown={handleKeyDown}
        >
          {/* Header */}
          <div className="relative border-b border-gray-100 px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search articles..."
                  className="w-full rounded-xl border-0 bg-gray-50 py-3 pl-11 pr-4 text-gray-900 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setFocusedIndex(-1);
                  }}
                  autoComplete="off"
                />
              </div>
              
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Search stats */}
            {query && !isLoading && (
              <div className="mt-2 text-sm text-gray-500">
                {results.length} result{results.length !== 1 ? 's' : ''} found
              </div>
            )}
          </div>

          {/* Content */}
          <div className="max-h-96 overflow-y-auto" ref={resultsRef}>
            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-12">
                <div className="flex items-center space-x-3 text-gray-500">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Loading articles...</span>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="flex items-center justify-center py-12">
                <div className="flex max-w-sm flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Unable to load articles</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Please check your connection and try again.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* No Results */}
            {!isLoading && !error && results.length === 0 && query && (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="font-medium text-gray-900">No results found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try different keywords or browse recent articles below.
                  </p>
                </div>
              </div>
            )}

            {/* Results */}
            {!isLoading && !error && results.length > 0 && (
              <div className="py-2">
                {!query && (
                  <div className="px-6 py-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Recent Articles
                    </h3>
                  </div>
                )}
                
                {results.map((post, index) => (
                  <div key={index}>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-6 py-4 hover:bg-gray-50 transition-colors ${
                        focusedIndex === index ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                      }`}
                      onMouseEnter={() => setFocusedIndex(index)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            {post.date && (
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{formatDate(post.date)}</span>
                              </div>
                            )}
                            
                            {post.categories && post.categories.length > 0 && (
                              <div className="flex items-center space-x-1">
                                <span>•</span>
                                <span className="truncate">
                                  {post.categories.slice(0, 2).join(', ')}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="ml-4 flex-shrink-0">
                          <ExternalLink className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-6 py-3">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-4">
                <span>↑↓ Navigate</span>
                <span>↵ Open</span>
                <span>ESC Close</span>
              </div>
              <div>
                Powered by Medium RSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
