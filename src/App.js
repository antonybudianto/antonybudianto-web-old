import React, { Component } from 'react';
import browserHistory from 'react-router/lib/browserHistory'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import * as firebase from 'firebase/app';

import './App.css';
import LandingPage from './LandingPage/LandingPage';
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
      <Router history={browserHistory}>
        <Route path="/" component={LandingPage}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Router>
    );
  }
}

export default App;
