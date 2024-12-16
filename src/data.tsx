import { Project, Tech } from "./types"

const technologiesUsed: Tech[] = [
    {
        name: 'HTML',
        image: '/stackImages/htmlIcon.svg'
    }, 
    {
        name: 'CSS',
        image: '/stackImages/cssIcon.svg'
    },
    {
        name: 'Javascript',
        image: '/stackImages/javascriptIcon.svg'
    },
    {
        name: 'React',
        image: '/stackImages/reactIcon.svg'
    }
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
        techUsed: createTechnologiesArr(['HTML', 'CSS'])
    },
    {
        name: 'First Pick Fit',
        image: '/first_pick_fit.PNG',
        info: 'A fitness tracker with drag-and-drop functionality for easy workout creation & tracking. Features an intuitive user interface to quickly create and schedule workouts, programs and exercises.',
        liveLink: 'https://first-pick-fit.vercel.app/',
        codeLink: 'https://github.com/enzorod10/first-pick-fit',
        techUsed: createTechnologiesArr(['React'])
    },
    {
        name: 'Interactive Playroom',
        image: '/kick_realm.PNG',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, neque pariatur a ea ipsa, qui similique quisquam unde, corporis cum quibusdam beatae deleniti iste cumque! Sit dicta tempore ea assumenda?',
        liveLink: 'https://games-beta-two.vercel.app/',
        codeLink: 'https://github.com/enzorod10/Interactive-Playroom',
        techUsed: createTechnologiesArr(['React'])
    },
    {
        name: 'Solteract',
        image: '/solteract.PNG',
        info: 'A social media platform that gives users the ability to express themselves in their own personal space. Inspired by twitter. Users have their own timelines & feeds, are able to communicate with each other through transmissions (tweets) which can be text and/or media. Users can customize their profile name, username, header, & profile picture.',
        liveLink: 'https://soterak-1f634.web.app/',
        codeLink: 'https://github.com/enzorod10/solteract',
        techUsed: createTechnologiesArr(['React'])
    },
]