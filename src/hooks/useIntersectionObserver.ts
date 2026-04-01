'use client';

import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<null | T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return { isIntersecting, ref } as const;
}
