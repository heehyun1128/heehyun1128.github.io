import React from 'react'
import ResumeImg from '../../assets/images/resume.png'
import './Resume.css'

import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'

const Resume = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
  }, [])

  const ViewResumePDF = (e)=>{
    e.preventDefault()
  }
  return (
    <div id='resume-main'>
      <div class='resume-text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['R', 'E', 'S', 'U', 'M', 'E']}
            idx={15} />
        </h1>
        {/* <div onClick={ViewResumePDF}>View PDF</div> */}
      </div>
      <div><img className='animate__fadeInRight' src={ResumeImg} alt="" /></div>
    </div>
  )
}

export default Resume