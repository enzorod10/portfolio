import folderIcon from '../../../public/assets/folderIcon.png';
import mailIcon from '../../../public/assets/mailIcon.png';
import githubIcon from '../../../public/assets/githubIcon.png';
import linkedinIcon from '../../../public/assets/linkedinIcon.png';
import aboutIcon from '../../../public/assets/aboutIcon.png';
import blogIcon from '../../../public/assets/blogIcon.png';
import xIcon from '../../../public/assets/xIcon.png';
import { useRouter } from 'next/router';

function Intro(props){

  const router = useRouter();

    return(
        <div className="introSection">
        <div className='nameAndTitle'>
          <div className='name'>
            <span className='fullName'>
              <span className='firstName'><span className='initialLetter'>E</span><span className='remainingLetters'>NZO</span></span>
              <span className='lastName'><span className='initialLetter'>R</span><span className='remainingLetters'>ODRIGUEZ </span></span>
            </span>
            <span className='nameLine'>
              <div className='hangingLinks'>
                <div className='link'>
                  <div className='hanger'></div>
                  <div className='icon' onClick={() => props.scrollIntoDiv('about')}> 
                    <img src={aboutIcon.src} alt='About icon' />
                  </div>
                </div>
                <div className='link'>
                  <div className='hanger'></div>
                  <div className='icon' onClick={() => props.scrollIntoDiv('projects')}> 
                    <img src={folderIcon.src} alt='Folder icon' />
                  </div>
                </div>
                <div className='link'>
                  <div className='hanger'></div>
                  <div className='icon' onClick={() => props.scrollIntoDiv('contact')}> 
                    <img src={mailIcon.src} alt='Mail icon' />
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div className='title'>
            <span className='titleLine'>
              <div className='hangingLinks'>
                <div className='link'>
                  <div className='hanger'></div>
                  <a href={'https://github.com/enzorod10'}>
                    <div className='icon'>
                      <img src={githubIcon.src} alt='Github icon' />
                    </div>
                  </a>
                </div>
                  <div className='link'>
                    <div className='hanger'></div>
                    <a href={'https://linkedin.com/in/enzo-rod'}>
                      <div className='icon'>
                        <img src={linkedinIcon.src} alt='Linkedin icon' />
                      </div>
                    </a>
                  </div>
                <div className='link'>
                  <div className='hanger'></div>
                    <a href={'https://x.com/enzodevtech'}>
                      <div className='icon'>
                        <img src={xIcon.src} alt='X(Twitter) icon' />
                      </div>
                    </a>
                </div>
              </div>
            </span>
            <span className='fullTitle' style={{display: 'inline-flex', float: 'right', marginLeft: 'auto'}}>
              <span className='firstTitle'><span className='initialLetter'>W</span><span className='remainingLetters'>EB</span></span>
              <span className='secondTitle'><span className='initialLetter'>D</span><span className='remainingLetters'>EVELOPER</span></span>
            </span>
          </div>
        </div>
      </div>
    )
}

export default Intro;