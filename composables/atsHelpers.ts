const summary =
    'Senior software engineer with experience building, maintaining, and optimizing enterprise web applications. Hands-on experience designing REST APIs, improving database performance, implementing background jobs, and building payment, verification, and complex operational workflows. Comfortable owning features from technical design through production support and collaborating remotely across the globe, having previously worked with distributed teams in Nigeria, Kenya, the United Kingdom, and the United States.'

const phoneNumber = '+234 813 054 6010'
const phoneHref = '+2348130546010'
const address = 'Abuja, Nigeria'
const availability = 'Open to all contract types'
const email = 'justiceroyale1@gmail.com'
const position = 'Senior Software Engineer'
const name = 'Justice Abutu'
const linkedinUrl = 'https://www.linkedin.com/in/justice-abutu-royale/'
const githubUrl = 'https://github.com/justiceroyale1'
const managedCoUrl = 'https://managedcohq.com/'
const resumeUrl = 'https://justiceroyale1.github.io/resume/'
const portfolioUrl = 'https://justiceroyale1.github.io/resume/portfolio'

const skillCategories = [
    {
        name: 'Backend',
        skills: ['PHP', 'Laravel', 'Node.js', 'TypeScript', 'JavaScript', 'Adonis.js'],
    },
    {
        name: 'Frontend',
        skills: ['Vue.js', 'Nuxt.js', 'React', 'Pinia', 'Tailwind CSS', 'Shadcn-vue', 'Bootstrap CSS', 'Vuetify', 'Blade', 'Vite', 'Inertia.js'],
    },
    {
        name: 'Databases and Caching',
        skills: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
        name: 'Infrastructure and Delivery',
        skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'Nginx', 'AWS S3', 'Railway', 'Hostinger'],
    },
]

const skills = skillCategories.flatMap((category) => category.skills)

const educationList = [
    {
        title: 'Bachelor of Science in Computer Science',
        institution: 'Federal University of Lafia',
        location: 'Nasarawa, Nigeria',
        duration: '2013 – 2017',
        subtitle: 'Federal University of Lafia, Nasarawa, Nigeria',
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
        location: 'Abuja, Nigeria & Nairobi, Kenya',
        website: 'https://www.coamana.com/',
        duration: 'November 2024 – June 2026',
        current: false,
        description: 'Worked on AmanaMarket, a multi-country platform providing market traders with commerce, finance, verification, payment, logistics, and market-management tools.',
        tasks: [
            'Improved finance and order-processing performance and built reporting, transaction-filtering, and trend-analysis APIs, contributing to a reported 40% reduction in order-processing time.',
            // 'Delivered repayment, dispute, commission, credit-limit, audit-log, and transaction-statistics workflows with permissions, validation, transactions, and backend tests. This cut down administrative tasks and processing time in half.',
            'Built verification and KYC workflows for wholesalers, suppliers, retailers, market leaders, and enterprise users across country-specific identity requirements rasing complaince for new users from 33% to 100%.',
            'Expanded payment and commerce capabilities across Nigeria and Kenya through M-Pesa, Paystack, VBank, wallets, pay-on-delivery, and inter-market trading. This doubled the channels for revenue on the platform.',
            'Created reusable Vue 3 and shadcn-vue components for dashboards, forms, modals, comboboxes, tooltips, and market switching halving the development time for UI components.',
            'Improved reliability through query logging, authorization safeguards, refactoring, CI stabilisation, and a parallel-test script that cut suite time by 68% on Apple Silicon and 83.3% on Intel machines.',
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
        description: 'Took over a stalled legacy codebase. Built it into a full-fledged construction platform.',
        tasks: [
            'Took over a legacy project that had stalled for a year. Optimized the backend and removed redundant code which led to a completion of the MVP in 6 months.',
            'Developed expert onboarding, verification, notifications, competitive bidding, quotations, contract awards, and negotiation workflows. This reduced the time to verification from over 2 months to about a week.',
            'Implemented multi-currency escrow that held funds until work was completed, inspected, and approved. This saved users about 80% in sunken construction costs.',
            'Built progress reporting with geo-tagged media plus complaint, dispute, and reconciliation workflows, so users saved on transportation costs by monitoring their projects remotely.',
        ],
    },
    {
        position: 'Full-Stack Developer',
        company: 'SchoolShell',
        location: 'Abuja, Nigeria',
        website: 'https://schoolshell.com/',
        duration: 'April 2019 – August 2020',
        current: false,
        description: 'Built an enterprise management information system for a government agency. Also contrubuted to the flagship product (SchoolShell).',
        tasks: [
            'Built an enterprise management information system for the Federal Judicial Service Commission. Cut operational overhead from several days to 3 minutes.',
            'Developed student-admission, document-verification, and automated report-card functionality for education-management products. This led to a minimum time and cost savings of 30% for the schools and parents.',
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
        linkedinUrl,
        githubUrl,
        managedCoUrl,
        resumeUrl,
        portfolioUrl
    }
}
