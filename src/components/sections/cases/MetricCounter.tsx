'use client';

import { Box, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface MetricCounterProps {
  label: string;
  value: string;
}

function parseTargetValue(value: string): number {
  return parseInt(value.replace(/\D/g, ''), 10) || 0;
}

function getSuffix(value: string): string {
  return value.replace(/^\d+/, '');
}

export function MetricCounter({ label, value }: MetricCounterProps) {
  const target = parseTargetValue(value);
  const suffix = getSuffix(value);
  const [count, setCount] = useState(0);
  const animatedRef = useRef(false);
  const frameRef = useRef<number>(0);
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });

  useEffect(() => {
    if (!isIntersecting || animatedRef.current) return;

    animatedRef.current = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || target === 0) {
      frameRef.current = requestAnimationFrame(() => setCount(target));

      return () => cancelAnimationFrame(frameRef.current);
    }

    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, [isIntersecting, target]);

  return (
    <Box ref={ref} sx={{ textAlign: 'center' }}>
      <Typography color="primary" fontWeight={700} variant="h3">
        {count}
        {suffix}
      </Typography>
      <Typography color="text.secondary" variant="body2">
        {label}
      </Typography>
    </Box>
  );
}
