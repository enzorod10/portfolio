import styles from './About.module.css';
import sampleImage from '../../../public/assets/sampleImage.png';
import nodejsIcon from '../../../public/stackImages/nodejsIcon.svg';
import mongodbIcon from '../../../public/stackImages/mongodbIcon.svg';
import gitIcon from '../../../public/stackImages/gitIcon.svg';
import jestIcon from '../../../public/stackImages/jestIcon.svg';
import tailwindIcon from '../../../public/stackImages/tailwindIcon.svg';
import nextjsIcon from '../../../public/stackImages/nextjsIcon.svg';
import reduxIcon from '../../../public/stackImages/reduxIcon.svg';
import blenderIcon from '../../../public/stackImages/blenderIcon.svg';
import typescriptIcon from '../../../public/stackImages/typescriptIcon.svg';
import psqlIcon from '../../../public/stackImages/psqlIcon.svg';

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
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={typescriptIcon.src} alt='typescript'/>
                        <div className={styles.techText}>TypeScript</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={nextjsIcon.src} alt='nextjs'/>
                        <div className={styles.techText}>NextJs</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={psqlIcon.src} alt='postgreSQL'/>
                        <div className={styles.techText}>PostgreSQL</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={reduxIcon.src} alt='redux'/>
                        <div className={styles.techText}>Redux</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={tailwindIcon.src} alt='tailwind'/>
                        <div className={styles.techText}>Tailwind</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={nodejsIcon.src} alt='nodejs'/>
                        <div className={styles.techText}>NodeJS</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={blenderIcon.src} alt='nextjs'/>
                        <div className={styles.techText}>Blender</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={mongodbIcon.src} alt='mongodb'/>
                        <div className={styles.techText}>MongoDB</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={jestIcon.src} alt='jest'/>
                        <div className={styles.techText}>Jest</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={gitIcon.src} alt='git'/>
                        <div className={styles.techText}>Git</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;