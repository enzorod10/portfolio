import nodejsIcon from '../../../public/assets/stackImages/nodejsIcon.svg';
import mongodbIcon from '../../../public/assets/stackImages/mongodbIcon.svg';
import gitIcon from '../../../public/assets/stackImages/gitIcon.svg';
import tailwindIcon from '../../../public/assets/stackImages/tailwindIcon.svg';
import nextjsIcon from '../../../public/assets/stackImages/nextjsIcon.svg';
import reduxIcon from '../../../public/assets/stackImages/reduxIcon.svg';
import typescriptIcon from '../../../public/assets/stackImages/typescriptIcon.svg';
import psqlIcon from '../../../public/assets/stackImages/psqlIcon.svg';
import Image from 'next/image';

const techIcons = [
    { name: 'Typescript', img: typescriptIcon.src },
    { name: 'NextJS', img: nextjsIcon.src },
    { name: 'PostgreSQL', img: psqlIcon.src },
    { name: 'Redux', img: reduxIcon.src },
    { name: 'Tailwind', img: tailwindIcon.src },
    { name: 'NodeJS', img: nodejsIcon.src },
    { name: 'MongoDB', img: mongodbIcon.src },
    { name: 'Git', img: gitIcon.src }
]

function About(){
    return(
        <div className='flex flex-col gap-4 max-w-4xl mx-auto'>
            <div className='relative mx-auto flex gap-4 items-center'>
                <img src='/assets/sampleImage.png' className='w-36 sm:w-full sm:max-w-[240px]' alt=''/>
                <div className='color: #007989'>
                    <div className='text-[6vmin] text-black'>
                        Hello there
                    </div>
                    <div className='text-[3vmin] text-[#007989]'>
                        I'm Enzo Rodriguez, a New Jersey-based developer with experience
                        in the frontend and backend. I enjoy bringing ideas to life in the browser 
                        through code.
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='relative flex flex-wrap justify-center pt-4 pb-2 px-4 border-2 rounded-2xl gap-x-4 gap-y-2'>
                    <div className='absolute -top-[12px] z-1 bg-white px-3 text-md text-[#007989]'>
                        Languages & Tools
                    </div>
                    {techIcons.map(tech => {
                        return (<div key={tech.name} className='flex  flex-col justify-center items-center gap-1'>
                            <img className='w-6 md:w-8 ' src={tech.img} alt={tech.name}/>
                            <div className='text-xs text-[#007989]'>{tech.name}</div>
                        </div>)
                    })}
                 
                </div>
            </div>
        </div>
    )
}

export default About;