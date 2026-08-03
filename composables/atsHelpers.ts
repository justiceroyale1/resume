const summary =
    'Senior backend and full-stack software engineer with seven years of experience building, scaling, and maintaining business-critical web platforms. Strong background in PHP, Laravel, TypeScript, Node.js, Vue.js, and React, with hands-on experience designing REST APIs, improving database performance, implementing background jobs, and building payment, verification, and complex operational workflows. Comfortable owning features from technical design through production support and collaborating remotely across the globe, having previously worked with distributed teams in Nigeria, Kenya, the United Kingdom, and the United States.'

const phoneNumber = '+234 813 054 6010'
const phoneHref = '+2348130546010'
const address = 'Abuja, Nigeria'
const availability = 'Open to remote employment and international contract roles'
const email = 'justiceroyale1@gmail.com'
const position = 'Senior Backend / Full-Stack Software Engineer'
const name = 'Justice Abutu'
const linkedinUrl = 'https://www.linkedin.com/in/justice-abutu-royale/'
const githubUrl = 'https://github.com/justiceroyale1'
const managedCoUrl = 'https://managedcohq.com/'
const resumeUrl = 'https://justiceroyale1.github.io/resume/'

const skillCategories = [
    {
        name: 'Backend',
        skills: ['PHP', 'Laravel', 'Node.js', 'TypeScript', 'JavaScript', 'REST APIs', 'Eloquent ORM', 'authentication', 'role-based access control', 'background jobs', 'queues', 'webhooks', 'payment integrations'],
    },
    {
        name: 'Frontend',
        skills: ['Vue.js', 'Vue 3', 'Nuxt.js', 'React', 'Pinia', 'Tailwind CSS', 'shadcn-vue', 'Bootstrap', 'Vuetify', 'Blade', 'Vite'],
    },
    {
        name: 'Databases and Caching',
        skills: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB', 'Redis', 'database transactions', 'indexing', 'query optimisation'],
    },
    {
        name: 'Infrastructure and Delivery',
        skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'Jenkins', 'CircleCI', 'Nginx', 'AWS EC2', 'AWS S3', 'Railway', 'Cloudflare', 'CI/CD', 'Laravel Horizon', 'Supervisor'],
    },
    {
        name: 'Testing, Quality, and Architecture',
        skills: ['PHPUnit', 'Cypress', 'unit testing', 'feature testing', 'integration testing', 'static analysis', 'code review', 'performance profiling', 'modular monoliths', 'microservices', 'multi-tenant applications', 'event-driven workflows', 'audit logging'],
    },
]

const skills = skillCategories.flatMap((category) => category.skills)

const educationList = [
    {
        title: 'Bachelor of Science in Computer Science',
        institution: 'Federal University of Lafia',
        location: 'Nasarawa, Nigeria',
        duration: '2013 – 2017',
        subtitle: 'Federal University of Lafia, Nasarawa, Nigeria | 2013 – 2017',
    },
]

const certificationList = [
    {
        title: 'Senior Full-Stack Software Engineering Certification',
        issuer: 'micro1',
        date: 'July 2026',
        description: 'Senior full-stack software engineering certification.',
        details: 'Assessment areas included core PHP, backend development, APIs, web architecture, databases, performance, scalability, and production engineering.',
        image: 'images/certificates/micro1-certification.jpg',
        topics: ['Core PHP', 'Backend Development', 'APIs', 'Web Architecture', 'Databases', 'Performance', 'Scalability', 'Production Engineering'],
    },
]

const experienceList = [
    {
        position: 'Senior Full-Stack Engineer',
        company: 'Coamana',
        location: 'Abuja, Nigeria',
        website: 'https://www.coamana.com/',
        duration: 'November 2024 – June 2026',
        current: false,
        description: 'Worked on AmanaMarket, a multi-country platform providing market traders with commerce, finance, verification, payment, logistics, and market-management tools.',
        tasks: [
            'Made 1,396 commits across the Laravel backend, Vue.js frontend, APIs, database layer, automated tests, and deployment tooling between December 2024 and May 2026.',
            'Improved finance and order-processing performance and built reporting, transaction-filtering, and trend-analysis APIs, contributing to a reported 40% reduction in order-processing time.',
            'Built verification and KYC workflows for wholesalers, suppliers, retailers, market leaders, and enterprise users across country-specific identity requirements.',
            'Delivered repayment, dispute, commission, credit-limit, audit-log, and transaction-statistics workflows with permissions, validation, transactions, and backend tests.',
            'Expanded payment and commerce capabilities across Nigeria and Kenya through M-Pesa, Paystack, VBank, wallets, pay-on-delivery, and inter-market trading.',
            'Built enterprise-administration and logistics features for markets, members, fees, invitations, suspensions, providers, vehicles, routes, order coordination, and payouts.',
            'Created reusable Vue 3 and shadcn-vue components for dashboards, forms, modals, comboboxes, tooltips, and market switching.',
            'Improved reliability through query logging, authorization safeguards, refactoring, CI stabilisation, and a parallel-test script that cut suite time by 68% on Apple Silicon and 83.3% on Intel machines.',
        ],
    },
    {
        position: 'Senior Full-Stack Developer',
        company: 'KadMap',
        location: 'Abuja, Nigeria',
        website: 'https://www.kadmap.com/',
        duration: 'August 2024 – November 2025',
        current: false,
        description: 'Worked on an offline-first cloud-computing platform that enabled organisations to operate on-premise infrastructure while retaining cloud-style administration.',
        tasks: [
            'Built the Authentication and Directory services responsible for user authentication and access to organisations, workspaces, and resources.',
            'Designed secure device onboarding using administrator-generated configuration, device and organisation identity, workspace permissions, and centrally issued authentication tokens.',
            'Contributed to an architecture in which local KadMap Data Machines communicated with central services for activation, restoration, licensing, and organisational data management.',
            'Built KadMap Connect features for configuring installations, managing subscriptions and add-ons, tracking instalment payments, and creating support tickets.',
            'Integrated the React application with authentication and licensing services through Convex while maintaining clear service ownership boundaries.',
        ],
    },
    {
        position: 'Full-Stack Developer',
        employmentType: 'Contract',
        company: 'New Avenue',
        location: 'New York, United States',
        website: 'https://www.newavenuehomes.com/',
        duration: 'November 2023 – February 2024',
        current: false,
        description: 'Contributed remotely to invoicing, scheduling, budgeting, payment, and communications workflows for a United States housing-operations platform.',
        tasks: [
            'Redesigned and optimised invoicing workflows, reducing processing errors by a reported 35%.',
            'Fixed issues in an automated scheduling system, improving resource allocation by a reported 50%.',
            'Built a budgeting module with real-time reporting and integrated third-party payment and email-campaign services while working with distributed teams and in-house frameworks.',
        ],
    },
    {
        position: 'Full-Stack Developer',
        company: 'XRadar360',
        location: 'Leicester, United Kingdom',
        website: '',
        duration: 'January 2021 – September 2023',
        current: false,
        description: 'Joined as a backend developer and later assumed responsibility for backend and frontend development in a legacy construction platform.',
        tasks: [
            'Built project and work-package workflows for one-time or recurring construction tasks with independent budgets.',
            'Developed expert onboarding, verification, notifications, competitive bidding, quotations, contract awards, and negotiation workflows.',
            'Implemented multi-currency escrow that held funds until work was completed, inspected, and approved.',
            'Built progress reporting with geo-tagged media plus complaint, dispute, and reconciliation workflows, and used Heroku to simplify early-stage deployment and maintenance.',
        ],
    },
    {
        position: 'Full-Stack Developer',
        employmentType: 'Contract',
        company: 'Truelandlord',
        location: 'Abuja, Nigeria',
        website: 'https://truelandlord.com/',
        duration: 'March 2022 – October 2022',
        current: false,
        description: 'Built property-management workflows for property owners, managers, and prospective tenants.',
        tasks: [
            'Built contract-management workflows with digital signatures, multi-factor authentication, and identity verification.',
            'Developed property search and recommendations and optimised queries, reducing response time by a reported 60%.',
            'Implemented responsive interfaces for property owners, managers, and prospective tenants.',
        ],
    },
    {
        position: 'Full-Stack Developer',
        company: 'SchoolShell',
        location: 'Abuja, Nigeria',
        website: 'https://schoolshell.com/',
        duration: 'April 2019 – August 2020',
        current: false,
        description: 'Contributed across backend, frontend, and database development during the early stage of my software engineering career.',
        tasks: [
            'Built inventory-management and reporting workflows for the Federal Judicial Service Commission.',
            'Developed student-admission, document-verification, and automated report-card functionality for education-management products.',
            'Improved application performance and built notifications connecting schools, teachers, and parents.',
        ],
    },
]

const independentProjectList = [
    {
        name: 'ManagedCo',
        role: 'Founder and Lead Engineer',
        duration: '2026 – Present',
        website: managedCoUrl,
        description: 'A multi-tenant operations platform that helps small businesses manage orders, inventory, customers, follow-up, and online storefronts from one system.',
        tasks: [
            'Designed and built the product from discovery and architecture through backend, frontend, deployment, and production support.',
            'Implemented tenant-aware authentication, permissions, order workflows, stock management, customer records, storefronts, and reporting.',
            'Built Laravel queue processing with Redis, separate application and worker services, S3-compatible storage, automated CI/CD, and environment-specific deployment.',
            'Resolved production issues involving session cookies, workers, Redis, DNS, runtime configuration, and cross-origin requests while validating operational needs with small businesses.',
        ],
    },
]

export const useAtsHelpers = () => {
    return {
        summary,
        phoneNumber,
        phoneHref,
        address,
        availability,
        email,
        name,
        position,
        skills,
        skillCategories,
        educationList,
        certificationList,
        experienceList,
        independentProjectList,
        linkedinUrl,
        githubUrl,
        managedCoUrl,
        resumeUrl,
    }
}
