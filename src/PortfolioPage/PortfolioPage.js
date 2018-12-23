import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import Helmet from 'react-helmet-async';

import './PortfolioPage.css';
import AppHeader from '../common/AppHeader';
import Portfolio from './Portfolio/Portfolio';

class PortfolioPage extends Component {
  state = {
    loading: true,
    portofolios: []
  };

  componentDidMount() {
    let db = firebase.database();
    db.ref('portfolios')
      .once('value')
      .then(
        snapshot => {
          this.setState({
            loading: false,
            portofolios: snapshot.val()
          });
        },
        err => {
          this.setState({
            loading: false
          });
        }
      );
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Antony Budianto - Portfolio</title>
          <meta name="title" content="Antony Budianto - Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Antony Budianto Official Website. Web technology enthusiast, tech blogger, and open source artisan. View his latest work here."
          />
          <meta name="author" content="Antony Budianto" />
          <meta
            name="keywords"
            content="antony budianto, official, website, online, resume, cv, portfolio"
          />
          <meta name="theme-color" content="#000000" />

          <meta property="og:title" content="Antony Budianto - Portfolio" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://antonybudianto.com/portfolio/"
          />
          <meta
            property="og:image"
            content="https://antonybudianto.com/profile.jpg"
          />
          <meta
            property="og:description"
            content="Antony Budianto Official Website. Web technology enthusiast, tech blogger, and open source artisan. View his latest work here."
          />
          <link rel="canonical" href="https://antonybudianto.com/portfolio/" />
        </Helmet>
        <AppHeader />
        <div className="with-header">
          <div className="section">
            <div className="heading">
              <h2 id="portfolio">Portfolio</h2>
            </div>
            <div className="row portfolio-container">
              {this.state.loading ? (
                <div className="col-md-12 text-center">
                  <i className="fa fa-spin fa-spinner" />
                </div>
              ) : null}
              {this.state.portofolios.map(p => (
                <Portfolio key={p.id} portfolio={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
