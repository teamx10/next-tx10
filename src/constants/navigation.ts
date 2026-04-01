import { ROUTES } from './routes';

interface NavItem {
  href: string;
  labelKey: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: ROUTES.HOME, labelKey: 'nav.home' },
  { href: ROUTES.SERVICES, labelKey: 'nav.services' },
  { href: ROUTES.CASES, labelKey: 'nav.cases' },
  { href: ROUTES.ABOUT, labelKey: 'nav.about' },
  { href: ROUTES.CONTACTS, labelKey: 'nav.contacts' }
];
