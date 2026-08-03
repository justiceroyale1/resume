export type PortfolioSlug =
  | "managedco"
  | "amanamarket"
  | "kadmap"
  | "xradar360";

export interface PortfolioProject {
  slug: PortfolioSlug;
  name: string;
  category: string;
  role: string;
  dates: string;
  summary: string;
  problem: string;
  previewHighlights: string[];
  contributions: string[];
  engineeringChallenge: string;
  decisions: string[];
  resultTitle: string;
  result: string;
  lessons?: string;
  technologies: string[];
  externalUrl?: string;
  externalLabel?: string;
  seoDescription: string;
}

export interface PortfolioSkillGroup {
  name: string;
  skills: string[];
}

export interface AdditionalExperience {
  company: string;
  role: string;
  dates: string;
  description: string;
  highlights: string[];
}

export const portfolioSiteUrl = "https://justiceroyale1.github.io/resume";

export const portfolioCaseStudyRoutes = [
  "/portfolio/managedco",
  "/portfolio/amanamarket",
  "/portfolio/kadmap",
  "/portfolio/xradar360",
] as const;

const proofPoints = [
  "Seven years building production web platforms",
  "1,396 commits on a multi-country commerce platform",
  "Backend, frontend, testing and deployment ownership",
  "Remote collaboration across Nigeria, Kenya, the UK and the US",
];

const featuredProjects: PortfolioProject[] = [
  {
    slug: "managedco",
    name: "ManagedCo",
    category: "Multi-tenant business operations platform",
    role: "Founder and Lead Engineer",
    dates: "2026 to present",
    summary:
      "ManagedCo helps small businesses manage orders, inventory, customers, follow-up and online storefronts without relying on disconnected spreadsheets, notebooks and messaging apps.",
    problem:
      "As small businesses handle more transactions, operational information becomes difficult to trace across informal tools and individual staff members. ManagedCo brings those records and handovers into one tenant-aware system.",
    previewHighlights: [
      "Designed and built the product from discovery and architecture through deployment and production support.",
      "Implemented multi-tenant access control, order and stock workflows, customer records, storefronts and reporting.",
      "Deployed separate application and worker services with Redis, S3-compatible storage and GitHub Actions.",
    ],
    contributions: [
      "Led product discovery, architecture, backend development, frontend development and deployment.",
      "Built tenant-aware authentication, permissions and operational workflows for orders, inventory, customers and follow-up.",
      "Created business storefronts and reporting features while keeping tenant data and actions isolated.",
      "Configured Laravel queues, Redis, separate worker services, S3-compatible storage and environment-specific deployments.",
      "Built an automated delivery pipeline with GitHub Actions.",
    ],
    engineeringChallenge:
      "Some of the most valuable work has been diagnosing behaviour that crossed application, infrastructure and browser boundaries. Production issues included session-cookie collisions between staging and production, worker configuration, Redis latency, DNS records, missing runtime configuration and cross-origin requests.",
    decisions: [
      "Use one multi-tenant product rather than separate deployments for each business, with authorization and data isolation enforced throughout the application.",
      "Run web and queue workloads as separate services so background work can be operated and diagnosed independently.",
      "Keep the product focused on traceable operational workflows instead of presenting disconnected feature screens.",
    ],
    resultTitle: "What this project demonstrates",
    result:
      "ManagedCo is my clearest example of current end-to-end ownership: moving from an operational problem to product decisions, architecture, implementation, delivery and production support.",
    technologies: [
      "PHP",
      "Laravel",
      "Vue 3",
      "Nuxt 3",
      "Pinia",
      "Tailwind CSS",
      "shadcn-vue",
      "MySQL",
      "Redis",
      "Docker",
      "Railway",
      "Cloudflare",
      "S3-compatible storage",
      "GitHub Actions",
    ],
    externalUrl: "https://managedcohq.com/app/register",
    externalLabel: "Explore ManagedCo",
    seoDescription:
      "How Justice Abutu designed, built and operates ManagedCo, a multi-tenant platform for small-business orders, inventory, customers and storefronts.",
  },
  {
    slug: "amanamarket",
    name: "AmanaMarket",
    category: "Multi-country commerce and financial workflows",
    role: "Senior Full-Stack Engineer at Coamana",
    dates: "November 2024 to June 2026",
    summary:
      "AmanaMarket gave market traders access to connected commerce, credit, verification, payment, logistics and market-management tools across Nigeria and Kenya.",
    problem:
      "Finance, commerce, identity verification, logistics and enterprise administration had to operate as one platform without weakening authorization, transactional integrity or performance across a large legacy surface.",
    previewHighlights: [
      "Made 1,396 commits across the Laravel backend, Vue frontend, APIs, database, tests and deployment tooling.",
      "Built finance, KYC, payment, commerce, enterprise administration and logistics workflows.",
      "Cut full-suite test time by 68% on Apple Silicon and 83.3% on Intel-based machines.",
    ],
    contributions: [
      "Made 1,396 commits between December 2024 and May 2026 across backend, frontend, APIs, database code, automated tests and deployment tooling.",
      "Built reporting, order-count, trend and transaction-filtering APIs and improved finance and order performance.",
      "Delivered KYC and verification for wholesalers, suppliers, retailers, market leaders and enterprise users.",
      "Implemented credit limits, repayments, disputes, commissions, audit logs, wallets and payment summaries.",
      "Integrated M-Pesa, Paystack and VBank and supported inter-market commerce and pay-on-delivery workflows.",
      "Built enterprise administration and logistics-provider workflows covering members, vehicles, routes, coordination and payouts.",
      "Created reusable Vue 3 and shadcn-vue components and strengthened query logging, authorization safeguards and automated tests.",
    ],
    engineeringChallenge:
      "The application combined business-critical financial workflows with a substantial legacy surface and a hybrid frontend made up of Blade, Vue 3, older JavaScript, Bootstrap, Tailwind and newer reusable components.",
    decisions: [
      "Introduced separate endpoints in cases where modifying fragile legacy endpoints created a higher regression risk.",
      "Modernised the frontend gradually instead of attempting a full rewrite, accepting temporary duplication and bundle complexity to protect delivery.",
      "Used deployment configuration for Nigeria- and Kenya-specific differences, which was faster to deliver but required maintaining two largely similar application variants.",
      "Created isolated parallel-test databases so faster feedback did not compromise test independence.",
    ],
    resultTitle: "Outcome",
    result:
      "The project was strategically restructured after significant changes in market direction.",
    lessons:
      "I learned to build a deeper system map earlier when joining a large product. Understanding the main domains, dependencies and legacy constraints sooner makes practical improvements easier to propose without disrupting delivery.",
    technologies: [
      "PHP 8.4",
      "Laravel 12",
      "Vue 3",
      "Pinia",
      "MySQL",
      "Redis",
      "Tailwind CSS",
      "shadcn-vue",
      "Bootstrap",
      "Blade",
      "Docker",
      "PHPUnit",
      "Cypress",
      "Vite",
      "GitHub Actions",
    ],
    seoDescription:
      "Justice Abutu's work on AmanaMarket across Laravel, Vue, payments, KYC, logistics, financial workflows and faster parallel testing.",
  },
  {
    slug: "kadmap",
    name: "KadMap",
    category: "Offline-first cloud-computing platform",
    role: "Senior Full-Stack Developer",
    dates: "August 2024 to November 2025",
    summary:
      "KadMap was designed to let organisations operate infrastructure on-premise while retaining cloud-style administration in environments without continuous central connectivity.",
    problem:
      "Users and devices needed secure access to organisations, workspaces and resources even when a local KadMap Data Machine could not continuously depend on central services.",
    previewHighlights: [
      "Built the Authentication and Directory services for users, devices, organisations, workspaces and resources.",
      "Designed device onboarding around administrator configuration, identity, resource and permission data.",
      "Built KadMap Connect workflows for machine setup, subscriptions, add-ons, payments and support.",
    ],
    contributions: [
      "Built the Authentication and Directory services responsible for user identity and access to organisations, workspaces and resources.",
      "Implemented a flow in which a device received administrator-generated authentication configuration before requesting a token with its identity, organisation, workspace, resource and permission data.",
      "Worked on the communication between local KadMap Data Machines and central services during activation, restoration and organisational-data operations.",
      "Built KadMap Connect features for setup-code and QR-code validation, subscriptions, add-ons, instalment payments and support tickets.",
    ],
    engineeringChallenge:
      "The authentication model had to support distributed local infrastructure while preserving a trustworthy relationship with central identity, directory, licensing and registry services.",
    decisions: [
      "Used administrator-generated configuration to establish device and organisational context before token issuance.",
      "Kept direct ownership boundaries clear: my implementation covered Authentication, Directory and KadMap Connect rather than claiming the entire platform.",
      "Used Encore for central services to accelerate delivery and obtain microservice structure, accepting greater dependence on Encore's conventions and technical decisions.",
    ],
    resultTitle: "Outcome",
    result:
      "Development ended before version one was completed because the project ran out of funding.",
    lessons:
      "I would validate a narrower infrastructure product first: make the on-premise hardware and local cloud environment easy for developers and technology companies to configure, then delay the wider application ecosystem until the core product had real customer validation.",
    technologies: [
      "Node.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Encore",
      "Convex",
    ],
    seoDescription:
      "How Justice Abutu built authentication, directory and setup workflows for KadMap's distributed offline-first infrastructure platform.",
  },
  {
    slug: "xradar360",
    name: "XRadar360",
    category: "Construction project and escrow platform",
    role: "Full-Stack Developer",
    dates: "January 2021 to September 2023",
    summary:
      "XRadar360 helped people manage construction work in Nigeria remotely, with traceable agreements, payments, progress evidence, complaints and disputes.",
    problem:
      "Project owners, particularly Nigerians living abroad, needed a reliable way to find professionals, supervise work and preserve trustworthy records without being physically present throughout a project.",
    previewHighlights: [
      "Built professional onboarding, verification, bidding, quotation and contract-award workflows.",
      "Implemented multi-currency escrow and progress reporting with geo-tagged photographs and video.",
      "Delivered complaints, arbitration, dispute resolution and financial reconciliation workflows.",
    ],
    contributions: [
      "Joined as a backend developer and later assumed responsibility for both backend and frontend development.",
      "Built work packages with independent budgets and one-time or recurring execution requirements.",
      "Delivered professional onboarding, verification, expert notifications, competitive bidding, quotations, negotiation and contract awards.",
      "Implemented multi-currency escrow that released funds after completion, review and approval.",
      "Built written progress reports, geo-tagged photographs, video updates, complaints, structured arbitration and financial reconciliation.",
    ],
    engineeringChallenge:
      "The workflow connected trust, verification, contractual decisions, progress evidence and payment release. Each stage needed a reliable record because disagreements could ultimately affect how escrowed funds were distributed.",
    decisions: [
      "Extended the existing legacy codebase to shorten the route to launch, accepting technical limitations instead of undertaking a full rewrite.",
      "Used Heroku to reduce deployment time and operational cost for an early-stage product, accepting less infrastructure control.",
      "Modelled projects as work packages so budgets, execution requirements, reports and approvals could be tracked independently.",
    ],
    resultTitle: "Outcome",
    result:
      "The platform launched but did not gain the expected market traction and was discontinued.",
    lessons:
      "I would validate the service before building the complete platform by executing a small number of construction projects end to end. That would produce revenue and reveal the real requirements around trust, reporting, payments, verification and disputes before significant product investment.",
    technologies: [
      "PHP",
      "Laravel",
      "Vue.js",
      "Nuxt.js",
      "Bootstrap",
      "Vuetify",
      "Heroku",
    ],
    seoDescription:
      "Justice Abutu's work on XRadar360 across construction workflows, bidding, progress evidence, multi-currency escrow and dispute resolution.",
  },
];

const skillGroups: PortfolioSkillGroup[] = [
  {
    name: "Backend and APIs",
    skills: [
      "PHP and Laravel",
      "Node.js and TypeScript",
      "REST API design",
      "Authentication and authorization",
      "Queues and background jobs",
      "Payments and third-party integrations",
      "Transactional workflows",
      "Validation, audit logs and error handling",
    ],
  },
  {
    name: "Frontend and product delivery",
    skills: [
      "Vue.js and Vue 3",
      "Nuxt.js and Nuxt 3",
      "React",
      "Pinia",
      "Tailwind CSS and shadcn-vue",
      "Bootstrap and Vuetify",
      "Responsive, reusable interfaces",
    ],
  },
  {
    name: "Data and infrastructure",
    skills: [
      "MySQL, MariaDB and PostgreSQL",
      "Redis",
      "Transactions, indexing and query optimisation",
      "Docker and Docker Compose",
      "GitHub Actions",
      "Laravel Horizon and Supervisor",
      "Railway, Cloudflare and AWS services",
      "Production deployment and debugging",
    ],
  },
  {
    name: "Testing and quality",
    skills: [
      "PHPUnit unit and feature tests",
      "Cypress end-to-end tests",
      "Parallel test execution",
      "Static analysis",
      "Code review",
      "CI/CD",
      "Performance profiling",
      "Legacy-system refactoring",
    ],
  },
];

const additionalExperience: AdditionalExperience[] = [
  {
    company: "New Avenue Homes",
    role: "Full-Stack Developer, Contract",
    dates: "November 2023 to February 2024",
    description:
      "Contributed remotely to an operations platform for accessory dwelling unit projects in the United States.",
    highlights: [
      "Worked on invoicing, automated scheduling, budgeting and analytics.",
      "Integrated payment and email-campaign services.",
      "Collaborated across the United States and Nigeria using the organisation's in-house frameworks and libraries.",
    ],
  },
  {
    company: "Truelandlord",
    role: "Full-Stack Developer, Contract",
    dates: "March 2022 to October 2022",
    description:
      "Worked on property-management and housing workflows for property owners, managers and prospective tenants.",
    highlights: [
      "Built contract-management and digital-signature workflows.",
      "Implemented multi-factor authentication and identity verification.",
      "Contributed to property search and recommendation features.",
    ],
  },
  {
    company: "SchoolShell",
    role: "Full-Stack Developer",
    dates: "April 2019 to August 2020",
    description:
      "Built education-management products and an inventory-management system during the early stage of my engineering career.",
    highlights: [
      "Delivered student admission, document verification and report-card generation.",
      "Built inventory reporting for the Federal Judicial Service Commission.",
      "Worked on notifications and backend, frontend and database performance.",
    ],
  },
];

const workPrinciples = [
  "Clear ownership",
  "Reliable data",
  "Explicit authorization",
  "Practical tests",
  "Safe releases",
  "Maintainable interfaces",
  "Honest trade-offs",
  "Understanding why a feature exists before deciding how to build it",
];

const currentFocus = [
  "SaaS",
  "Fintech and payments",
  "Commerce and marketplaces",
  "Business operations",
  "Logistics",
  "Workflow-heavy enterprise products",
  "Teams modernising a mature platform",
];

export const getPortfolioProject = (slug: string) =>
  featuredProjects.find((project) => project.slug === slug);

export const usePortfolioContent = () => ({
  proofPoints,
  featuredProjects,
  skillGroups,
  additionalExperience,
  workPrinciples,
  currentFocus,
});
