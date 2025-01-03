import styles from './About.module.css';
import sampleImage from '../../../public/assets/sampleImage.png';
import { technologiesUsed } from '../../data';

function About(){
    return(
        <div className={styles.fullPage}>
            <div className={styles.top}>
                <div className={styles.leftSide}>
                    <img className={styles.image} src={sampleImage.src} alt='sample' />
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.infoHeader}>
                        Hello there
                    </div>
                    <div className={styles.infoBody}>
                        I'm Enzo Rodriguez, a New Jersey-based developer with experience
                        in the frontend and backend. I enjoy bringing ideas to life in the browser 
                        through code.
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                <div className='relative flex flex-wrap border border-[#0079897c] rounded-lg justify-center p-5 gap-5 w-full max-w-2xl'>
                    <div className={styles.iconsContainerTitle}>
                        Languages & Tools
                    </div>
                    {technologiesUsed.map((tech, index) => {
                        return(
                            <div key={index} className="flex flex-col gap-1 justify-center items-center text-white text-xs text-italic">
                                <img className="w-8" src={tech.image} alt={tech.name}/>
                                <div className={styles.techText}>{tech.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About;