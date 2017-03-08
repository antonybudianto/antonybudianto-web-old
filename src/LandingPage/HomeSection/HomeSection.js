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
        <div>
            <a href="cv.pdf" download className="btn btn-outline-primary">
                <i className="fa fa-file-text-o"></i> <span>Download CV</span>
            </a> &nbsp;
            <a href="#portfolio" className="btn btn-outline-primary">
                <i className="fa fa-picture-o"></i> <span>View portfolio</span>
            </a>
        </div>
        <div className="LandingPage-social">
        <a href="https://github.com/antonybudianto">
            <i className="fa fa-github-square"></i>
        </a>
        <a href="https://facebook.com/antonybudianto">
            <i className="fa fa-facebook-square"></i>
        </a>
        <a href="https://twitter.com/antonybudianto">
            <i className="fa fa-twitter-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/antonybudianto">
            <i className="fa fa-linkedin-square"></i>
        </a>
        </div>
    </div>

export default HomeSection;
