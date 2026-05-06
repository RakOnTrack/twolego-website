export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  industryId: string;
  challenge: string;
  solution: string;
  result: string;
  resultMetric: string;
  sapProduct: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "mfg-s4hana",
    company: "National Manufacturer",
    industry: "Manufacturing",
    industryId: "manufacturing",
    challenge: "Legacy ERP on SAP ECC 6.0 with 15-year-old customizations slowing down month-end close from 10 to 20+ days",
    solution: "Greenfield SAP S/4HANA 2023 implementation with simplified finance and real-time inventory",
    result: "Month-end close reduced from 20 days to 3 days. Real-time inventory visibility across 8 plants.",
    resultMetric: "85% faster close",
    sapProduct: "SAP S/4HANA",
  },
  {
    id: "dist-b1",
    company: "Regional Distributor",
    industry: "Distribution",
    industryId: "distribution",
    challenge: "Managing 12,000 SKUs across 3 warehouses with spreadsheets and a standalone accounting system",
    solution: "SAP Business One implementation with warehouse management and automated reorder points",
    result: "Inventory accuracy improved from 78% to 99.2%. Stockouts reduced by 60%.",
    resultMetric: "99.2% inventory accuracy",
    sapProduct: "SAP Business One",
  },
  {
    id: "retail-pos",
    company: "Specialty Retailer",
    industry: "Retail",
    industryId: "retail",
    challenge: "52 store locations with siloed POS systems creating no consolidated view of customer or inventory data",
    solution: "SAP Business One with integrated POS, real-time stock visibility, and customer loyalty module",
    result: "Same-day inventory visibility across all 52 locations. 23% reduction in overstock carrying costs.",
    resultMetric: "23% cost reduction",
    sapProduct: "SAP Business One",
  },
  {
    id: "tech-byd",
    company: "Software Scale-up",
    industry: "High Technology",
    industryId: "hightech",
    challenge: "Rapid headcount growth from 80 to 400 employees in 18 months with spreadsheet-based financial reporting",
    solution: "SAP Business ByDesign cloud ERP with subscription revenue recognition and project billing",
    result: "Audit-ready financial close in 5 days. Revenue recognition compliance achieved for Series C investors.",
    resultMetric: "Investor-ready in 90 days",
    sapProduct: "SAP Business ByDesign",
  },
  {
    id: "hr-sf",
    company: "Hospitality Group",
    industry: "Service & Hospitality",
    industryId: "hospitality",
    challenge: "Manual HR processes for 3,200 employees across 18 properties with 40% annual turnover",
    solution: "SAP SuccessFactors full HCM suite including recruiting, onboarding, and performance management",
    result: "Time-to-hire reduced from 42 days to 18 days. Turnover reduced by 28% within first year.",
    resultMetric: "28% lower turnover",
    sapProduct: "SuccessFactors",
  },
  {
    id: "supply-mfg",
    company: "Auto Parts Manufacturer",
    industry: "Manufacturing",
    industryId: "manufacturing",
    challenge: "Supply chain disruptions causing $4M annual cost impact from expediting and production delays",
    solution: "SAP Integrated Business Planning (IBP) with demand sensing and supplier collaboration portal",
    result: "Supply chain disruption costs reduced by 67%. On-time delivery improved from 71% to 94%.",
    resultMetric: "$2.7M annual savings",
    sapProduct: "SAP S/4HANA",
  },
];
