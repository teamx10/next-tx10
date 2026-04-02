'use client';

import { Button, type ButtonProps } from '@mui/material';

import { ROUTES } from '@/constants/routes';
import { useCalendly } from '@/hooks/useCalendly';
import { useRouter } from '@/lib/i18n/navigation';

interface CTAButtonProps extends ButtonProps {
  label?: string;
}

export function CTAButton({ children, label, onClick, ...props }: CTAButtonProps) {
  const { isAvailable, openCalendly } = useCalendly();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);

    if (isAvailable) {
      openCalendly();
    } else {
      router.push(ROUTES.CONTACTS);
    }
  };

  return (
    <Button color="primary" onClick={handleClick} variant="contained" {...props}>
      {children ?? label ?? 'Book a Call'}
    </Button>
  );
}
