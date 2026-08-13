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
    alt: 'Animated beeswarm chart showing average episode ratings for the television series Frasier',
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
    alt: 'Animated flow diagram showing federal agency consolidation',
    tools: ['D3.js'],
    action: { type: 'viewer' },
  },
  {
    title: '2026 state tax competitiveness rankings',
    image: '/images/portfolio/2026-tax-competitiveness.gif',
    alt: 'Interactive map and ranking chart comparing state tax competitiveness in 2026',
    tools: ['D3.js', 'Svelte'],
    action: { type: 'viewer' },
  },
  {
    title: 'Who pays a tariff?',
    image: '/images/portfolio/tariff-flowchart.gif',
    alt: 'Animated flowchart explaining who ultimately pays the cost of a tariff',
    tools: ['D3.js'],
    action: { type: 'viewer' },
  },
  {
    title: 'Protectionism through history',
    image: '/images/portfolio/protectionism-madness.gif',
    alt: 'Animated radial timeline of protectionist policies throughout United States history',
    tools: ['D3.js'],
    action: { type: 'viewer' },
  },
  {
    title: 'Employment-based green card cap',
    image: '/images/portfolio/green-card-cap.png',
    alt: 'Waterfall chart showing 220,455 green cards that could have been available to new arrivals in 2022',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
  {
    title: 'San Francisco rents are rising faster than every other major city',
    image: '/images/portfolio/sf-chart.png',
    alt: 'Beeswarm charts comparing year-over-year rent changes across the 100 largest United States rental markets',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
  {
    title: 'Deceptive interrogation techniques often induce false confessions',
    image: '/images/portfolio/waffle.png',
    alt: 'Waffle charts comparing false confessions among overturned wrongful convictions and murder convictions',
    tools: ['Datawrapper'],
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
