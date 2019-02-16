import React from 'react';
import Helmet from 'react-helmet-async';

import HomeSection from './HomeSection/HomeSection';
import AppHeader from '../common/AppHeader';
import './LandingPage.css';
import BlogSection from './BlogSection/BlogSection';
import OpenSourceSection from './OpenSourceSection/OpenSourceSection';
import YoutubeSection from './YoutubeSection/YoutubeSection';

const ListSection = () => (
  <div className="LandingPage-section List-container h-auto">
    <div className="mobile-flex">
      <div className="List-section">
        <h2>Hello world!</h2>
        <div>
          I'm <strong>Antony</strong>. I love to follow latest web technology,
          writing blog posts, and contribute to open source. <br />
          My favorite tech stacks are JavaScript, React, React Native, Firebase
          and Golang.
        </div>
      </div>
      <YoutubeSection />
      <BlogSection />
      <OpenSourceSection />
    </div>
  </div>
);

const LandingPage = () => (
  <div>
    <Helmet>
      <title>
        Antony Budianto - Senior Software Engineer - Official Website
      </title>
      <meta
        name="title"
        content="Antony Budianto - Senior Software Engineer - Official Website"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Antony Budianto Official Website. Web technology enthusiast, tech blogger, and open source artisan. View his latest work here."
      />
      <meta name="author" content="Antony Budianto" />
      <meta
        name="keywords"
        content="antony budianto, official, website, online, resume, cv, portfolio"
      />
      <meta name="theme-color" content="#000000" />

      <meta
        property="og:title"
        content="Antony Budianto - Senior Software Engineer - Official Website"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://antonybudianto.com/" />
      <meta
        property="og:image"
        content="https://antonybudianto.com/profile.jpg"
      />
      <meta
        property="og:description"
        content="Antony Budianto Official Website. Web technology enthusiast, tech blogger, and open source artisan. View his latest work here."
      />
      <link rel="canonical" href="https://antonybudianto.com/" />
    </Helmet>
    <AppHeader />
    <HomeSection />
    <ListSection />
    <footer className="text-center text-muted py-4">
      &copy; {new Date().getFullYear()}. antonybudianto.com
    </footer>
  </div>
);

export default LandingPage;
