export type PortfolioSlug =
  | "managedco"
  | "amanamarket"
  | "fjsc-inventory"
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
  previewHighlight: string;
  previewLabel?: string;
  operatingSituation?: string;
  operatingConstraints?: string[];
  workflowSteps?: { title: string; description: string }[];
  additionalWork?: string[];
  laterStatus?: string;
  contributions?: string[];
  contributionGroups?: { name: string; items: string[] }[];
  artifact: {
    layout: "hub" | "matrix" | "sequence" | "timeline";
    title: string;
    description: string;
    coreLabel?: string;
    items: { label: string; detail: string }[];
  };
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
  "/portfolio/fjsc-inventory",
  "/portfolio/kadmap",
  "/portfolio/xradar360",
] as const;

const proofPoints = [
  "Seven years building production web platforms",
  "AmanaMarket: 68% less full-suite test time on Apple Silicon",
  "Backend, frontend, testing and deployment ownership",
  "Remote collaboration across Nigeria, Kenya, the UK and the US",
];

const allProjects: PortfolioProject[] = [
  {
    slug: "managedco",
    name: "ManagedCo",
    category: "Multi-tenant business operations platform",
    role: "Founder and Lead Engineer",
    dates: "January 2026 - Present",
    summary:
      "ManagedCo connects the customer action, the staff record and the owner’s view. The owner still makes the decisions; the product provides a dependable place to check what happened.",
    problem:
      "As small businesses handle more transactions, operational information becomes difficult to trace across informal tools and individual staff members. ManagedCo brings those records and handovers into one tenant-aware system.",
    previewHighlight:
      "One sale and stock record connects storefront orders, in-store sales and the owner’s view.",
    operatingSituation:
      "Small businesses can sell online and over the counter while different staff members handle orders, stock and customer follow-up. The owner needs a reliable view of those actions without personally performing every routine task.",
    operatingConstraints: [
      "Online and in-store sales need to reduce the same available stock total.",
      "Staff permissions must reflect what the owner has agreed each person may do.",
      "The workflows need to remain approachable for people with little experience using business software.",
    ],
    workflowSteps: [
      { title: "Capture the sale once", description: "A customer can order through the storefront, or a staff member can record an in-store sale in ManagedCo." },
      { title: "Keep one stock record", description: "Whether the item sells online or over the counter, the quantity comes off the same available total." },
      { title: "Follow up with context", description: "Pending orders and customer purchase history make it easier to send relevant reminders or suggest products that are often bought together." },
      { title: "The owner stays in control", description: "The owner remains in charge of what each team member is allowed to do. Staff can handle agreed work without requiring the owner to perform every task personally just to retain visibility." },
    ],
    artifact: {
      layout: "hub",
      title: "One tenant-aware system",
      description: "Orders, customers, storefronts and reporting connect to the owner’s view.",
      coreLabel: "Owner’s view",
      items: [
        { label: "Orders", detail: "Order and stock workflows" },
        { label: "Customers", detail: "Records and follow-up" },
        { label: "Storefronts", detail: "Online selling" },
        { label: "Reporting", detail: "Business visibility" },
      ],
    },
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
    resultTitle: "Intended result",
    result:
      "ManagedCo is intended to reduce the time routine checking and chasing takes from an owner’s day, while remaining approachable for people with little experience using business software. The product brings customer actions, staff records and owner oversight into one dependable workflow.",
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
    externalLabel: "Open ManagedCo registration",
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
      "Agribusinesses and market participants needed a way to trade across distance, establish trust, access credit and complete transactions even when literacy, language or unfamiliar technology made self-service difficult.",
    previewHighlight:
      "Connected role-specific verification, retailer credit and local-language assisted transactions.",
    operatingSituation:
      "Amana Market brought retailers, suppliers, market agents, market leaders, logistics providers and enterprise users into one commerce environment. Each group had different verification requirements and responsibilities, while some users needed a person to help them complete the digital steps.",
    operatingConstraints: [
      "Verification requirements differed by role and could include identity, address, face, document and shop checks.",
      "A retailer’s verification level affected how much credit they could use to purchase produce.",
      "Repayment terms varied by transaction type and had to remain visible to the people following up.",
      "The workflow had to support people who preferred to transact through a call-centre agent in their local language.",
    ],
    workflowSteps: [
      { title: "Role-specific verification", description: "I implemented verification flows for retailers, suppliers, market agents, market leaders, logistics providers and enterprise users. The evidence requested changed with the role, rather than forcing every participant through one generic process." },
      { title: "Credit linked to verification", description: "For retailers, verification fed into the credit-allocation process. Approved credit could be used to buy produce, with repayment due within 14 days of delivery and interest determined by whether the order was inter-market, intra-market or pay on delivery." },
      { title: "Assisted transactions", description: "I worked on call-centre workflows that allowed authorised agents to transact for users, coordinate delivery, follow up on repayments and keep stock records current. Users who were comfortable with the application could still complete those actions themselves." },
      { title: "Market administration", description: "I also contributed to market-membership tools through which market leaders could verify members and track membership fees and other charges." },
    ],
    artifact: {
      layout: "matrix",
      title: "Connected market operations",
      description: "Commerce, finance, verification and logistics connect through AmanaMarket.",
      coreLabel: "AmanaMarket platform",
      items: [
        { label: "Commerce", detail: "Orders and inter-market trade" },
        { label: "Finance", detail: "Credit, wallets and payments" },
        { label: "Verification", detail: "KYC for market roles" },
        { label: "Logistics", detail: "Routes, vehicles and payouts" },
      ],
    },
    contributions: [
      "Role-specific KYC and compliance workflows",
      "Retailer credit allocation",
      "Call-centre assisted transactions",
      "Repayment and delivery coordination",
      "Stock-record updates",
      "Market membership and fee tools",
    ],
    additionalWork: [
      "Built reporting and transaction-filtering APIs, improved finance and order performance, and integrated M-Pesa, Paystack and VBank.",
      "Created reusable Vue 3 and shadcn-vue components, strengthened authorization safeguards and automated tests, and cut full-suite test time by 68% on Apple Silicon and 83.3% on Intel-based machines.",
    ],
    engineeringChallenge:
      "The application combined business-critical financial workflows with a substantial legacy surface and a hybrid frontend made up of Blade, Vue 3, older JavaScript, Bootstrap, Tailwind and newer reusable components.",
    decisions: [
      "Treat verification as a role-dependent workflow rather than a single completed-or-not flag.",
      "Connect credit access to the retailer’s verified status so eligibility and purchasing rules stayed aligned.",
      "Make assisted service a first-class operating path instead of an informal workaround outside the product.",
      "Keep market-leader verification and membership records useful for day-to-day market administration as well as trust.",
    ],
    resultTitle: "Outcome",
    result:
      "The resulting workflows made it possible for retailers to purchase produce on credit, for users to complete transactions with help from an agent in their local language, and for market leaders to manage member verification and fees in the same environment.",
    laterStatus:
      "The project was later strategically restructured after significant changes in market direction.",
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
    slug: "fjsc-inventory",
    name: "Inventory Solution at FJSC",
    category: "Intranet inventory and reporting system",
    role: "Full-Stack Developer at SchoolShell",
    dates: "2019 - 2020",
    summary:
      "An intranet inventory system for the Federal Judicial Service Commission that preserved purchase-batch costs, department allocations and asset disposals in the store’s books.",
    problem:
      "The store needed to account for inventory bought at different prices, items issued to departments, disposed assets and report totals without rebuilding the same records by hand for accounts and auditors.",
    previewHighlight:
      "Work that previously took at least three days took no more than three minutes after the system was installed.",
    previewLabel: "Result",
    operatingSituation:
      "Knowing the quantity of an item was not enough. Separate purchases of the same product could have different unit costs, and the remaining stock had to preserve that history. Staff also needed to know which department received an item and how much was recovered when an asset was sold.",
    operatingConstraints: [
      "Each purchase batch needed to retain its own price even when it contained the same product as an earlier receipt.",
      "Departmental requests could not issue stock until the store director approved them.",
      "Store, accounts and audit users needed different access to the same records and reports.",
      "The application had to run on the commission’s intranet without depending on a reliable internet connection.",
    ],
    workflowSteps: [
      { title: "Preserve purchase batches", description: "I implemented the foundational inventory system around uniquely identified receipts. Items on one receipt represented the same product bought at the same price, so later purchases at another price remained distinguishable in the stock records." },
      { title: "Approve department requests", description: "Departments submitted item requests through the system. The store director could review several requests and approve the selected requests together, leaving a traceable record of what each department asked for and received." },
      { title: "Record assets and disposals", description: "The system kept asset records for items such as vehicles and laptops, recorded their eventual sale in the store’s books and retained the amount recovered from the disposal." },
      { title: "Make books available on the intranet", description: "Accounts staff received permissioned access to view and print the store’s books. I deployed the application on a dedicated server in the store department and configured it to start with the server for straightforward intranet use." },
    ],
    artifact: {
      layout: "timeline",
      title: "From receipt to report",
      description: "The records that made the store’s books ready to use.",
      items: [
        { label: "Receive", detail: "Separate receipt and batch prices" },
        { label: "Request", detail: "Department asks for stock" },
        { label: "Approve", detail: "Store director authorises issue" },
        { label: "Report", detail: "Books include allocations and disposals" },
      ],
    },
    contributions: [
      "Receipt and purchase-batch records",
      "Departmental stock requests",
      "Bulk approval workflow",
      "Asset and disposal records",
      "Permissioned books and reports",
      "Dedicated intranet deployment",
    ],
    engineeringChallenge:
      "The system had to keep purchase costs traceable by batch while giving store, accounts and audit users the records they needed through a local intranet deployment.",
    decisions: [
      "Preserve purchase price at receipt-batch level instead of assigning one current price to every remaining unit of a product.",
      "Make department requests and director approvals part of the inventory record rather than a separate paper process.",
      "Record asset disposal and recovered value alongside purchase and allocation history.",
      "Use a dedicated intranet deployment to meet the organisation’s security and connectivity constraints.",
    ],
    resultTitle: "Result",
    result:
      "Before the system was installed, the processes took at least three days, with report preparation taking much of that time. Afterwards, the same work took no more than three minutes because purchases, allocations and disposals were already available to the reports.",
    technologies: ["PHP", "Laravel", "jQuery", "JavaScript", "Bootstrap CSS", "MySQL"],
    seoDescription:
      "How Justice Abutu built an intranet inventory system at FJSC with batch-cost tracking, department approvals, asset disposal records and reporting.",
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
    previewHighlight:
      "Built the Authentication and Directory services for users, devices, organisations, workspaces and resources.",
    artifact: {
      layout: "sequence",
      title: "Selected device authentication flow",
      description: "The authentication path described in my implementation work.",
      items: [
        { label: "Configure", detail: "Administrator-generated authentication configuration" },
        { label: "Request", detail: "Device identity and organisational context" },
        { label: "Issue token", detail: "Workspace, resource and permission data" },
      ],
    },
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
      "Project owners, especially those managing construction from abroad, needed better evidence of who they were hiring, what had been completed on site and whether a funded task was ready for payment.",
    previewHighlight:
      "Funded tasks, geotagged progress reports and a defined review and dispute path gave remote owners evidence before payment release.",
    operatingSituation:
      "Construction progress can be difficult to judge from occasional messages and photographs. Work may be covered before it is inspected, while an owner who cannot visit regularly has to rely on other people’s accounts of the project, the contractor and each request for payment.",
    operatingConstraints: [
      "Owners and experts could be in different locations and needed a shared record of the agreed work.",
      "Photographs and videos needed enough context to support progress review rather than act as isolated updates.",
      "Experts needed confidence that task funds existed, while owners needed a review point before payment was released.",
      "Disagreements required explicit response windows and a final arbitration path.",
    ],
    workflowSteps: [
      { title: "Verify the expert", description: "I built identity and address checks for experts registering as individuals or organisations. Experts could also describe previous projects and attach photographs so prospective clients had more than a verbal claim to assess." },
      { title: "Define and fund the work", description: "Owners could place a project on Google Maps, divide it into separate tasks and define each task’s conditions, start time, deadline and recurrence. Experts submitted bids, and the accepted quote was paid into escrow before work began." },
      { title: "Review progress evidence", description: "Depending on the task, experts submitted daily or weekly updates with photographs and video. I added geotagging so an image’s recorded location could be checked against the project site and compared with earlier reports." },
      { title: "Resolve disputes", description: "I also built the dispute process. Either party could raise a dispute; the other had one business week to respond. Unresolved cases moved to a platform arbitrator who heard both sides before making the final decision." },
    ],
    artifact: {
      layout: "timeline",
      title: "A traceable construction workflow",
      description: "The stages supported by the platform's project and payment records.",
      items: [
        { label: "Find and agree", detail: "Verification, bids, quotation and contract" },
        { label: "Track progress", detail: "Work packages, reports, photos and video" },
        { label: "Review work", detail: "Completion evidence and approval" },
        { label: "Release funds", detail: "Multi-currency escrow after review" },
      ],
    },
    contributions: [
      "Expert identity and address verification",
      "Expert project portfolios",
      "Mapped projects and scheduled tasks",
      "Bidding and escrow-funded work",
      "Geotagged progress reporting",
      "Dispute and arbitration workflow",
    ],
    additionalWork: [
      "Joined as a backend developer and later assumed responsibility for both backend and frontend development.",
      "Implemented multi-currency escrow, expert notifications and financial reconciliation.",
    ],
    engineeringChallenge:
      "The workflow connected trust, verification, contractual decisions, progress evidence and payment release. Each stage needed a reliable record because disagreements could ultimately affect how escrowed funds were distributed.",
    decisions: [
      "Model work as separately funded tasks so progress, evidence and payment could be reviewed at the level where a problem occurred.",
      "Record recurring reporting requirements explicitly instead of relying on informal promises to send updates.",
      "Attach location evidence to submitted images and retain earlier updates for comparison over time.",
      "Encode dispute deadlines and arbitration responsibility so escrow release was governed by a visible process.",
    ],
    resultTitle: "Outcome",
    result:
      "Project owners could follow individual tasks through scheduled reports, photographs, videos and recorded image locations without visiting the site every time. Experts could see that accepted work was funded, while owners retained a review and dispute process before payment was released.",
    laterStatus:
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

const featuredProjects = allProjects.filter((project) => project.slug !== "kadmap");

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
  allProjects.find((project) => project.slug === slug);

export const usePortfolioContent = () => ({
  proofPoints,
  featuredProjects,
  skillGroups,
  additionalExperience,
  workPrinciples,
  currentFocus,
});
