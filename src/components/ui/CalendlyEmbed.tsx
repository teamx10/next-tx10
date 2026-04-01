'use client';

import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';

interface CalendlyEmbedProps {
  ariaLabel?: string;
  url?: string;
}

export function CalendlyEmbed({ ariaLabel, url = process.env.NEXT_PUBLIC_CALENDLY_URL }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!url) return;

    const scriptId = 'calendly-widget-script';
    const existing = document.getElementById(scriptId);

    const initWidget = () => {
      if (typeof window === 'undefined' || !containerRef.current) return;

      type CalendlyWindow = Window & {
        Calendly: { initInlineWidget: (opts: { parentElement: HTMLDivElement; url: string }) => void };
      };

      if ('Calendly' in window) {
        (window as unknown as CalendlyWindow).Calendly.initInlineWidget({
          parentElement: containerRef.current,
          url
        });
      }
    };

    if (existing) {
      // Script tag exists but may still be loading — wait for load event if Calendly not yet available
      if ('Calendly' in window) {
        initWidget();
      } else {
        existing.addEventListener('load', initWidget, { once: true });
      }

      return;
    }

    const script = document.createElement('script');

    script.id = scriptId;
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.onload = initWidget;
    document.head.appendChild(script);
  }, [url]);

  if (!url) return null;

  return <Box aria-label={ariaLabel} ref={containerRef} sx={{ minHeight: 700, width: '100%' }} />;
}
