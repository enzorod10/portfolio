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
                <div className={styles.iconsContainer}>
                    <div className={styles.iconsContainerTitle}>
                        Languages & Tools
                    </div>
                    {technologiesUsed.map((tech, index) => {
                        return(
                            <div key={index} className={styles.techIconContainer}>
                                <img className={styles.techIcon} src={tech.image} alt={tech.name}/>
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