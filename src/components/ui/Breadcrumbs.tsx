'use client';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Container, Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

import { CASE_STUDIES } from '@/constants/case-studies';
import { ROUTES } from '@/constants/routes';
import { SERVICES } from '@/constants/services';
import { useLocale } from '@/hooks/useLocale';
import { Link, usePathname } from '@/lib/i18n/navigation';

export function Breadcrumbs() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const tNav = useTranslations('nav');
  const tFooter = useTranslations('footer');

  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const segmentLabel = (seg: string): string => {
    const service = SERVICES.find(s => s.slug === seg);

    if (service) return service.title[locale];

    const caseStudy = CASE_STUDIES.find(c => c.slug === seg);

    if (caseStudy) return caseStudy.title[locale];

    const labelMap: Record<string, string> = {
      about: tNav('about'),
      cases: tNav('cases'),
      contacts: tNav('contacts'),
      privacy: tFooter('privacyPolicy'),
      services: tNav('services'),
      terms: tFooter('termsOfUse')
    };

    return labelMap[seg] ?? seg;
  };

  const crumbs = segments.map((seg, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');

    return { href, label: segmentLabel(seg) };
  });

  return (
    <Container component="nav" maxWidth="lg" sx={{ py: 1 }}>
      <MuiBreadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href={ROUTES.HOME} style={{ color: 'inherit', textDecoration: 'none' }}>
          <Typography color="text.secondary" variant="body2">
            {tNav('home')}
          </Typography>
        </Link>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return isLast ? (
            <Typography aria-current="page" color="text.primary" key={crumb.href} variant="body2">
              {crumb.label}
            </Typography>
          ) : (
            <Link href={crumb.href} key={crumb.href} style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography color="text.secondary" variant="body2">
                {crumb.label}
              </Typography>
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Container>
  );
}
