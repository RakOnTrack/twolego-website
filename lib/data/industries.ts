export interface Industry {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  painPoint: string;
  solution: string;
  clients?: string;
}

export const industries: Industry[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "⚙️",
    gradient: "from-blue-900/40 to-teal-900/20",
    painPoint: "Disconnected shop floor systems, production inefficiencies, and supply chain blind spots",
    solution: "SAP S/4HANA Manufacturing with real-time production planning, quality management, and IoT integration",
    clients: "Global manufacturers across North America and Europe",
  },
  {
    id: "distribution",
    name: "Distribution",
    icon: "📦",
    gradient: "from-emerald-900/40 to-teal-900/20",
    painPoint: "Complex multi-warehouse operations, inventory carrying costs, and last-mile visibility",
    solution: "End-to-end warehouse management, automated procurement, and demand-driven replenishment",
    clients: "Regional and national distributors",
  },
  {
    id: "retail",
    name: "Retail",
    icon: "🛍️",
    gradient: "from-purple-900/40 to-teal-900/20",
    painPoint: "Omnichannel complexity, inventory shrinkage, and fragmented customer data",
    solution: "Unified SAP retail platform with POS integration, loyalty programs, and omnichannel fulfillment",
    clients: "Canadian retailers with 5–500+ locations",
  },
  {
    id: "hospitality",
    name: "Service & Hospitality",
    icon: "🏨",
    gradient: "from-amber-900/40 to-teal-900/20",
    painPoint: "Labor cost management, seasonal demand forecasting, and guest experience consistency",
    solution: "SAP-based workforce management, procurement, and financial consolidation for multi-location operations",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: "🎬",
    gradient: "from-red-900/40 to-teal-900/20",
    painPoint: "Rights management, royalty tracking, and project cost overruns across productions",
    solution: "SAP project systems, contract management, and financial analytics tailored for entertainment operations",
  },
  {
    id: "hightech",
    name: "High Technology",
    icon: "💻",
    gradient: "from-cyan-900/40 to-teal-900/20",
    painPoint: "Rapid product lifecycles, R&D cost tracking, and global revenue recognition complexity",
    solution: "SAP product lifecycle management, revenue accounting, and real-time financial reporting",
    clients: "Software, hardware, and technology service companies",
  },
  {
    id: "travel",
    name: "Travel & Transport",
    icon: "✈️",
    gradient: "from-indigo-900/40 to-teal-900/20",
    painPoint: "Dynamic pricing management, fleet/asset optimization, and fragmented booking data",
    solution: "SAP asset management, integrated financials, and customer experience platforms for travel operators",
  },
];
