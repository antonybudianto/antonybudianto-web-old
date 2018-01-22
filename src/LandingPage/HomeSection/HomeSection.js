import React from 'react';

const HomeSection = () =>
    <div className="LandingPage-section h-auto" style={{

    }}>
        <div className="LandingPage-section-half">
            <div className="LandingPage-section-left">
                <div style={{
                    margin: '20px'
                }} className="LandingPage-img">
                    <img src="profile.jpg" title="Antony Budianto" alt="Antony Budianto"/>
                </div>
            </div>
            <div className="LandingPage-section-right">
                <div className="LandingPage-header">
                    <h1>Hi, I'm <span className="text-info">Antony Budianto</span></h1>
                </div>
                <div className="LandingPage-intro">
                    <span> software engineer.</span>
                    <span> tech blogger.</span>
                    <span> open source artisan.</span>
                </div>
                <div className="LandingPage-social">
                    <a title="Download CV" aria-label="Resume" href="cv.pdf" download>
                        <i aria-hidden="true" className="fa fa-icon fa-address-card"></i>
                    </a>
                    <a aria-label="Github" href="https://github.com/antonybudianto">
                        <i aria-hidden="true" className="fa fa-icon fa-github-square"></i>
                    </a>
                    <a aria-label="Facebook" href="https://facebook.com/antonybudianto">
                        <i aria-hidden="true" className="fa fa-icon fa-facebook-square"></i>
                    </a>
                    <a aria-label="Twitter" href="https://twitter.com/antonybudianto">
                        <i aria-hidden="true" className="fa fa-icon fa-twitter-square"></i>
                    </a>
                    <a aria-label="LinkedIn" href="https://www.linkedin.com/in/antonybudianto">
                        <i aria-hidden="true" className="fa fa-icon fa-linkedin-square"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

export default HomeSection;
