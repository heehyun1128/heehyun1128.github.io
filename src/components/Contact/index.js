import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,

} from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_5o1bqkv', 'template_rw9z41t', refForm.current, 'SuLQ7A0zxRJKsX88W')
            .then((response) => {
                alert("Message sent successfully!")
                console.log('SUCCESS!', response.status, response.text)
                window.location.reload(false)
            },
                (err) => {
                    alert("Error! Fail to send message. Please try again later.", err)

                }
            )
    }

    return <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
                        idx={15} />
                </h1>
                <div className='email-phone-div'>
                    <h2>Email</h2>
                    <p>chenyiapp@berkeley.edu</p>
                </div>
                <div className='email-phone-div'>
                    <h2>Mobile #</h2>
                    <p>+1 707-742-9936</p>
                </div>
                <div id='linkedin-github-div'>
                        <a target="_blank" rel="nonreferrer" href="https://www.linkedin.com/in/yi-c-452811132/">
                            <FontAwesomeIcon id='icon' icon={faLinkedin} color="black" />
                        </a>
                        <a target="_blank" rel="nonreferrer" href="https://github.com/heehyun1128/">
                            <FontAwesomeIcon id='icon' icon={faGithub} color="black" />
                        </a>
                    </div>
                {/* <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['S', 'E', 'N', 'D', '', 'A', '', 'M', 'E', 'S','S','A','G','E']}
                        idx={15} />
                </h1> */}
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="first-name" placeholder='First Name (Required)' required />
                            </li>
                            <li className='half'>
                                <input type="text" name="last-name" placeholder='Last Name Initial (Required)' required />
                            </li>
                            <li className='half'>
                                <input type="text" name="email" placeholder='Email (Required)' required />
                            </li>
                            <li className='half'>
                                <input type="text" name="phone-number" placeholder='Phone Number (Optional)' />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject (Required)" required />
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message (Required)" required ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Yi Chen<br />
                San Francisco Bay Area<br />
                California, United States
            </div>
            <div className='map-wrap'>
                <MapContainer center={[37.7749, -122.4194]} zoom={12}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[37.7749, -122.4194]}>
                        <Popup>Let's meet up!</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="ball-beat" />
    </>
}

export default Contact