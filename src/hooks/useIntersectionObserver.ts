'use client';

import { type RefObject, useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useIntersectionObserver<T extends Element>({
  threshold = 0.2,
  triggerOnce = true
}: UseIntersectionObserverOptions = {}): [RefObject<null | T>, boolean] {
  const ref = useRef<null | T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return [ref, isIntersecting];
}
