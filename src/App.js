import React, { Component } from 'react';
import * as firebase from 'firebase';

import './App.css';
import LandingPage from './landing/LandingPage';

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
      <div className="App">
        <LandingPage></LandingPage>
      </div>
    );
  }
}

export default App;
