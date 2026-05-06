export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  benefits: string[];
  category: "erp" | "hr" | "analytics" | "cloud" | "other";
}

export const services: Service[] = [
  {
    id: "s4hana",
    title: "SAP S/4HANA",
    shortDesc: "Enterprise ERP for large-scale digital transformation",
    description:
      "SAP S/4HANA is the intelligent ERP system of the future. We guide enterprise organizations through end-to-end S/4HANA implementations, migrations from legacy SAP, and greenfield deployments.",
    icon: "🏢",
    benefits: [
      "Real-time analytics with embedded AI",
      "Simplified data model for faster transactions",
      "Cloud-native or on-premise deployment",
      "Seamless integration with SAP ecosystem",
    ],
    category: "erp",
  },
  {
    id: "business-one",
    title: "SAP Business One",
    shortDesc: "Tailored ERP for growing small and mid-sized businesses",
    description:
      "SAP Business One delivers complete, integrated ERP functionality designed specifically for SMEs. We specialize in rapid, cost-effective B1 implementations with Canadian localization.",
    icon: "🚀",
    benefits: [
      "Full financial and accounting management",
      "Inventory, purchasing, and sales automation",
      "CRM and customer management built-in",
      "Canadian payroll and tax compliance",
    ],
    category: "erp",
  },
  {
    id: "byd",
    title: "SAP Business ByDesign",
    shortDesc: "Full-suite cloud ERP for mid-market companies",
    description:
      "Business ByDesign offers mid-market companies a complete, cloud-based ERP solution without the complexity of enterprise implementations. Ideal for rapid growth companies.",
    icon: "☁️",
    benefits: [
      "100% cloud-based, no infrastructure cost",
      "Rapid deployment in weeks, not months",
      "Built-in best practices for 20+ industries",
      "Scales with your business growth",
    ],
    category: "erp",
  },
  {
    id: "successfactors",
    title: "SuccessFactors",
    shortDesc: "Comprehensive human capital management in the cloud",
    description:
      "SAP SuccessFactors transforms HR from administrative overhead into a strategic advantage. We implement the full HCM suite including payroll, talent, and workforce planning.",
    icon: "👥",
    benefits: [
      "Recruiting, onboarding, and performance management",
      "Learning management and career development",
      "Workforce analytics and planning",
      "Employee experience and engagement tools",
    ],
    category: "hr",
  },
  {
    id: "supply-chain",
    title: "Supply Chain Management",
    shortDesc: "End-to-end supply chain visibility and optimization",
    description:
      "Optimize your supply chain from procurement through delivery with SAP-integrated supply chain solutions. Gain real-time visibility, reduce costs, and respond faster to market changes.",
    icon: "🔗",
    benefits: [
      "Demand planning and inventory optimization",
      "Supplier collaboration portals",
      "Logistics and transportation management",
      "Real-time supply chain analytics",
    ],
    category: "other",
  },
  {
    id: "analytics",
    title: "Business Analytics",
    shortDesc: "Transform data into decisions with SAP analytics",
    description:
      "Leverage SAP Analytics Cloud and embedded BI tools to turn your ERP data into strategic insights. We build dashboards, reports, and predictive models tailored to your KPIs.",
    icon: "📊",
    benefits: [
      "SAP Analytics Cloud implementation",
      "Custom executive dashboards",
      "Predictive analytics and forecasting",
      "Integration with existing BI tools",
    ],
    category: "analytics",
  },
  {
    id: "cloud",
    title: "Cloud Services",
    shortDesc: "Migrate and optimize your SAP workloads in the cloud",
    description:
      "Move your SAP landscape to the cloud with confidence. We support RISE with SAP, hyperscaler migrations (AWS, Azure, GCP), and hybrid architectures.",
    icon: "⚡",
    benefits: [
      "RISE with SAP implementation",
      "Hyperscaler migration planning",
      "Cloud cost optimization",
      "24/7 managed cloud services",
    ],
    category: "cloud",
  },
  {
    id: "crm",
    title: "CRM & Customer Experience",
    shortDesc: "SAP CX solutions for sales, service, and marketing",
    description:
      "Unify your customer interactions across sales, service, and marketing with SAP Customer Experience solutions. Drive revenue growth with data-driven customer intelligence.",
    icon: "💼",
    benefits: [
      "SAP Sales Cloud implementation",
      "Customer service and field service",
      "Marketing automation and personalization",
      "360-degree customer view",
    ],
    category: "other",
  },
  {
    id: "payroll",
    title: "Payroll Solutions",
    shortDesc: "Canadian-localized payroll built on SAP",
    description:
      "Run accurate, compliant Canadian payroll with SAP-integrated payroll solutions. We handle federal and provincial compliance, T4 processing, and year-end reporting.",
    icon: "💰",
    benefits: [
      "Canadian federal and provincial compliance",
      "Direct deposit and ROE processing",
      "Integration with SuccessFactors HCM",
      "Year-end T4 and tax reporting",
    ],
    category: "hr",
  },
];
