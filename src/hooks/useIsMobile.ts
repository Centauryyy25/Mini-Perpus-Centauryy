"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * SSR-safe hook to detect mobile viewport
 * Returns undefined during SSR, then actual value after hydration
 */
export default function useIsMobile(breakpoint = 768) {
  // Start with undefined to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  const checkScreenSize = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < breakpoint);
    }
  }, [breakpoint]);

  useEffect(() => {
    // Set initial value after mount (client-side only)
    checkScreenSize();

    // Add resize listener with debounce for performance
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkScreenSize, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [checkScreenSize]);

  // Return false during SSR/initial render for consistent hydration
  return isMobile ?? false;
}
