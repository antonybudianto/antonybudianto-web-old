import React from 'react';

import HomeSection from './HomeSection/HomeSection';
import AppHeader from '../common/AppHeader';
import './LandingPage.css';

const githubRepos = [
  {
    name: 'cra-universal',
    desc: `CLI to initialize create-react-app project without ejecting.
           Featuring Server side rendering with Code splitting.`,
  },
  {
    name: 'coin-book-mobile',
    desc: 'Cryptocurrency simple viewer for VIP Bitcoin market.',
  },
  {
    name: 'gitfun-react-native',
    desc:
      'Simple GitHub client on your mobile. Available on Expo and Google Play.',
  },
  {
    name: 'angular-starter',
    desc: 'Angular 2+ Starter using Gulp and TypeScript.',
  },
  {
    name: 'express-firebase',
    desc: 'Express starter for your Firebase applications.',
  },
  {
    name: 'express-firebase-middleware',
    desc: 'Express middleware for your Firebase applications.',
  },
];

const mediumBlogs = [
  {
    title: 'Server-side rendering with React and Firebase Functions',
    url:
      'https://medium.com/@antonybudianto/server-side-rendering-with-react-and-firebase-functions-cd67fdb2b605',
  },
  {
    title: 'Testing React Router apps with Jest and Enzyme',
    url:
      'https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303',
  },
  {
    title: 'Automate your create-react-app build on Heroku using Buildpack',
    url:
      'https://medium.com/@antonybudianto/automate-your-create-react-app-build-on-heroku-using-buildpack-beb77408ffee',
  },
];

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
      <div className="List-section">
        <h3 id="latest-repos">Open source</h3>
        <div className="d-flex flex-wrap justify-content-between">
          {githubRepos.map((gh, i) => (
            <div key={i} className="col-md-4 mb-2 px-0">
              <div key={i} className="card mx-1">
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={'https://github.com/antonybudianto/' + gh.name}>
                      {gh.name}
                    </a>
                  </h5>
                  <p className="card-text">{gh.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="List-section">
        <h3>Blogs</h3>
        <ul id="latest-blogs">
          {mediumBlogs.map((md, i) => (
            <li key={i}>
              <a href={md.url}>{md.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const LandingPage = () => (
  <div>
    <AppHeader />
    <HomeSection />
    <ListSection />
    <footer className="LandingPage-background text-center py-4">
      &copy; {new Date().getFullYear()}. antonybudianto.com
    </footer>
  </div>
);

export default LandingPage;
