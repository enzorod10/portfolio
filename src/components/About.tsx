import sampleImage from '../../public/assets/sampleImage.png';
import { technologiesUsed } from '../data';

function About(){
    return(
        <div className='p-5 pb-0 flex flex-col gap-5 sm:gap-8 justify-center max-w-3xl mx-auto'>
            <div className='flex justify-center items-center gap-5 md:gap-0'>
                <div className='w-2/5 flex justify-center '>
                    <img className='w-48' src={sampleImage.src} alt='sample' />
                </div>
                <div className="text-slate-100 w-3/5">
                    <div className="text-2xl">
                        Hello there
                    </div>
                    <div className="text-sm sm:text-md md:text-lg">
                        I'm Enzo Rodriguez, a New Jersey-based developer with experience
                        in the frontend and backend. I enjoy bringing ideas to life in the browser 
                        through code.
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className='relative flex flex-wrap border border-[#0079897c] rounded-lg justify-center p-5 gap-5 w-full max-w-2xl'>
                    <div className='absolute -top-4 bg-background text-white p-1 px-2 rounded-lg'>
                        Languages & Tools
                    </div>
                    {technologiesUsed.map((tech, index) => {
                        return(
                            <div key={index} className="flex flex-col gap-0.5 justify-center items-center text-white text-xs sm:text-sm text-italic">
                                <img className="w-6" src={tech.image} alt={tech.name}/>
                                <div >{tech.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About;