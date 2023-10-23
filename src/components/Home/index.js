import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'

import './index.scss'
import AnimatedLetters from '../AnimatedLetters'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['','Y', 'i', '', 'C', 'h', 'e', 'n']
    const jobArray = [
        'A', '', 'S', 'o', 'f', 't', 'w', 'a','r','e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.',
    ]

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      },[])

      
    return (
        <>
<div className="container home-page">
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={2} />
                </h1>
                <h2>A Full Stack Software Engineer</h2>
                <h2>A Project Management Professional</h2>
                <h2>A Boba Lover</h2>
                <Link className="flat-button" to='/contact'>LET'S CONNECT</Link>
            </div>
            <Logo />
        </div>
        <Loader type="ball-beat" />
        

        </>
        
    )
}

export default Home