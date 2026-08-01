export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductGrade = {
  name: string;
  composition: string;
};

export type ProductFootprintStat = {
  label: string;
  value: string;
};

export type ProductFeatureTile = {
  id: string;
  label: string;
  value: string;
  detail: string;
};

export type ProductSupplyMetric = {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
};

export type ProductMetrics = {
  tonsSold: string;
  activeBuyers: string;
  onTimeDelivery: string;
  avgLeadDays: string;
  supplyMetrics: ProductSupplyMetric[];
  featureTiles: ProductFeatureTile[];
  endUsers: string[];
  footerStats: ProductFootprintStat[];
};

export type ProductCategory = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type PaperProduct = {
  slug: string;
  name: string;
  categoryId: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  cardClass: 'card-red' | 'card-white' | 'card-black' | 'card-gray';
  highlight: string;
  specs: ProductSpec[];
  grades?: ProductGrade[];
  customization?: string;
  metrics: ProductMetrics;
};

export const productCategories: ProductCategory[] = [
  {
    id: 'printing',
    number: '01',
    title: 'Printing & Publishing',
    description:
      'Commercial white and newsprint grades for publishers, newspapers, and institutional buyers across Bangladesh.',
  },
  {
    id: 'industrial',
    number: '02',
    title: 'Medium & Kraft',
    description:
      'Higher-basis-weight grades for corrugating, converting, packaging, and industrial applications.',
  },
  {
    id: 'corrugated',
    number: '03',
    title: 'Corrugated & Packaging',
    description:
      'Liner and fluting mediums engineered for carton board plants and export-oriented packaging programs.',
  },
  {
    id: 'specialty',
    number: '04',
    title: 'Specialty & Custom',
    description:
      'Bespoke paper solutions developed in consultation with customers for specialized end-use requirements.',
  },
];

export const paperProducts: PaperProduct[] = [
  {
    slug: 'white-printing-paper',
    name: 'White Printing Paper',
    categoryId: 'printing',
    shortDescription: 'Commercial white printing grades from 50 to 100 GSM for publishers and institutional buyers.',
    description:
      'White Printing Paper from Al-Noor Paper & Board Mills Ltd. is engineered for high-volume commercial printing, publishing, and institutional supply programs across Bangladesh.',
    image: '/white_printing_paper.jpg',
    imageAlt: 'White printing paper rolls',
    cardClass: 'card-red',
    highlight: '50–100 GSM',
    specs: [
      { label: 'Basis Weight (GSM)', value: '50 to 100 GSM' },
      { label: 'Bursting Strength & Tear Index', value: 'Minimum 14 to 22' },
      { label: 'Moisture Content', value: 'Maximum 7%' },
      { label: 'Caliper / Thickness', value: 'As per demand' },
    ],
    grades: [
      { name: 'Grade 1', composition: '100% virgin pulp' },
      { name: 'Grade 2', composition: '60% virgin pulp and 40% local/imported recycled fiber' },
      { name: 'Grade 3', composition: '100% local/imported recycled fiber' },
    ],
    customization:
      'Custom roll widths, diameter maximums, and specific core sizes available within production limits. Contact our sales team for bespoke order requirements.',
    metrics: {
      tonsSold: '18,400 MT',
      activeBuyers: '142',
      onTimeDelivery: '97.2%',
      avgLeadDays: '5 days',
      supplyMetrics: [
        { label: 'Monthly Dispatch', value: '1,540 MT', trend: '+12%', trendUp: true },
        { label: 'Repeat Orders', value: '89%', trend: '+6%', trendUp: true },
        { label: 'Institutional Share', value: '64%', trend: '+4%', trendUp: true },
      ],
      featureTiles: [
        { id: 'gsm', label: 'Basis Weight', value: '50–100 GSM', detail: 'Commercial white printing range for publishers and institutional buyers.' },
        { id: 'burst', label: 'Burst Strength', value: '14–22 min', detail: 'Minimum bursting strength and tear index for dependable press runs.' },
        { id: 'moisture', label: 'Moisture', value: '≤ 7%', detail: 'Controlled moisture content for stable sheet performance in humid climates.' },
        { id: 'caliper', label: 'Caliper', value: 'On demand', detail: 'Thickness calibrated to customer specification and converting requirements.' },
      ],
      endUsers: ['NCTB', 'Islamic Foundation', 'Takashal', 'National Publishers', 'Textbook Printers', 'Commercial Press'],
      footerStats: [
        { label: 'Tons Sold', value: '18.4K+' },
        { label: 'Monthly Output', value: '1,540 MT' },
        { label: 'Active Buyers', value: '142' },
        { label: 'Avg Lead Time', value: '5 days' },
      ],
    },
  },
  {
    slug: 'news-printing-paper',
    name: 'News Printing Paper',
    categoryId: 'printing',
    shortDescription: 'Newsprint grades from 45 to 80 GSM for daily newspapers and high-volume publishing.',
    description:
      'News Printing Paper supports Bangladesh\'s newspaper and publishing industry with dependable runnability, consistent formation, and supply reliability for standard and high-quality newsprint programs.',
    image: '/news_printing_paper.jpg',
    imageAlt: 'News printing paper rolls',
    cardClass: 'card-white',
    highlight: '45–80 GSM',
    specs: [
      { label: 'Basis Weight (GSM)', value: '45 to 80 GSM' },
      { label: 'Bursting Strength & Tear Index', value: 'Minimum 14 to 19' },
      { label: 'Moisture Content', value: 'Maximum 7%' },
      { label: 'Caliper / Thickness', value: 'As per demand' },
    ],
    grades: [
      { name: 'Grade 1 (High Quality)', composition: '50% local recycled fiber and 50% imported recycled fiber' },
      { name: 'Grade (Regular)', composition: '100% local recycled fiber' },
    ],
    customization:
      'Custom roll widths, diameter maximums, and specific core sizes available within production limits. Contact our sales team for bespoke order requirements.',
    metrics: {
      tonsSold: '24,800 MT',
      activeBuyers: '86',
      onTimeDelivery: '96.8%',
      avgLeadDays: '4 days',
      supplyMetrics: [
        { label: 'Daily Press Runs', value: '312', trend: '+18%', trendUp: true },
        { label: 'Newsroom Contracts', value: '48', trend: '+9%', trendUp: true },
        { label: 'Runnability Score', value: '98.1%', trend: '+2%', trendUp: true },
      ],
      featureTiles: [
        { id: 'gsm', label: 'Basis Weight', value: '45–80 GSM', detail: 'Newsprint grades tuned for high-speed newspaper presses.' },
        { id: 'burst', label: 'Burst Strength', value: '14–19 min', detail: 'Reliable strength for daily publishing and high-volume runs.' },
        { id: 'moisture', label: 'Moisture', value: '≤ 7%', detail: 'Consistent moisture profile for stable ink transfer and folding.' },
        { id: 'caliper', label: 'Caliper', value: 'On demand', detail: 'Custom caliper options aligned to press and pagination needs.' },
      ],
      endUsers: ['Prothom Alo', 'Daily Star', 'Regional Dailies', 'Press Houses', 'Publishers', 'Print Media'],
      footerStats: [
        { label: 'Tons Sold', value: '24.8K+' },
        { label: 'Press Partners', value: '86' },
        { label: 'On-Time Delivery', value: '96.8%' },
        { label: 'Avg Lead Time', value: '4 days' },
      ],
    },
  },
  {
    slug: 'color-medium-paper',
    name: 'Color Medium Paper',
    categoryId: 'industrial',
    shortDescription: 'Medium-weight color grades from 115 to 250 GSM for packaging and industrial applications.',
    description:
      'Color Medium Paper is produced for applications requiring higher basis weight, strong burst performance, and dependable color-medium characteristics for packaging and industrial users.',
    image: '/color_medium_paper.jpg',
    imageAlt: 'Color medium paper texture',
    cardClass: 'card-black',
    highlight: '115–250 GSM',
    specs: [
      { label: 'Basis Weight (GSM)', value: '115 to 250 GSM' },
      { label: 'Bursting Strength & Tear Index', value: 'Minimum 25 to 35' },
      { label: 'Moisture Content', value: 'Maximum 7%' },
      { label: 'Caliper / Thickness', value: 'As per demand' },
    ],
    grades: [
      { name: 'High Quality', composition: '50% local recycled fiber and 50% imported recycled fiber' },
      { name: 'Regular', composition: '100% local recycled fiber' },
    ],
    customization:
      'Custom roll widths, diameter maximums, and specific core sizes available within production limits. Contact our sales team for bespoke order requirements.',
    metrics: {
      tonsSold: '9,650 MT',
      activeBuyers: '58',
      onTimeDelivery: '95.4%',
      avgLeadDays: '6 days',
      supplyMetrics: [
        { label: 'Packaging Orders', value: '214/mo', trend: '+15%', trendUp: true },
        { label: 'Converter Partners', value: '58', trend: '+11%', trendUp: true },
        { label: 'Color Consistency', value: '96.7%', trend: '+3%', trendUp: true },
      ],
      featureTiles: [
        { id: 'gsm', label: 'Basis Weight', value: '115–250 GSM', detail: 'Medium-weight color grades for packaging and industrial converting.' },
        { id: 'burst', label: 'Burst Strength', value: '25–35 min', detail: 'High burst performance for demanding packaging applications.' },
        { id: 'moisture', label: 'Moisture', value: '≤ 7%', detail: 'Stable moisture control for color consistency across runs.' },
        { id: 'caliper', label: 'Caliper', value: 'On demand', detail: 'Flexible thickness options for converter specifications.' },
      ],
      endUsers: ['Packaging Converters', 'Industrial Users', 'Carton Plants', 'Print Finishers', 'FMCG Brands', 'Export Packers'],
      footerStats: [
        { label: 'Tons Sold', value: '9.6K+' },
        { label: 'Converter Partners', value: '58' },
        { label: 'On-Time Delivery', value: '95.4%' },
        { label: 'Avg Lead Time', value: '6 days' },
      ],
    },
  },
  {
    slug: 'medium-paper',
    name: 'Medium Paper',
    categoryId: 'industrial',
    shortDescription: 'Medium paper grades from 115 to 250 GSM for corrugating and industrial converting.',
    description:
      'Medium Paper supports corrugating, converting, and industrial packaging workflows with consistent strength properties and flexible caliper options based on customer demand.',
    image: '/medium_paper.jpg',
    imageAlt: 'Medium paper rolls',
    cardClass: 'card-gray',
    highlight: '115–250 GSM',
    specs: [
      { label: 'Basis Weight (GSM)', value: '115 to 250 GSM' },
      { label: 'Bursting Strength & Tear Index', value: 'Minimum 25 to 35' },
      { label: 'Moisture Content', value: 'Maximum 7%' },
      { label: 'Caliper / Thickness', value: 'As per demand' },
    ],
    grades: [{ name: 'Regular', composition: '100% local recycled fiber' }],
    customization:
      'Custom roll widths, diameter maximums, and specific core sizes available within production limits. Contact our sales team for bespoke order requirements.',
    metrics: {
      tonsSold: '12,200 MT',
      activeBuyers: '71',
      onTimeDelivery: '96.1%',
      avgLeadDays: '5 days',
      supplyMetrics: [
        { label: 'Corrugator Supply', value: '980 MT/mo', trend: '+14%', trendUp: true },
        { label: 'Plant Contracts', value: '71', trend: '+8%', trendUp: true },
        { label: 'Sheet Consistency', value: '97.4%', trend: '+2%', trendUp: true },
      ],
      featureTiles: [
        { id: 'gsm', label: 'Basis Weight', value: '115–250 GSM', detail: 'Medium grades for corrugating and industrial converting lines.' },
        { id: 'burst', label: 'Burst Strength', value: '25–35 min', detail: 'Consistent strength properties for reliable converting performance.' },
        { id: 'moisture', label: 'Moisture', value: '≤ 7%', detail: 'Controlled moisture for stable flute formation and bonding.' },
        { id: 'caliper', label: 'Caliper', value: 'On demand', detail: 'Flexible caliper based on customer demand and machine setup.' },
      ],
      endUsers: ['Corrugator Plants', 'Box Manufacturers', 'Industrial Converters', 'Packaging Lines', 'Agro Packers', 'Logistics Firms'],
      footerStats: [
        { label: 'Tons Sold', value: '12.2K+' },
        { label: 'Active Plants', value: '71' },
        { label: 'On-Time Delivery', value: '96.1%' },
        { label: 'Avg Lead Time', value: '5 days' },
      ],
    },
  },
  {
    slug: 'kraft-paper',
    name: 'Kraft Paper',
    categoryId: 'industrial',
    shortDescription: 'High-strength kraft grades for packaging, wrapping, and industrial applications.',
    description:
      'Kraft Paper from Al-Noor Group mills supports demanding packaging and industrial applications where tensile strength, tear resistance, and reliable supply are essential.',
    image: '/kraft_paper_roll.jpeg',
    imageAlt: 'Kraft paper rolls',
    cardClass: 'card-red',
    highlight: 'Industrial Kraft',
    specs: [
      { label: 'Application', value: 'Packaging, wrapping, and industrial converting' },
      { label: 'Supply Format', value: 'Rolls and sheets as per order requirement' },
      { label: 'Customization', value: 'Roll widths, diameters, and core sizes as per demand' },
    ],
    customization:
      'Contact our sales team for grade-specific GSM, strength targets, and bespoke roll specifications.',
    metrics: {
      tonsSold: '15,900 MT',
      activeBuyers: '94',
      onTimeDelivery: '97.6%',
      avgLeadDays: '4 days',
      supplyMetrics: [
        { label: 'Industrial Dispatch', value: '1,320 MT/mo', trend: '+16%', trendUp: true },
        { label: 'Export Orders', value: '28%', trend: '+10%', trendUp: true },
        { label: 'Tensile Rating', value: 'A-grade', trend: '+5%', trendUp: true },
      ],
      featureTiles: [
        { id: 'app', label: 'Application', value: 'Packaging', detail: 'High-strength kraft for wrapping, packaging, and industrial converting.' },
        { id: 'format', label: 'Supply Format', value: 'Rolls & sheets', detail: 'Flexible roll and sheet formats as per order requirement.' },
        { id: 'custom', label: 'Customization', value: 'Full spec', detail: 'Roll widths, diameters, and core sizes tailored to demand.' },
        { id: 'strength', label: 'Tear Resistance', value: 'High', detail: 'Engineered for demanding industrial and export packaging programs.' },
      ],
      endUsers: ['Industrial Packers', 'Export Houses', 'Agro Processors', 'Textile Mills', 'Steel Wrappers', 'Logistics Hubs'],
      footerStats: [
        { label: 'Tons Sold', value: '15.9K+' },
        { label: 'Industrial Clients', value: '94' },
        { label: 'On-Time Delivery', value: '97.6%' },
        { label: 'Avg Lead Time', value: '4 days' },
      ],
    },
  },
  {
    slug: 'test-liner',
    name: 'Test Liner',
    categoryId: 'corrugated',
    shortDescription: 'Test liner board for corrugated box manufacturing and export packaging.',
    description:
      'Test Liner is supplied for corrugated box plants and packaging converters requiring dependable liner performance for domestic and export-oriented packaging programs.',
    image: '/test_liner_paper.jpg',
    imageAlt: 'Test liner paper',
    cardClass: 'card-white',
    highlight: 'Box Liner',
    specs: [
      { label: 'Application', value: 'Corrugated box liner and packaging board' },
      { label: 'Supply Format', value: 'Rolls as per converting requirement' },
      { label: 'Customization', value: 'Specifications available on request' },
    ],
    customization:
      'Contact our sales team for liner grade specifications, MOQs, and dispatch planning.',
    metrics: {
      tonsSold: '11,400 MT',
      activeBuyers: '63',
      onTimeDelivery: '96.5%',
      avgLeadDays: '5 days',
      supplyMetrics: [
        { label: 'Box Plant Supply', value: '860 MT/mo', trend: '+13%', trendUp: true },
        { label: 'Export Carton Share', value: '34%', trend: '+7%', trendUp: true },
        { label: 'Liner Bond Score', value: '98.2%', trend: '+2%', trendUp: true },
      ],
      featureTiles: [
        { id: 'app', label: 'Application', value: 'Box liner', detail: 'Test liner board for corrugated box manufacturing and export packaging.' },
        { id: 'format', label: 'Supply Format', value: 'Rolls', detail: 'Rolls supplied as per converting line and machine requirement.' },
        { id: 'custom', label: 'Customization', value: 'On request', detail: 'Grade specifications and MOQs available on request.' },
        { id: 'export', label: 'Export Ready', value: 'Yes', detail: 'Suitable for domestic and export-oriented packaging programs.' },
      ],
      endUsers: ['Corrugated Box Plants', 'Export Packers', 'FMCG Cartons', 'Agro Packaging', 'E-commerce Boxes', 'Industrial Cartons'],
      footerStats: [
        { label: 'Tons Sold', value: '11.4K+' },
        { label: 'Box Plants Served', value: '63' },
        { label: 'On-Time Delivery', value: '96.5%' },
        { label: 'Avg Lead Time', value: '5 days' },
      ],
    },
  },
  {
    slug: 'fluting-medium',
    name: 'Fluting Medium',
    categoryId: 'corrugated',
    shortDescription: 'Fluting medium for corrugating lines and carton board production.',
    description:
      'Fluting Medium supports corrugating operations with grades suited to flute formation, box strength requirements, and high-volume carton production across Bangladesh.',
    image: '/fluting_medium_paper.jpg',
    imageAlt: 'Fluting medium paper',
    cardClass: 'card-black',
    highlight: 'Corrugating',
    specs: [
      { label: 'Application', value: 'Corrugating medium and carton board production' },
      { label: 'Supply Format', value: 'Rolls as per machine requirement' },
      { label: 'Customization', value: 'Roll widths and diameters as per demand' },
    ],
    customization:
      'Contact our sales team for fluting grade specifications and production lead times.',
    metrics: {
      tonsSold: '10,750 MT',
      activeBuyers: '57',
      onTimeDelivery: '95.9%',
      avgLeadDays: '6 days',
      supplyMetrics: [
        { label: 'Flute Line Supply', value: '740 MT/mo', trend: '+11%', trendUp: true },
        { label: 'Carton Volume', value: '42M/yr', trend: '+9%', trendUp: true },
        { label: 'Formation Index', value: '97.1%', trend: '+3%', trendUp: true },
      ],
      featureTiles: [
        { id: 'app', label: 'Application', value: 'Fluting', detail: 'Corrugating medium for flute formation and carton board production.' },
        { id: 'format', label: 'Supply Format', value: 'Rolls', detail: 'Rolls sized to corrugating machine and line requirements.' },
        { id: 'custom', label: 'Customization', value: 'Flexible', detail: 'Roll widths and diameters available as per demand.' },
        { id: 'volume', label: 'Run Volume', value: 'High', detail: 'Suited to high-volume carton production across Bangladesh.' },
      ],
      endUsers: ['Corrugator Lines', 'Carton Board Mills', 'Packaging Converters', 'FMCG Cartons', 'Agro Crates', 'Export Board'],
      footerStats: [
        { label: 'Tons Sold', value: '10.7K+' },
        { label: 'Corrugator Lines', value: '57' },
        { label: 'On-Time Delivery', value: '95.9%' },
        { label: 'Avg Lead Time', value: '6 days' },
      ],
    },
  },
  {
    slug: 'specialty-grades',
    name: 'Specialty Grades',
    categoryId: 'specialty',
    shortDescription: 'Custom and specialty paper grades for specific industrial and commercial needs.',
    description:
      'Specialty Grades cover bespoke paper solutions developed in consultation with customers for specialized converting, printing, and industrial applications not covered by standard catalog items.',
    image: '/special_grade.jpg',
    imageAlt: 'Specialty paper grades',
    cardClass: 'card-gray',
    highlight: 'Custom Grades',
    specs: [
      { label: 'Application', value: 'Custom industrial, printing, and converting requirements' },
      { label: 'Development', value: 'Produced in consultation with customer specifications' },
      { label: 'Quality System', value: 'ISO 9001:2015 certified manufacturing' },
    ],
    customization:
      'Share your target GSM, strength, moisture, roll size, and end-use requirements with our technical sales team for specialty grade development.',
    metrics: {
      tonsSold: '4,280 MT',
      activeBuyers: '31',
      onTimeDelivery: '94.8%',
      avgLeadDays: '8 days',
      supplyMetrics: [
        { label: 'Custom Programs', value: '31 active', trend: '+22%', trendUp: true },
        { label: 'R&D Cycles', value: '6 weeks', trend: '-12%', trendUp: true },
        { label: 'Spec Match Rate', value: '99.1%', trend: '+4%', trendUp: true },
      ],
      featureTiles: [
        { id: 'app', label: 'Application', value: 'Custom', detail: 'Bespoke grades for specialized industrial, printing, and converting needs.' },
        { id: 'dev', label: 'Development', value: 'Consultative', detail: 'Produced in close consultation with customer specifications.' },
        { id: 'quality', label: 'Quality System', value: 'ISO 9001', detail: 'ISO 9001:2015 certified manufacturing and quality controls.' },
        { id: 'lead', label: 'Dev Lead Time', value: '6 weeks', detail: 'Typical development cycle from spec to production sample.' },
      ],
      endUsers: ['Specialty Printers', 'Industrial OEMs', 'Custom Converters', 'R&D Programs', 'Niche Publishers', 'Export Spec'],
      footerStats: [
        { label: 'Tons Sold', value: '4.2K+' },
        { label: 'Custom Programs', value: '31' },
        { label: 'Spec Match Rate', value: '99.1%' },
        { label: 'Avg Dev Lead', value: '6 wks' },
      ],
    },
  },
];

export const catalogOverview = {
  annualOutput: '55,000 metric tons annually',
  plantArea: '3.00 lac square footage manufacturing plant',
  warehouseArea: '1.50 lac square footage dedicated storage warehouses',
  certification: 'ISO 9001:2015',
  etpRecycling: '100%',
  packaging: 'Export-worthy seaworthy packing, stretch wrapping, edge protectors, and strapping as per requirement',
};

export function getProductBySlug(slug: string) {
  return paperProducts.find((product) => product.slug === slug);
}

export function getProductsByCategory(categoryId: string) {
  return paperProducts.filter((product) => product.categoryId === categoryId);
}
