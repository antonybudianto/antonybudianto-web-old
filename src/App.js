import React, { Component } from 'react';
import browserHistory from 'react-router/lib/browserHistory'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import * as firebase from 'firebase';

import './App.css';
import LandingPage from './LandingPage/LandingPage';
import NotFoundPage from './ErrorPage/NotFoundPage/NotFoundPage';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyB4G1bUTLKRwTD1Qx88AnC1hfxaaGySQVk",
      authDomain: "antonybudianto-web.firebaseapp.com",
      databaseURL: "https://antonybudianto-web.firebaseio.com",
      storageBucket: "antonybudianto-web.appspot.com",
      messagingSenderId: "952722082016"
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
