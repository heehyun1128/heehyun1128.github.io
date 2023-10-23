import { useEffect, useState } from 'react'
import { faAward, faLightbulb, faCertificate } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Mongoose from '../../assets/images/mongoose.png'
import Excel from '../../assets/images/excel.png'
import MSProject from '../../assets/images/msproject.png'
import VB from '../../assets/images/visual_basic.png'
import Axios from '../../assets/images/axios.png'


const Skills = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 2000)
      },[])

    return(
        <>
            <div className='container skill-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['S','k','i','l','l','s', ]} index={20} />
                </h1>
                    
                {/* <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','e','r','t','i','f','i','c','a','t','e','s']} index={20} />
                </h1>
                <p><FontAwesomeIcon icon={faCertificate} /> PMP 02/2021</p>
                <p><FontAwesomeIcon icon={faCertificate} /> Meta Front-End Developer Professional Certificate 02/2023</p>
                <p><FontAwesomeIcon icon={faCertificate} /> The Complete 2023 Web Development Bootcamp 02/2023</p>
                <p><FontAwesomeIcon icon={faCertificate} /> Engineer In Training 01/2017</p> */}

            </div>
                <div id="skill-div">
                    <div id="programming-div">
                        {/* <h4>PROGRAMMING & DESIGN</h4> */}
                        <div id="icon-div">
                            <div>
                                <i class="devicon-javascript-plain colored"></i>
                                <p>JAVASCRIPT ES6+</p>
                            </div>
                            <div>
                                <i class="devicon-python-plain colored"></i>
                                <p>PYTHON</p>
                            </div>
                            <div>
                                <i class="devicon-react-original colored"></i>
                                <p>REACT</p>
                            </div>
                            <div>
                                <i class="devicon-redux-original colored"></i>
                                <p>REDUX</p>
                            </div>
                            <div>
                                <i class="devicon-jquery-plain colored"></i>
                                <p>JQUERY</p>
                            </div>
                            <div>
                                <i class="devicon-nodejs-plain colored"></i>
                                <p>NODE</p>
                            </div>
                            <div>
                                <i class="devicon-express-original colored"></i>
                                <p>EXPRESS</p>
                            </div>
                            <div>
                                <i class="devicon-flask-original colored"></i>
                                <p>FLASK</p>
                            </div>
                            <div>
                                <i class="devicon-sqlalchemy-plain colored"></i>
                                <p>SQLALCHEMY</p>
                            </div>
                            <div>
                                <i class="devicon-html5-plain colored"></i>
                                <p>HTML 5</p>
                            </div>
                            <div>
                                <i class="devicon-css3-plain colored"></i>
                                <p>CSS 3</p>
                            </div>
                            <div>
                                <i class="devicon-bootstrap-plain colored"></i>
                                <p>BOOTSTRAP</p>
                            </div>
                            <div>
                                <i class="devicon-sqlite-plain colored"></i>
                                <p>SQLITE 3</p>
                            </div>
                            <div>
                                <i class="devicon-postgresql-plain colored"></i>
                                <p>POSTGRESQL</p>
                            </div>
                            <div>
                                <i class="devicon-sequelize-plain colored"></i>
                                <p>SEQUELIZE</p>
                            </div>
                            <div>
                                <i class="devicon-microsoftsqlserver-plain colored"></i>
                                <p>MS SQL-SERVER</p>
                            </div>
                            <div>
                                <i class="devicon-mongodb-plain colored"></i>
                                <p>MONGODB</p>
                            </div>
                            <div>
                                <img id='mongoose' src={Mongoose} alt="" />
                                <p>MONGOOSE</p>
                            </div>
                            <div>
                                <i class="devicon-heroku-plain colored"></i>
                                <p>HEROKU</p>
                            </div>
                            <div>
                                <i class="devicon-amazonwebservices-original colored"></i>
                                <p>AWS</p>
                            </div>
                            <div>
                                <i class="devicon-npm-original-wordmark colored"></i>
                                <p>NPM</p>
                            </div>
                            <div>
                                <i class="devicon-git-plain colored"></i>
                                <p>GIT</p>
                            </div>
                            <div>
                                <i class="devicon-github-original colored"></i>
                                <p>GITHUB</p>
                            </div>
                            <div>
                                <i class="devicon-visualstudio-plain colored"></i>
                                <p>VS CODE</p>
                            </div>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                                <p>FIGMA</p>
                            </div>
                            
                            <div>
                                <img src={Axios} alt="" />
                                <p>AXIOS</p>
                            </div>
                            <div>
                                <img
                                    src="https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png"
                                    alt="" />
                                <p>POSTMAN</p>
                            </div>

                            <div>
                                <i class="devicon-jira-plain colored"></i>
                                <p>JIRA</p>
                            </div>
                            <div>
                                <img src={VB} alt="" />
                                <p>VISUAL BASICS</p>
                            </div>
                            <div>
                                <img src={Excel} alt="" />
                                <p>EXCEL VBA</p>
                            </div>
                            <div>
                                <img src={MSProject} alt="" />
                                <p>MS PROJECT</p>
                            </div>
                        </div>
                    </div>
                    {/* <div id='pm-main'>
                        <h4>PROJECT MANAGEMENT</h4>
                        <div id="pm-div">
                            <div>

                                <img
                                    src="https://images.credly.com/size/680x680/images/260e36dc-d100-45c3-852f-9d8063fa71e6/pmp-600px.png"
                                    alt="" />
                                <p>PMP</p>
                            </div>
                            <div>
                                <i class="devicon-jira-plain colored"></i>
                                <p>JIRA</p>
                            </div>
                            <div>
                                <img src={Excel} alt="" />
                                <p>EXCEL VBA</p>
                            </div>
                            <div>
                                <img src={MSProject} alt="" />
                                <p>MS PROJECT</p>
                            </div>
                        </div>
                    </div> */}
                </div>

            {/* <div className='skill-div'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['H','o','n','o','r','s', '&','A','w','a','r','d','s']} index={20} />
                </h1>
                <div><p><FontAwesomeIcon icon={faAward} /> Berkeley CEE Department Scholarship   08/2016</p></div>
                <div><p><FontAwesomeIcon icon={faAward} /> School’s Honor Student   01/2015</p></div>
                <div><p><FontAwesomeIcon icon={faAward} /> Second Class School Scholarship   01/2015</p></div>
                <div><p><FontAwesomeIcon icon={faAward} /> Provincial Honor Student with Excellent Performance   06/2014</p></div>
                <div><p><FontAwesomeIcon icon={faAward} /> First Class School Scholarship   01/2014</p></div>
                <div><p><FontAwesomeIcon icon={faAward} /> School’s Honor Student   01/2014</p></div>
                <div><p><FontAwesomeIcon icon={faAward} /> Third Class Award of National English Competition for College Students (NECCS)    01/2014</p></div>
                <div><p><FontAwesomeIcon icon={faAward} /> School’s Honor Student   06/2013</p></div>
                <div><p><FontAwesomeIcon icon={faAward} /> Second Class School Scholarship   06/2013</p></div>
                <div><p><FontAwesomeIcon icon={faAward} /> Excellent Prize in School's Singing Contest (Water Resources Engineering Department)   01/2012</p></div>
                <div><p><FontAwesomeIcon icon={faAward} /> School’s Excellent Student   01/2012</p></div>
                <div><p><FontAwesomeIcon icon={faAward} /> Third Class School Scholarship    01/2012</p></div>
            </div> */}
        </div>
        <Loader type="ball-beat" />
        </>
    )
}

export default Skills
