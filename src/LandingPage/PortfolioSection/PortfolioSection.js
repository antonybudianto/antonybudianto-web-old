import React, { Component } from 'react';
import * as firebase from 'firebase';

import './PortfolioSection.css';

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
            <h2>Portfolio</h2>
        </div>
        <div className="row portfolio-container">
            {
              this.state.loading ? (
                <div className="col-md-12 text-center">Loading...</div>
              ) : null
            }
            {
              this.state.portofolios.map(p =>
                <div className="col-md-4 no-padding portfolio" key={p.id}>
                  <div className="portfolio-image-wrapper">
                    <img
                    className="img-responsive img-thumbnail"
                    src={p.imageUrl} alt="Coming soon"/>
                    <div className="portfolio-label">
                      <a href={p.url}>{p.name}</a>
                    </div>
                  </div>
                </div>
              )
            }
        </div>
      </div>
    )
  }
}

export default PortfolioSection;
