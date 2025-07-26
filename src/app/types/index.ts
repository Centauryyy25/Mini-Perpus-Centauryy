export interface MediumPost {
  title: string;
  link: string;
  date: string;
  categories?: string[];
  excerpt: string;
  image?: string;
}

export interface UseMediumPostsReturn {
  posts: MediumPost[];
  isLoading: boolean;
  error: Error | null;
}

export interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export interface CarouselCard {
  id: number;
  title: string;
  image: string;
  description: string;
}
