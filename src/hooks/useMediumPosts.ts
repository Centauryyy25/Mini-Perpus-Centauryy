import { useState, useEffect } from 'react';
import { MediumPost, UseMediumPostsReturn } from '@/types';

export default function useMediumPosts(): UseMediumPostsReturn {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/medium');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (mounted) {
          setPosts(data.items || []);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Unknown error'));
          setPosts([]);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      mounted = false;
    };
  }, []);

  return { posts, isLoading, error };
}
