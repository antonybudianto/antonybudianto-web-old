import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as firebase from 'firebase/app';

import './App.css';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import NotFoundPage from './ErrorPage/NotFoundPage/NotFoundPage';
import LandingPage from './LandingPage/LandingPage';

// TODO: apply code split when react-snapshot ready
// import LoadableComponent from './common/LoadableComponent';

// const PortfolioPage = LoadableComponent({
//   loader: () => import('./PortfolioPage/PortfolioPage')
// });
// const NotFoundPage = LoadableComponent({
//   loader: () => import('./ErrorPage/NotFoundPage/NotFoundPage')
// });
// const LandingPage = LoadableComponent({
//   loader: () => import('./LandingPage/LandingPage')
// });

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

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
