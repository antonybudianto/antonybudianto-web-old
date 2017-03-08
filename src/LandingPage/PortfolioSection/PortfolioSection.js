import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';

import './PortfolioSection.css';
import Portfolio from './Portfolio/Portfolio';

class PortfolioSection extends Component {
  componentWillMount() {
    this.state = {
      loading: true,
      portofolios: []
    };

    let db = firebase.database();
    db.ref('projects')
    .once('value')
    .then(snapshot => {
      this.setState({
        loading: false,
        portofolios: snapshot.val()
      });
    }, err => {
      this.setState({
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="section">
        <div className="heading">
            <h2 id="portfolio">Portfolio</h2>
        </div>
        <div className="row portfolio-container">
            {
              this.state.loading ? (
                <div className="col-md-12 text-center">Loading...</div>
              ) : null
            }
            {
              this.state.portofolios.map(p =>
                <Portfolio key={p.id} portfolio={p}></Portfolio>
              )
            }
        </div>
      </div>
    )
  }
}

export default PortfolioSection;
