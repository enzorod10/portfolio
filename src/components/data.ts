export const technologies = [
    { name: 'Typescript', image: 'typescriptIcon.svg' },
    { name: 'NextJS', image: 'nextjsIcon.svg' },
    { name: 'PostgreSQL', image: 'psqlIcon.svg' },
    { name: 'Redux', image: 'reduxIcon.svg' },
    { name: 'Tailwind', image: 'tailwindIcon.svg' },
    { name: 'NodeJS', image: 'nodejsIcon.svg' },
    { name: 'MongoDB', image: 'mongodbIcon.svg' },
    { name: 'Git', image: 'gitIcon.svg' },
    { name: 'HTML', image: 'htmlIcon.svg' },
    { name: 'CSS', image: 'cssIcon.svg' },
    { name: 'JavaScript', image: 'javascriptIcon.svg'},
    { name: 'React', image: 'reactIcon.svg' },
    { name: 'Firebase', image: 'firebaseIcon.svg' }
]

export const projects = [
    {
        name: 'Kick Realm', 
        info: 'A platform for Kick streamers and viewers, where users can invest in streamers using virtual currency, track real-time analytics, and view upcoming stream schedules. Streamers can apply for affiliation, and users can apply for admin or mod roles, fostering a vibrant and interactive community.',
        image: 'kick_realm.PNG',
        liveUrl: 'https://kickrealm.com',
        repoUrl: 'https://www.github.com/enzorod10/kickrealm',
        techUsed: technologies.filter((tech, indx) => [0, 1, 2, 4].includes(indx))
    },
    {
        name: 'Solteract', 
        info: 'A social media platform that gives users the ability to express themselves in their own personal space. Inspired by Twitter.',
        image: 'solteract.PNG',
        liveUrl: 'https://soterak-1f634.web.app',
        repoUrl: 'https://www.github.com/enzorod10/solteract',
        techUsed: technologies.slice(-5)
    }
]