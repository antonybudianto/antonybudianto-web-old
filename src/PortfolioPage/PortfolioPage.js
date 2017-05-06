import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';

import './PortfolioPage.css';
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
            <h2 id="portfolio"><a style={{color: 'white'}} href="#portfolio"><i className="fa fa-bookmark"></i> Portfolio</a></h2>
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

export default PortfolioPage;
