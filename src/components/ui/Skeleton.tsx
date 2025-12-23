"use client";

interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
    return (
        <div
            className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] ${className}`}
        />
    );
}

export function ArticleCardSkeleton() {
    return (
        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_black] overflow-hidden">
            {/* Image skeleton */}
            <Skeleton className="h-40 w-full" />

            {/* Content skeleton */}
            <div className="p-4 space-y-3">
                {/* Title */}
                <Skeleton className="h-6 w-3/4 rounded" />

                {/* Excerpt */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-5/6 rounded" />
                </div>

                {/* Categories */}
                <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded" />
                    <Skeleton className="h-6 w-20 rounded" />
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-2">
                    <Skeleton className="h-4 w-24 rounded" />
                    <Skeleton className="h-6 w-6 rounded" />
                </div>
            </div>
        </div>
    );
}

export function ArticleCardHorizontalSkeleton() {
    return (
        <div className="flex items-start space-x-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_black] p-3">
            {/* Thumbnail skeleton */}
            <Skeleton className="flex-shrink-0 w-24 h-24 border-2 border-black" />

            {/* Content skeleton */}
            <div className="flex-1 min-w-0 space-y-2">
                <Skeleton className="h-5 w-3/4 rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-2/3 rounded" />
                <Skeleton className="h-3 w-24 rounded" />
            </div>
        </div>
    );
}

export function CarouselSkeleton() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#FCEEE3] py-10">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-10">
                {/* Header skeleton */}
                <div className="bg-gray-200 animate-pulse border-2 border-black px-6 py-5 w-full md:w-1/3 h-32" />

                {/* Carousel skeleton */}
                <div className="w-full md:w-2/3 flex items-center justify-center gap-4">
                    <Skeleton className="hidden md:block w-1/4 h-96 border-2 border-black" />
                    <Skeleton className="w-full md:w-1/2 h-96 border-2 border-black" />
                    <Skeleton className="hidden md:block w-1/4 h-96 border-2 border-black" />
                </div>
            </div>
        </div>
    );
}
