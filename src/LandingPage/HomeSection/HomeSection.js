import React from 'react';

const scrollToView = id =>
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

const HomeSection = () => (
  <div className="LandingPage-section LandingPage-background">
    <div className="LandingPage-section-half">
      <div className="LandingPage-section-left">
        <div
          style={{
            margin: '20px'
          }}
          className="LandingPage-img"
        >
          <img
            src="profile.jpg"
            title="Antony Budianto"
            alt="Antony Budianto"
          />
        </div>
      </div>
      <div className="LandingPage-section-right">
        <div className="LandingPage-header">
          <h1>
            Hi, I'm{' '}
            <span className="text-white text-name">Antony Budianto</span>
          </h1>
        </div>
        <div className="LandingPage-intro">
          <span> software engineer.</span>
          <span> open source artisan.</span>
          <span> tech writer.</span>
        </div>
        <div className="LandingPage-social">
          <a title="Download CV" aria-label="Resume" href="cv.pdf" download>
            <i aria-hidden="true" className="fa fa-icon fa-address-card" />
          </a>
          <a aria-label="Facebook" href="https://facebook.com/antonybudianto">
            <i aria-hidden="true" className="fa fa-icon fa-facebook-square" />
          </a>
          <a aria-label="Twitter" href="https://twitter.com/antonybudianto">
            <i aria-hidden="true" className="fa fa-icon fa-twitter-square" />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/antonybudianto"
          >
            <i aria-hidden="true" className="fa fa-icon fa-linkedin-square" />
          </a>
          <a aria-label="Youtube" href="https://youtube.com/c/AntonyBudianto">
            <i aria-hidden="true" className="fa fa-icon fa-youtube-square" />
          </a>
        </div>
        <div className="mt-3">
          <a href="#!" onClick={() => scrollToView('#latest-repos')}>
            <i className="fa fa-arrow-down icon-down" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HomeSection;
