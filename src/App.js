import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import * as firebase from 'firebase/app';

import LandingPage from './LandingPage/LandingPage';
import LoadableComponent from './common/LoadableComponent';

import './App.css';

const PortfolioPage = LoadableComponent({
  loader: () => import('./PortfolioPage/PortfolioPage')
});
const NotFoundPage = LoadableComponent({
  loader: () => import('./ErrorPage/NotFoundPage/NotFoundPage')
});

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
