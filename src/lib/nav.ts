export type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export const cardNavItems: CardNavItem[] = [
  {
    label: 'About',
    bgColor: '#1a1a1a',
    textColor: '#ffffff',
    links: [
      { label: 'Our Group', href: '/about', ariaLabel: 'About the Group' },
      { label: 'History', href: '/history', ariaLabel: 'Company History' },
      { label: 'Corporate', href: '/corporate', ariaLabel: 'Mission and Leadership' },
    ],
  },
  {
    label: 'Products',
    bgColor: '#991b1b',
    textColor: '#ffffff',
    links: [
      { label: 'Full Catalog', href: '/products', ariaLabel: 'Product Catalog' },
      { label: 'White Printing', href: '/products/white-printing-paper', ariaLabel: 'White Printing Paper' },
      { label: 'News Printing', href: '/products/news-printing-paper', ariaLabel: 'News Printing Paper' },
      { label: 'Medium Paper', href: '/products/medium-paper', ariaLabel: 'Medium Paper' },
    ],
  },
  {
    label: 'Company',
    bgColor: '#262626',
    textColor: '#ffffff',
    links: [
      { label: 'Units', href: '/units', ariaLabel: 'Manufacturing Units' },
      { label: 'Contact', href: '/contact', ariaLabel: 'Contact Us' },
      { label: 'Test Liner', href: '/products/test-liner', ariaLabel: 'Test Liner' },
    ],
  },
];
