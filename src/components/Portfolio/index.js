import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import Moment from '../../assets/images/Moment.png'
import Petsy from '../../assets/images/Petsy.png'
import MeetFriends from '../../assets/images/MeetFriends.png'


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {

        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));

    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port) => {
                        return (
                            <div className="image-box" key={port.id}>
                                <img
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    const handleViewMomentRender = e => {
        e.preventDefault()
        window.open('https://moment-2igd.onrender.com')
    }
    const handleViewPetsyRender = e => {
        e.preventDefault()
        window.open('https://petsy-kn3b.onrender.com')
    }
    const handleViewMeetFriendsRender = e => {
        e.preventDefault()
        window.open('https://meetup-backend-witc.onrender.com')
    }
    const handleViewMomentGithub = e => {
        e.preventDefault()
        window.open('https://github.com/heehyun1128/yc-Moment')
    }
    const handleViewPetsyGithub = e => {
        e.preventDefault()
        window.open('https://github.com/nickhosman/Petsy')
    }
    const handleViewMeetFriendsGithub = e => {
        e.preventDefault()
        window.open('https://github.com/heehyun1128/API-project')
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                {/* <div id="project-container">
                    <div class="project-div" >
                        <div><h2 >Moment</h2></div>
                        <div id='link-div'>
                            <div onClick={handleViewMomentRender}>Live</div>
                            <div onClick={handleViewMomentGithub}>Github</div>
                        </div>
                        <div id='img-div'>
                        <img src={Moment} alt="" />
                        </div>
                    </div>

                    <div class="project-div" >
                        <div><h2 >Petsy</h2></div>
                        <div id='link-div'>
                            <div onClick={handleViewPetsyRender}>Live</div>
                            <div onClick={handleViewPetsyGithub}>Github</div>
                        </div>
                        <div id='img-div'><img src={Petsy} alt="" /></div>
                    </div>

                    <div class="project-div"  >
                        <div><h2 >MeetFriends</h2></div>
                        <div id='link-div'>
                            <div onClick={handleViewMeetFriendsRender}>Live</div>
                            <div onClick={handleViewMeetFriendsGithub}>Github</div>
                        </div>
                        <div id='img-div'><img src={MeetFriends} alt="" /></div>
                    </div>
                </div> */}
                <div id="portfolio-container">
                    <div class="card">
                        <img src={Moment} alt="" />
                        <div className="content">

                            <h1>01</h1>
                            <h2>MOMENT</h2>
                            <h3>Online social networking website enabling users to generate posts, engage in discussions, and create connections.</h3>
                            <div id='link-div'>
                                <p onClick={handleViewMomentRender}>Live</p>
                                <p onClick={handleViewMomentGithub}>Github</p>
                            </div>
                        </div>

                    </div>


                    <div class="card">
                        <img src={Petsy} alt="" />
                        <div className="content">

                            <h1>02</h1>
                            <h2>PETSY</h2>
                            <h3>An online retail platform specializing in the sale of pet-related products. </h3>
                            <div id='link-div'>
                                <p onClick={handleViewPetsyRender}>Live</p>
                                <p onClick={handleViewPetsyGithub}>Github</p>
                            </div>
                        </div>

                    </div>

                    <div class="card">
                        <img src={MeetFriends} alt="" />
                        <div className="content">

                            <h1>03</h1>
                            <h2>MEETFRIENDS</h2>
                            <h3>A MeetUp-inspired event organization platform for organizing events for people of similar interests </h3>
                            <div id='link-div'>
                                <p onClick={handleViewMeetFriendsRender}>Live</p>
                                <p onClick={handleViewMeetFriendsGithub}>Github</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div>{renderPortfolio(portfolio)}</div> */}
            </div>
            <Loader type="ball-beat" />
        </>
    );
}

export default Portfolio;