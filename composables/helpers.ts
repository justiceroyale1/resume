const summary = "I am a Fullstack Developer with over five years of experience designing, developing, and maintaining dynamic applications. I have a proven track record of successful project management, collaborating with cross-functional teams, and meeting tight deadlines. I possess a comprehensive understanding of the software development life cycle, from concept to delivery, and a keen eye for detail to ensure high-quality code. I have demonstrated the ability to troubleshoot, optimize, and enhance existing systems for improved functionality. I proactively stay updated on industry trends and emerging technologies to implement best practices and innovative solutions."

const phoneNumber = "+2348130546010"

const address = 'Block 2/70, Nyanya, Abuja, Nigeria'

const email = 'justiceroyale1@gmail.com'

const position = 'Fullstack Developer'

const name = 'Justice Abutu'

const skills = [
    'Front End Development',
    'Back End Development',
    'API Development',
    'PHP',
    'Laravel',
    'CodeIgniter',
    'Javascript',
    'Typescript',
    'Nodejs',
    'Vuejs',
    'Nuxtjs',
    'Veutify',
    'Docker',
    'MySQL',
    'Tailwind',
    'Bootstrap'
]

const educationList = [
    {
        title: 'Bsc. Computer Science',
        subtitle: 'Federal University, Lafia, Nasarawa, Nigeria'
    }
]

const experienceList = [
    {
        position: 'Fullstack Developer',
        company: 'New Avenue - New York, USA',
        website: 'https://www.newavenuehomes.com/',
        duration: '11/2023 - 02/2024',
        terminationReason: 'Contract Completed',
        tasks: [
            'Fixed bugs on invoicing',
            'Built additional features around payments',
            'Built additional features around schedules',
            'Built additional features around budgeting',
        ],
    },
    {
        position: 'Fullstack Developer',
        company: 'XRadar360 - 30 Calais Hill, Leicester, United Kingdom',
        website: '',
        duration: '01/2021 - 09/2023',
        terminationReason: 'Company ran out of funding',
        tasks: [
            'Took over a legacy codebase and built out all remaining features',
            'Built features around construction project monitoring based on geo-tagged media',
            'Built features around bidding and contract agreements',
            'Built features around escrowed payments',
            'Built features around dispute resolution',
            'Built features around wallets and integrated with multiple payment processors',
        ],
    },
    {
        position: 'Fullstack Developer',
        company: 'Truelandlord - Garki - Abuja, Nigeria',
        website: 'https://truelandlord.com/',
        duration: '03/2022 - 10/2022',
        terminationReason: 'Contract Completed',
        tasks: [
            'Implemented the UI design for all outer pages',
            'Built features around contract agreements',
            'Built features around property search and rental or purchase',
            'Built features around user verification',
        ],
    },
    {
        position: 'Fullstack Developer',
        company: 'SchoolShell - Garki - Abuja, Nigeria',
        website: 'https://schoolshell.com/',
        duration: '04/2019 - 07/2020',
        terminationReason: 'Covid 19 Pandemic',
        tasks: [
            'Built an on-premise inventory managment system for Federal Judiciary Service Commission (FJSC)',
            "Built features around report cards for SchoolShell (the company's flagship product)",
            'Fixed critical bugs that improved performance',
            'Built features around students admission',
        ],
    },
]

export const useHelpers = () => {
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