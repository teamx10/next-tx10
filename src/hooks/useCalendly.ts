'use client';

import { useEffect, useState } from 'react';

interface UseCalendlyResult {
  isAvailable: boolean;
  openCalendly: () => void;
}

export function useCalendly(): UseCalendlyResult {
  const [isAvailable, setIsAvailable] = useState(false);

  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;

  useEffect(() => {
    if (!url) return;

    const checkAvailability = () => {
      if (typeof window !== 'undefined' && 'Calendly' in window) {
        setIsAvailable(true);
        clearInterval(interval);
      }
    };

    checkAvailability();

    const interval = setInterval(checkAvailability, 500);

    return () => {
      clearInterval(interval);
    };
  }, [url]);

  const openCalendly = () => {
    if (!isAvailable || !url) return;

    type CalendlyWindow = Window & { Calendly: { initPopupWidget: (opts: { url: string }) => void } };

    (window as unknown as CalendlyWindow).Calendly.initPopupWidget({ url });
  };

  return { isAvailable, openCalendly };
}
