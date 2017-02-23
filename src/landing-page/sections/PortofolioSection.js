import React, { Component } from 'react';
import * as firebase from 'firebase';

import './PortofolioSection.css';

class PortofolioSection extends Component {
  componentWillMount() {
    this.state = {
      loading: true,
      portofolios: []
    };

    let db = firebase.database();
    db.ref('projects')
    .once('value')
    .then(snapshot => {
      console.log(snapshot.val());

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
                  <img
                  className="img-fluid"
                  src="http://blogs.ubc.ca/CourseBlogSample01/wp-content/themes/thesis/rotator/sample-1.jpg" alt="Card portfolio"/>
                  <div className="portfolio-label">
                    {p.name}

                    <div className="portfolio-description">
                      {p.description} <hr/>
                      <a href={p.url}>{p.url}</a>
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

export default PortofolioSection;
