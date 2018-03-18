import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';

import './PortfolioPage.css';
import AppHeader from '../common/AppHeader';
import Portfolio from './Portfolio/Portfolio';

class PortfolioPage extends Component {
  state = {
    loading: true,
    portofolios: [],
  };

  componentDidMount() {
    let db = firebase.database();
    db
      .ref('portfolios')
      .once('value')
      .then(
        snapshot => {
          this.setState({
            loading: false,
            portofolios: snapshot.val(),
          });
        },
        err => {
          this.setState({
            loading: false,
          });
        }
      );
  }

  render() {
    return (
      <div>
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
