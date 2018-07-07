import React from 'react';

import HomeSection from './HomeSection/HomeSection';
import AppHeader from '../common/AppHeader';
import './LandingPage.css';
import BlogSection from './BlogSection/BlogSection';
import OpenSourceSection from './OpenSourceSection/OpenSourceSection';

const ListSection = () => (
  <div className="LandingPage-section List-container h-auto">
    <div className="mobile-flex">
      <div className="List-section">
        <h2>Hello world!</h2>
        <div>
          I'm <strong>Antony</strong>. I love to follow latest web technology,
          writing blog posts, and contribute to open source. <br />
          My latest favorite tech stacks are JavaScript, React, React Native,
          Firebase and Golang.
        </div>
      </div>
      <OpenSourceSection />
      <BlogSection />
    </div>
  </div>
);

const LandingPage = () => (
  <div>
    <AppHeader />
    <HomeSection />
    <ListSection />
    <footer className="text-center text-muted py-4">
      &copy; {new Date().getFullYear()}. antonybudianto.com
    </footer>
  </div>
);

export default LandingPage;
