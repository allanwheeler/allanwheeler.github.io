export type Project = {
  title: string;
  image: string;
  alt: string;
  tools: string[];
  action: { type: 'viewer'; fullImage?: string } | { type: 'external'; href: string } | { type: 'internal'; href: string };
};

export const projects: Project[] = [
  {
    title: 'Average episode ratings for Frasier',
    image: '/images/portfolio/fraiser-beeswarm.gif',
    alt: 'Beeswarm chart showing average episode ratings for the television series Frasier',
    tools: ['D3.js', 'Svelte'],
    action: { type: 'viewer' },
  },
  {
    title: 'Cato’s Hub for Social Security',
    image: '/images/portfolio/cato-social-security.png',
    alt: 'Cato Institute Social Security report website with charts and article cards',
    tools: ['HTML', 'CSS'],
    action: { type: 'viewer' },
  },
  {
    title: 'Agency consolidation',
    image: '/images/portfolio/agency-consolidation.gif',
    alt: 'Interactive flow diagram showing agency consolidation',
    tools: ['D3.js'],
    action: { type: 'viewer' },
  },
  {
    title: 'The market has shifted from a buyer surplus to a seller surplus',
    image: '/images/portfolio/%20buyer-seller-surplus.webp',
    alt: 'Chart comparing the number of homebuyers and sellers in the United States over time',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
  {
    title: 'Rent-stabilized apartment vacancy rates in New York City',
    image: '/images/portfolio/rent-stabilized-housing-nyc.png',
    alt: 'Small-multiple line charts showing rent-stabilized vacancy rates by New York City borough',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
  {
    title: 'Kern County city growth since COVID',
    image: '/images/portfolio/kern-county-city-growth.png',
    alt: 'Small-multiple charts showing population change across cities in Kern County',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
  {
    title: 'Bakersfield murders are starting the year among the lowest on record',
    image: '/images/portfolio/bkfd-murders.png',
    alt: 'Chart showing the running total of murders in Bakersfield, California',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
];
