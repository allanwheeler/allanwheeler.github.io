export type Project = {
  title: string;
  image: string;
  mediaType?: 'image' | 'video';
  alt: string;
  tools: string[];
  projectUrl?: string;
  action:
    | { type: 'viewer'; fullImage?: string }
    | { type: 'external'; href: string }
    | { type: 'internal'; href: string };
};

const projectDetails: Project[] = [
  {
    title: '2026 state tax competitiveness rankings',
    image: '/images/portfolio/2026-tax-competitiveness.gif',
    alt: 'Interactive map and ranking chart comparing state tax competitiveness in 2026',
    tools: ['D3.js', 'Svelte'],
    projectUrl: 'https://2026-tax-competitiveness.allanxwheeler.workers.dev/',
    action: { type: 'viewer' },
  },
  {
    title: 'Average episode ratings for Frasier',
    image: '/images/portfolio/fraiser-beeswarm.gif',
    alt: 'Animated beeswarm chart showing average episode ratings for the television series Frasier',
    tools: ['D3.js', 'Svelte'],
    projectUrl: 'https://www.allanwheeler.com/imdb-interactive-beeswarm/',
    action: { type: 'viewer' },
  },
  {
    title: 'Cato’s Hub for Social Security',
    image: '/images/portfolio/cato-social-security.png',
    alt: 'Cato Institute Social Security report website with charts and article cards',
    tools: ['HTML', 'CSS'],
    projectUrl: 'https://www.cato.org/social-security',
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
    title: 'Who pays a tariff?',
    image: '/images/portfolio/tariff-flowchart.gif',
    alt: 'Animated flowchart explaining who ultimately pays the cost of a tariff',
    tools: ['D3.js'],
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
    title: 'Protectionism through history',
    image: '/images/portfolio/protectionism-madness.gif',
    alt: 'Animated radial timeline of protectionist policies throughout United States history',
    tools: ['D3.js'],
    action: { type: 'viewer' },
  },
  {
    title: 'FTES Overview for Kern County Community College District',
    image: '/images/portfolio/kccd.gif',
    alt: 'FTES Overview for Kern County Community College District',
    tools: ['Tableau'],
    projectUrl:
      'https://public.tableau.com/app/profile/allan.wheeler/viz/FTESOverviewforKernCountyCommunityCollegeDistrict/OverviewofFTESforKernCountCommunityCollegeDistrict',
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
    title:
      'Bakersfield murders are starting the year among the lowest on record',
    image: '/images/portfolio/bkfd-murders.png',
    alt: 'Chart showing the running total of murders in Bakersfield, California',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
  {
    title: 'Deceptive interrogation techniques often induce false confessions',
    image: '/images/portfolio/deceptive-interrogation.png',
    alt: 'Waffle charts comparing false confessions among overturned wrongful convictions and murder convictions',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
  {
    title: 'The federal government owns half the land in the West',
    image: '/images/portfolio/federal-land.png',
    alt: 'Tile grid chart showing federal land ownership as a share of total land by region and state',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
  {
    title:
      'Goods traders accounted for more than 80 percent of net jobs created in US manufacturing in 2022',
    image: '/images/portfolio/goods-traders.png',
    alt: 'Stacked bar chart comparing the share of net jobs created by goods-trader status in manufacturing and nonmanufacturing',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
  {
    title:
      'Total used capacity of international internet bandwidth has increased rapidly',
    image: '/images/portfolio/intl-internet-capacity.png',
    alt: 'Stacked area chart showing international internet bandwidth capacity by region from 2015 to 2022',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
  {
    title:
      'The partisan gap on aid to Ukraine has shifted significantly since the start of the war',
    image: '/images/portfolio/partisan-gap.png',
    alt: 'Slope charts comparing views on United States support for Ukraine by political affiliation in 2022 and 2024',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
  {
    title: 'State and local government spending as a percentage of personal income',
    image: '/images/portfolio/state-local-spending.gif',
    alt: 'Animated ranking of state and local government spending as a percentage of personal income from 1962 to 2020',
    tools: ['D3.js'],
    action: { type: 'viewer' },
  },
  {
    title: 'CPTPP and RCEP countries',
    image: '/images/portfolio/venn.png',
    alt: 'Venn diagrams comparing applicants and partners in the CPTPP and RCEP trade agreements',
    tools: ['Datawrapper'],
    action: { type: 'viewer' },
  },
  {
    title: 'Scrollytelling demo',
    image: '/images/portfolio/datawrapper-scrolly.mp4',
    mediaType: 'video',
    alt: 'Video demonstration of an interactive scrollytelling project',
    tools: ['D3.js', 'Svelte'],
    action: { type: 'viewer' },
  },
];

const projectByImage = new Map(
  projectDetails.map(project => [project.image, project]),
);

const getProject = (image: string): Project => {
  const project = projectByImage.get(image);
  if (!project) throw new Error(`Unknown project image: ${image}`);
  return project;
};

// Reorder these lines to tailor the two desktop columns for each application.
export const projectColumns = {
  left: [
    getProject('/images/portfolio/2026-tax-competitiveness.gif'),
    getProject('/images/portfolio/cato-social-security.png'),
    getProject('/images/portfolio/datawrapper-scrolly.mp4'),
    getProject('/images/portfolio/protectionism-madness.gif'),
    getProject('/images/portfolio/green-card-cap.png'),
    getProject('/images/portfolio/venn.png'),
    getProject('/images/portfolio/goods-traders.png'),
    getProject('/images/portfolio/%20buyer-seller-surplus.webp'),
    getProject('/images/portfolio/kern-county-city-growth.png'),
    getProject('/images/portfolio/tariff-flowchart.gif'),
  ],
  right: [
    getProject('/images/portfolio/fraiser-beeswarm.gif'),
    getProject('/images/portfolio/sf-chart.png'),
    getProject('/images/portfolio/agency-consolidation.gif'),
    getProject('/images/portfolio/deceptive-interrogation.png'),
    getProject('/images/portfolio/rent-stabilized-housing-nyc.png'),
    getProject('/images/portfolio/kccd.gif'),
    getProject('/images/portfolio/bkfd-murders.png'),
    getProject('/images/portfolio/federal-land.png'),
    getProject('/images/portfolio/intl-internet-capacity.png'),
    getProject('/images/portfolio/state-local-spending.gif'),
    getProject('/images/portfolio/partisan-gap.png'),
  ],
};

export const projects = Array.from(
  { length: Math.max(projectColumns.left.length, projectColumns.right.length) },
  (_, index) => [projectColumns.left[index], projectColumns.right[index]],
).flatMap(row => row.filter((project): project is Project => Boolean(project)));
