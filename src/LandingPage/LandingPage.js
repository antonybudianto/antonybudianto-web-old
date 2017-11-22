import React from 'react';

import HomeSection from './HomeSection/HomeSection';
import AppHeader from '../common/AppHeader';
import './LandingPage.css';

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
                    <li><a href="https://github.com/antonybudianto/cra-universal">Create React App Universal CLI</a></li>
                    <li><a href="https://github.com/antonybudianto/express-firebase-middleware">Express Firebase Middleware</a></li>
                    <li><a href="https://github.com/antonybudianto/express-firebase">Express Firebase Starter</a></li>
                </ul>
            </div>
            <div className="List-section">
                <h4><i className="fa fa-medium"></i> Latest blogs</h4>
                <ul className="list-style-none">
                    <li>
                        <a href="https://medium.com/@antonybudianto/server-side-rendering-with-react-and-firebase-functions-cd67fdb2b605">
                            Server-side rendering with React and Firebase Functions</a></li>
                    <li><a href="https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303">
                            Testing React Router apps with Jest and Enzyme</a></li>
                    <li><a href="https://medium.com/@antonybudianto/automate-your-create-react-app-build-on-heroku-using-buildpack-beb77408ffee">
                            Automate your create-react-app build on Heroku using Buildpack</a></li>
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
