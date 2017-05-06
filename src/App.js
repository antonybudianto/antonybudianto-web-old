import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as firebase from 'firebase/app';

import './App.css';
import LandingPage from './LandingPage/LandingPage';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import NotFoundPage from './ErrorPage/NotFoundPage/NotFoundPage';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route path="/portfolio" component={PortfolioPage}></Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
