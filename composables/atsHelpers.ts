const summary = "Results-driven Full Stack Software Engineer with 6+ years of experience in building scalable web applications and microservices. Proven track record of delivering high-performance solutions using modern technologies like Node.js, Vue.js, React, and Laravel. Strong expertise in RESTful API development, database optimization, and cloud infrastructure. Adept at leading development teams, implementing CI/CD pipelines, and driving technical excellence through code reviews and best practices."

const phoneNumber = "+2348130546010"
const address = 'Abuja, Nigeria'
const email = 'justiceroyale1@gmail.com'
const position = 'Senior Full Stack Software Engineer'
const name = 'Justice Abutu'
const linkedinUrl = 'https://www.linkedin.com/in/justice-abutu-royale/'
const githubUrl = 'https://github.com/justicemax'

const skills = [
    'Full Stack Software Engineering',
    'RESTful API Design',
    'Microservices Architecture',
    'Cloud Infrastructure (AWS)',
    'CI/CD Implementation',
    'Database Optimization',
    'Docker & Containerization',
    'React.js & Vue.js',
    'Node.js & Express.js',
    'Laravel & PHP',
    'TypeScript & JavaScript',
    'MongoDB & MySQL',
    'GraphQL',
    'Redis & Caching Strategies',
    'Git & GitHub',
    'PHPUnit & Testing Frameworks',
    'System Architecture',
    'Agile Methodologies',
    'Technical Leadership',
    'Code Review & Best Practices',
    'Performance Optimization',
    'Security Implementation',
    'Team Collaboration'
]

const educationList = [
    {
        title: 'Bachelor of Science in Computer Science',
        subtitle: 'Federal University, Lafia, Nasarawa, Nigeria | 2013 - 2017'
    }
]

const experienceList = [
    {
        position: 'Senior Full Stack Developer',
        company: 'Coamana - Abuja, Nigeria',
        website: 'https://www.coamana.com/',
        duration: 'November 2024 - Present',
        current: true,
        terminationReason: 'Currently working',
        description: "Leading the development of a comprehensive marketplace platform that revolutionizes trade and commerce in emerging markets. Spearheading the implementation of advanced features and ensuring system scalability.",
        tasks: [
            'Architected and implemented a robust order management system, that reduced processing time by 40%',
            'Developed enterprise market features supporting 100s of concurrent users with 99.9% uptime',
            'Engineered call-center assisted transaction system which led to increase in customer usage by 30%',
            'Implemented secure market verification system and credit allocation engine',
            'Wrote feature-rich API endpoints for the frontend and backend',
            'Wrote feature and unit tests for the backend',
            'Collaborated with hybrid teams across Kenya and Nigeria'
        ],
    },
    {
        position: 'Senior Software Engineer',
        company: 'KadMap - Abuja, Nigeria',
        website: 'https://www.kadmap.com/',
        duration: 'August 2024 - Present',
        terminationReason: 'Currently working',
        description: "KadMap’s all-in-one Central Office Computer gives you offline collaboration, secure local data control, cost-effective enterprise apps, and a forever-free office suite, with no internet or cloud required.",
        tasks: [
            'Built a custom SMTP server for the KadMap ecosystem',
            'Built the KadMap Auth Service for the KadMap ecosystem',
            'Built the KadMap Directory Service for the KadMap ecosystem',
            'Built the KadMap Master Licensing Service for the KadMap ecosystem',
            'Built the KadMap Connect App for the KadMap ecosystem',
            'Provided technical support to the KadMap ecosystem',
            'Implemented the backend for the KadMap Website',
            'Customized open source software to fit the KadMap ecosystem',
        ],
    },
    {
        position: 'Full Stack Developer',
        company: 'New Avenue - New York, USA',
        website: 'https://www.newavenuehomes.com/',
        duration: 'November 2023 - February 2024',
        terminationReason: 'Contract Completed',
        description: "Contributed to the development of a comprehensive platform for accessory dwelling unit (ADU) management, serving hundreds of clients across the United States.",
        tasks: [
            'Redesigned and optimized invoicing system, that reduced processing errors by 35%',
            'Fixed issues in the automated scheduling system, that improved resource allocation by 50%',
            'Built comprehensive budgeting module with real-time analytics and reporting',
            'Integrated third-party APIs for custom email campaigns and payment systems',
            'Learnt and worked with in-house frameworks and libraries to build the frontend and backend',
            'Fixed other bugs and issues in the system',
            'Collaborated with remote teams across the US and Nigeria'
        ],
    },
    {
        position: 'Full Stack Developer',
        company: 'XRadar360 - Leicester, United Kingdom',
        website: '',
        duration: 'January 2021 - September 2023',
        terminationReason: 'Company ran out of funding',
        description: "Led the development of a groundbreaking construction project management platform enabling remote project monitoring and management.",
        tasks: [
            'Architected and implemented microservices-based system handling 100s of concurrent projects',
            'Developed real-time geo-tagged media processing system with 99.9% accuracy',
            'Built secure bidding and contract management system',
            'Implemented escrow payment system with multi-currency support and automated dispute resolution',
            'Integrated multiple payment processors and developed wallet system',
            'Collaborated with hybrid teams across the UK and Nigeria'
        ],
    },
    {
        position: 'Full Stack Developer',
        company: 'Truelandlord - Abuja, Nigeria',
        website: 'https://truelandlord.com/',
        duration: 'March 2022 - October 2022',
        terminationReason: 'Contract Completed',
        description: "Developed a comprehensive property management platform connecting landlords, tenants, and agents with advanced verification and transaction features.",
        tasks: [
            'Implemented responsive UI/UX design, achieving 95% user satisfaction rate',
            'Developed secure contract management system with digital signatures',
            'Built advanced property search engine with integrated recommendations',
            'Implemented multi-factor authentication and identity verification system',
            'Optimized database queries, that reduced search response time by 60%'
        ],
    },
    {
        position: 'Full Stack Developer',
        company: 'SchoolShell - Abuja, Nigeria',
        website: 'https://schoolshell.com/',
        duration: 'April 2019 - August 2020',
        terminationReason: 'Covid 19 Pandemic',
        description: "Developed comprehensive educational management system serving multiple institutions with features for students, administrators, and parents.",
        tasks: [
            'Built inventory management system for Federal Judiciary Service Commission, that reduced stock discrepancies by 90%',
            'Developed automated report card generation system',
            'Implemented performance optimization, that reduced system response time by 70%',
            'Built comprehensive student admission system with document verification',
            'Developed real-time notification system for parent-teacher communication'
        ],
    },
]

export const useAtsHelpers = () => {
    return {
        summary,
        phoneNumber,
        address,
        email,
        name,
        position,
        skills,
        educationList,
        experienceList,
        linkedinUrl,
        githubUrl,
    }
} 