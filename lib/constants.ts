export const SITE_CONFIG = {
  name: 'SEOExpert',
  tagline: 'Modern Digital Marketing Agency',
  description: 'Looking for the best digital marketing agency in Singapore? SEOExpert offers affordable SEO, PPC, advertising, and social media solutions. Speak with us today.',
  url: 'https://www.seoexpert.sg',
  email: 'hello@seoexpert.sg',
  whatsapp: '+60123456789',
};

export const NAVIGATION = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'SEO', href: '/services/seo' },
      { label: 'PPC & Paid Ads', href: '/services/ppc' },
      { label: 'Social Media', href: '/services/social-media' },
      { label: 'Content Marketing', href: '/services/content-marketing' },
      { label: 'Analytics', href: '/services/analytics' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const CTA = {
  primary: {
    text: 'Stop guessing. Start growing.',
    href: '/contact',
  },
  secondary: {
    text: 'Get a free audit',
    href: '/contact?type=audit',
  },
};

export const SERVICES = [
  {
    id: 'seo',
    slug: 'seo',
    title: 'SEO Services',
    shortTitle: 'SEO',
    description: 'Rank higher on Google with data-driven SEO strategies built for sustainable organic growth.',
    icon: 'search',
    features: ['Technical SEO Audits', 'On-Page Optimization', 'Link Building', 'Local SEO', 'Content Strategy'],
  },
  {
    id: 'ppc',
    slug: 'ppc',
    title: 'PPC & Paid Advertising Services',
    shortTitle: 'PPC',
    description: 'Maximise ROI with targeted PPC and paid advertising across Google, Meta, and other high-intent platforms.',
    icon: 'target',
    features: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Retargeting', 'Landing Page Optimization'],
  },
  {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media Marketing Services',
    shortTitle: 'Social Media',
    description: 'Grow brand visibility and engagement with social media marketing designed to convert attention into results.',
    icon: 'share',
    features: ['Strategy Development', 'Content Creation', 'Community Management', 'Influencer Partnerships', 'Analytics & Reporting'],
  },
  {
    id: 'content-marketing',
    slug: 'content-marketing',
    title: 'Content Marketing',
    shortTitle: 'Content',
    description: 'Create compelling content that attracts, engages, and converts your ideal audience.',
    icon: 'edit',
    features: ['Content Strategy', 'Blog Writing', 'Copywriting', 'Video Content', 'Email Marketing'],
  },
  {
    id: 'analytics',
    slug: 'analytics',
    title: 'Analytics & Reporting',
    shortTitle: 'Analytics',
    description: 'Make informed decisions with comprehensive data tracking and actionable insights.',
    icon: 'chart',
    features: ['GA4 Setup', 'Custom Dashboards', 'Conversion Tracking', 'Attribution Modeling', 'Monthly Reports'],
  },
];

export const STATS = [
  { value: '250%', label: 'Avg. ROI Increase' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Remote Team' },
];

export const VALUES = [
  {
    title: 'Work-Life Balance for Better Marketing Results',
    description: 'We believe in working smart, not just hard. Burnout benefits no one.',
  },
  {
    title: 'Remote-First Digital Marketing Team',
    description: 'Work from anywhere. Your best work happens where you feel best.',
  },
  {
    title: 'Results Over Hours',
    description: 'We measure success by outcomes, not time spent in meetings.',
  },
  {
    title: 'Genuine Partnerships',
    description: 'No fake "family" culture. Just honest, professional relationships.',
  },
];

export const ANTI_VALUES = [
  {
    title: 'Rigid Corporate Agency Structures',
    description: 'Strict hierarchies that stifle creativity and autonomy.',
  },
  {
    title: 'Employee Monitoring Software',
    description: 'We trust experienced digital marketers to deliver results without surveillance.',
  },
  {
    title: 'Overtime-Driven Marketing Culture',
    description: 'Sustainable work hours lead to better outcomes.',
  },
  {
    title: 'Fake "Family" Culture',
    description: 'Professional relationships without the manipulation.',
  },
];
