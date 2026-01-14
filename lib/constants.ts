export const SITE_CONFIG = {
  name: 'SEOExpert',
  tagline: 'Modern Digital Marketing Agency',
  description: 'Results-driven digital marketing for businesses that value quality over hours. Work with a team that believes in work-life balance and delivers real results.',
  url: 'https://seoexpert.com',
  email: 'hello@seoexpert.com',
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
    text: 'Get a free audit',
    href: '/contact?type=audit',
  },
};

export const SERVICES = [
  {
    id: 'seo',
    slug: 'seo',
    title: 'Search Engine Optimization',
    shortTitle: 'SEO',
    description: 'Dominate search results with data-driven SEO strategies that bring sustainable organic growth.',
    icon: 'search',
    features: ['Technical SEO Audits', 'On-Page Optimization', 'Link Building', 'Local SEO', 'Content Strategy'],
  },
  {
    id: 'ppc',
    slug: 'ppc',
    title: 'PPC & Paid Advertising',
    shortTitle: 'PPC',
    description: 'Maximize ROI with targeted paid campaigns across Google, Meta, and beyond.',
    icon: 'target',
    features: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Retargeting', 'Landing Page Optimization'],
  },
  {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media Marketing',
    shortTitle: 'Social Media',
    description: 'Build authentic connections and grow your brand presence across social platforms.',
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
    title: 'Work-Life Balance',
    description: 'We believe in working smart, not just hard. Burnout benefits no one.',
  },
  {
    title: 'Remote-First',
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
    title: 'Rigid corporate culture',
    description: 'Strict hierarchies that stifle creativity and autonomy.',
  },
  {
    title: 'Employee monitoring software',
    description: 'We trust our team to deliver results without surveillance.',
  },
  {
    title: 'Overtime culture',
    description: 'Sustainable work hours lead to better outcomes.',
  },
  {
    title: 'Fake "family" culture',
    description: 'Professional relationships without the manipulation.',
  },
];
