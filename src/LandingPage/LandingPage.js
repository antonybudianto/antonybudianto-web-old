import React from 'react';

import HomeSection from './HomeSection/HomeSection';
import AppHeader from '../common/AppHeader';
import './LandingPage.css';

const githubRepos = [
  'antonybudianto/cra-universal',
  'antonybudianto/angular-starter',
  'antonybudianto/express-firebase',
  'antonybudianto/express-firebase-middleware'
]

const mediumBlogs = [
  {
    title: 'Server-side rendering with React and Firebase Functions',
    url: 'https://medium.com/@antonybudianto/server-side-rendering-with-react-and-firebase-functions-cd67fdb2b605'
  },
  {
    title: 'Testing React Router apps with Jest and Enzyme',
    url: 'https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303'
  },
  {
    title: 'Automate your create-react-app build on Heroku using Buildpack',
    url: 'https://medium.com/@antonybudianto/automate-your-create-react-app-build-on-heroku-using-buildpack-beb77408ffee'
  }
]

const ListSection = () => (
  <div className="LandingPage-section List-container">
    <div className="mobile-flex" style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly'
    }}>
        <div className="List-section">
            <h4><i className="fa fa-github"></i> Latest repos</h4>
            <ul className="list-style-none">
              {
                githubRepos.map((gh, i) => (
                  <li key={i}><a href={`https://github.com/${gh}`}>{gh}</a> &nbsp;
                    <img src={`https://img.shields.io/github/stars/${gh}.svg`} alt={gh}/>
                  </li>
                ))
              }
            </ul>
        </div>
        <div className="List-section">
          <h4><i className="fa fa-medium"></i> Latest blogs</h4>
          <ul className="list-style-none">
            {
              mediumBlogs.map((md, i) => (
                <li key={i}>
                  <a href={md.url}>{md.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
    </div>
  </div>
)

const LandingPage = () =>
  <div>
    <AppHeader></AppHeader>
    <HomeSection></HomeSection>
    <ListSection />
  </div>

export default LandingPage;
