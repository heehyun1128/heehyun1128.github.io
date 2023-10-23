import './index.scss'
import Logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,

} from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faPalette,
    faBars,
    faClose,
    faNoteSticky,
    faAddressBook,
    faBook,
} from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)
    return (<div className='nav-bar'>
        {/* <Link className='logo' to='/'>
            <img src={Logo} alt='logo' />
        </Link> */}
        <nav className={showNav ? 'mobile-show' : ''} >
            <NavLink
                onClick={() => setShowNav(false)}
                exact="true"
                activeclassname="active"
                className="main-link" to="/">
                <FontAwesomeIcon icon={faHome} color="black" />
            </NavLink>
            <NavLink
                onClick={() => setShowNav(false)}
                exact="true"
                activeclassname="active"
                className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="black" />
            </NavLink>
            <NavLink
                onClick={() => setShowNav(false)}
                exact="true"
                activeclassname="active"
                className="skill-link" to="/skills">
                <FontAwesomeIcon icon={faPalette} color="black" />
            </NavLink>
            <NavLink
                onClick={() => setShowNav(false)}
                activeclassname="active"
                className="portfolio-link"
                to="/portfolio"

            >
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink
                onClick={() => setShowNav(false)}
                activeclassname="active"
                className="resume-link"
                to="/resume"

            >
                <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
            </NavLink>
            <NavLink
                onClick={() => setShowNav(false)}
                exact="true"
                activeclassname="active"
                className="contact-link"
                to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="black" />
            </NavLink>
            <FontAwesomeIcon
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="rgb(158, 183, 196)"
                size="3x"
                className='close-icon' />

        </nav>
        {/* <ul>
            <li>
                <a target="_blank" rel="nonreferrer" href="https://www.linkedin.com/in/yi-c-452811132/">
                    <FontAwesomeIcon icon={faLinkedin} color="black" />
                </a>
                <a target="_blank" rel="nonreferrer" href="https://github.com/heehyun1128/">
                    <FontAwesomeIcon icon={faGithub} color="black" />
                </a>
            </li>
        </ul> */}
        <FontAwesomeIcon
            onClick={() => {
                console.log('clicked')
                setShowNav(true)}}
            icon={faBars}
            color="rgb(158, 183, 196)"
            size="3x"
            className='hamburger-icon' />

    </div>
    )
}

export default Sidebar