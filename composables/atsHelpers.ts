const summary = "Results-driven Full Stack Developer with 5+ years of experience in building scalable web applications and microservices. Proven track record of delivering high-performance solutions using modern technologies like Node.js, Vue.js, React, and Laravel. Strong expertise in RESTful API development, database optimization, and cloud infrastructure. Adept at leading development teams, implementing CI/CD pipelines, and driving technical excellence through code reviews and best practices."

const phoneNumber = "+2348130546010"
const address = 'Abuja, Nigeria'
const email = 'justiceroyale1@gmail.com'
const position = 'Senior Full Stack Developer'
const name = 'Justice Abutu'

const skills = [
    'Full Stack Development',
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
        subtitle: 'Federal University, Lafia, Nasarawa, Nigeria | 2014 - 2018'
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
            'Developed enterprise market features supporting 100+ concurrent users with 99.9% uptime',
            'Implemented secure market verification system and credit allocation engine',
            'Engineered call-center assisted transaction system handling 50+ daily transactions',
            'Optimized database queries and implemented caching strategies, that improved response time by 35%'
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
            'Redesigned and optimized invoicing system, that reduced processing errors by 75%',
            'Implemented secure payment processing system handling $2M+ in transactions',
            'Developed automated scheduling system, that improved resource allocation by 50%',
            'Built comprehensive budgeting module with real-time analytics and reporting',
            'Integrated third-party APIs for property valuation and permit tracking'
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
            'Architected and implemented microservices-based system handling 100+ concurrent projects',
            'Developed real-time geo-tagged media processing system with 99.9% accuracy',
            'Built secure bidding and contract management system',
            'Implemented escrow payment system with multi-currency support and automated dispute resolution',
            'Integrated multiple payment processors and developed wallet system'
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
            'Built advanced property search engine with AI-powered recommendations',
            'Implemented multi-factor authentication and identity verification system',
            'Optimized database queries, that reduced search response time by 60%'
        ],
    },
    {
        position: 'Full Stack Developer',
        company: 'SchoolShell - Abuja, Nigeria',
        website: 'https://schoolshell.com/',
        duration: 'April 2019 - July 2020',
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
    }
} 