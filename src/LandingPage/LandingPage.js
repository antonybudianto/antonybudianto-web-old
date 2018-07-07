import React from 'react';

import HomeSection from './HomeSection/HomeSection';
import AppHeader from '../common/AppHeader';
import './LandingPage.css';

const githubRepos = [
  {
    name: 'cra-universal',
    desc: `CLI for universal create-react-app without ejecting, zero config, with Hot Module Reload support.
Featuring Server-side Rendering and Code-splitting`
  },
  {
    name: 'coin-book-mobile',
    desc:
      'Cryptocurrency simple viewer for VIP Bitcoin market. Made using React Native.'
  },
  {
    name: 'gitfun-react-native',
    desc:
      'Simple GitHub client on your mobile. Available on Expo and Google Play.'
  },
  {
    name: 'angular-starter',
    desc: 'Angular 2+ Starter using Gulp and TypeScript.'
  },
  {
    name: 'react-lib-scripts',
    desc: 'CLI for developing React UI libraries.'
  },
  {
    name: 'express-firebase-middleware',
    desc: 'Express middleware for your Firebase applications.'
  }
];

const mediumBlogs = [
  {
    title: 'New cra-universal 3.0.0 released!',
    imgUrl:
      'https://cdn-images-1.medium.com/max/1600/1*VK508QZOHvxzoA0uk1tzPw.png',
    url:
      'https://medium.com/@antonybudianto/new-cra-universal-3-0-0-released-37ceb19d31fb'
  },
  {
    title: 'Building React library using react-lib-scripts',
    imgUrl:
      'https://cdn-images-1.medium.com/max/1600/1*yDNSy8SRSyedGig3lD8KOA.jpeg',
    url:
      'https://medium.com/@antonybudianto/building-react-library-using-react-lib-scripts-eab6f0fd21f2'
  },
  {
    title: 'Managing packages using LernaJS',
    url:
      'https://medium.com/@antonybudianto/managing-packages-with-lernajs-a15aaa786366',
    imgUrl:
      'https://cdn-images-1.medium.com/max/1600/1*GS0ohg3qm14E4Ya7fljicw.jpeg'
  },
  {
    title: 'Server-side rendering with React and Firebase Functions',
    url:
      'https://medium.com/@antonybudianto/server-side-rendering-with-react-and-firebase-functions-cd67fdb2b605'
  },
  {
    title: 'Testing React Router apps with Jest and Enzyme',
    url:
      'https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303'
  },
  {
    title: 'Automate your create-react-app build on Heroku using Buildpack',
    url:
      'https://medium.com/@antonybudianto/automate-your-create-react-app-build-on-heroku-using-buildpack-beb77408ffee'
  }
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
        <h3 id="latest-repos" className="List-section__heading">
          Open source
        </h3>
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
        <h3 className="List-section__heading">Blogs</h3>
        <div className="card-deck row no-gutters">
          {mediumBlogs.map((md, i) => (
            <div key={i} className="col-md-4 mb-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={md.imgUrl || '/images/medium.jpg'}
                  alt={md.title}
                />
                <div className="card-body">
                  <a className="card-title" href={md.url}>
                    {md.title}
                  </a>
                  {/* <p className="card-text">{md.}</p> */}
                  <p className="card-text">
                    {/* <small className="text-muted">Read</small> */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
