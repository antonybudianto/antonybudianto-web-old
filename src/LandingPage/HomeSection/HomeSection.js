import React from 'react';

const HomeSection = () =>
    <div className="LandingPage-section">
        <div className="LandingPage-img">
        <img src="profile.jpg" alt=""/>
        </div>
        <div className="LandingPage-header">
        <h1>Antony Budianto</h1>
        </div>
        <div className="LandingPage-intro">
        <p>Software engineer and Open source contributor</p>
        </div>
        <div className="LandingPage-action">
            <a href="cv.pdf" download className="btn btn-primary">
                <i className="fa fa-file-text-o"></i> <span>Download CV</span>
            </a>
        </div>
        <div className="LandingPage-social">
            <a aria-label="Github" href="https://github.com/antonybudianto">
                <i aria-hidden="true" className="fa fa-github-square"></i>
            </a>
            <a aria-label="Facebook" href="https://facebook.com/antonybudianto">
                <i aria-hidden="true" className="fa fa-facebook-square"></i>
            </a>
            <a aria-label="Twitter" href="https://twitter.com/antonybudianto">
                <i aria-hidden="true" className="fa fa-twitter-square"></i>
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/antonybudianto">
                <i aria-hidden="true" className="fa fa-linkedin-square"></i>
            </a>
        </div>
    </div>

export default HomeSection;
