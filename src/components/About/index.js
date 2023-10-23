import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons' 
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'


const About = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 2000)
      },[])

    return(
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                {/* <div>
                        <h1>
                            <AnimatedLetters letterClass={letterClass} strArray={['I', ' ', 'a', 'm']} index={20} />
                        </h1>
                        <p><FontAwesomeIcon icon={faCode} /> Passionate about Web Development and Software Engineering</p>
                        <p><FontAwesomeIcon icon={faCode} /> Self-driven in programming, project management, and design</p>
                        <p><FontAwesomeIcon icon={faCode} /> Self-starter and self-learner with perseverance and ambition</p>
                        <p><FontAwesomeIcon icon={faCode} /> also a boba-holic</p>
                </div> */}
                <div>
                        <h1>
                            <AnimatedLetters letterClass={letterClass} strArray={['E', 'D', 'U', 'C', 'A', 'T', 'I', 'O', 'N']} index={20} />
                        </h1>
                        <p><FontAwesomeIcon icon={faGraduationCap} /> App Academy - Full Stack Software Engineering 05/2023-11/2023</p>
                        <p><FontAwesomeIcon icon={faGraduationCap} /> MBA --- California Institute of Adavanced Management 05/2020-05/2022</p>
                        <p><FontAwesomeIcon icon={faGraduationCap} /> M.S. Civil Engineering --- University of California, Berkeley 08/2016-05/2017</p>
                        <p><FontAwesomeIcon icon={faGraduationCap} /> B.E. Civil - Water Resources Engineering --- Zhengzhou University 08/2011-06/2015</p>
                </div>
                <div>
                        <h1>
                            <AnimatedLetters letterClass={letterClass} strArray={['W', 'O', 'R', 'K', ' ', 'E', 'X', 'P', 'E', 'R', 'I', 'E', 'N', 'C', 'E']} index={20} />
                        </h1>
                        <p><FontAwesomeIcon icon={faBriefcase} /> Project Engineer --- Innovative Project Solutions 03/2021-11/2021</p>
                        <p><FontAwesomeIcon icon={faBriefcase} /> Project Engineer --- Giampolini & Co 10/2017-12/2020</p>
                </div>
                
                
            </div>
            {/* <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#00008b" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="red" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#b2c248" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#add8e6" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#ffdf00" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="orange" />
                    </div>
                </div>
            </div> */}
                
        </div>
        <Loader type="ball-beat" />
        </>
    )
}

export default About