import { Project, Tech } from "./types"

export const technologiesUsed: Tech[] = [
    {
        name: 'TypeScript',
        image: '/stackImages/typescriptIcon.svg'
    },
    {
        name: 'Next',
        image: '/stackImages/nextjsIcon.svg'
    },
    {
        name: 'React',
        image: '/stackImages/reactIcon.svg'
    },
    {
        name: 'PostgreSQL',
        image: '/stackImages/postgresqlIcon.svg'
    },
    {
        name: 'Redux',
        image: '/stackImages/reduxIcon.svg'
    },
    {
        name: 'MongoDB',
        image: '/stackImages/mongodbIcon.svg'
    },
    {
        name: 'Tailwind',
        image: '/stackImages/tailwindIcon.svg'
    },
    {
        name: 'Firebase',
        image: '/stackImages/firebaseIcon.svg'
    },
    {
        name: 'Supabase',
        image: '/stackImages/supabaseIcon.svg'
    },
    {
        name: 'Git',
        image: '/stackImages/gitIcon.svg'
    },

    {
        name: 'Jest',
        image: '/stackImages/jestIcon.svg'
    },
    
]

const createTechnologiesArr = (techUsed: string[]) => {
    return technologiesUsed.filter(tech => techUsed.find(t => tech.name === t))
}

export const projects: Project[] = [
    {
        name: 'Kick Realm',
        image: '/kick_realm.PNG',
        info: 'A platform for Kick streamers and viewers, where users can invest in streamers using virtual currency, track real-time analytics, and view upcoming stream schedules. Streamers can apply for affiliation, and users can apply for admin or mod roles, fostering a vibrant and interactive community.',
        liveLink: 'https://www.kickrealm.com/',
        codeLink: 'https://github.com/enzorod10/kickrealm',
        techUsed: createTechnologiesArr(['Next', 'Tailwind', 'Supabase', 'PostgreSQL'])
    },
    {
        name: 'First Pick Fit',
        image: '/first_pick_fit.PNG',
        info: 'A fitness tracker with drag-and-drop functionality for easy workout creation & tracking. Features an intuitive user interface to quickly create and schedule workouts, programs and exercises.',
        liveLink: 'https://first-pick-fit.vercel.app/',
        codeLink: 'https://github.com/enzorod10/first-pick-fit',
        techUsed: createTechnologiesArr(['Next', 'Firebase', 'Redux'])
    },
    {
        name: 'Interactive Playroom',
        image: '/interactive_playroom.PNG',
        info: 'A dynamic collection of engaging mini-games, including Stick Hero, Battleship, Wordle, Hangman, Trivia, and a puzzle game. This project showcases creative game design and development, offering interactive experiences that combine strategy, skill, and fun for players of all ages.',
        liveLink: 'https://games-beta-two.vercel.app/',
        codeLink: 'https://github.com/enzorod10/Interactive-Playroom',
        techUsed: createTechnologiesArr(['Next', 'Tailwind'])
    },
    {
        name: 'Solteract',
        image: '/solteract.PNG',
        info: 'A social media platform that gives users the ability to express themselves in their own personal space. Inspired by twitter. Users have their own timelines & feeds, are able to communicate with each other through transmissions (tweets) which can be text and/or media. Users can customize their profile name, username, header, & profile picture.',
        liveLink: 'https://soterak-1f634.web.app/',
        codeLink: 'https://github.com/enzorod10/solteract',
        techUsed: createTechnologiesArr(['React', 'Firebase'])
    },
]