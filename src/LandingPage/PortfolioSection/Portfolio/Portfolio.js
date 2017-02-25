import React from 'react';

import './Portfolio.css';

const Portfolio = ({portfolio}) =>
  <div className="col-md-4 no-padding portfolio" key={portfolio.id}>
    <div className="portfolio-image-wrapper">
      <img
      className="img-responsive img-thumbnail"
      src={portfolio.imageUrl} alt="Coming soon"/>
      <div className="portfolio-label">
        <a href={portfolio.url}>{portfolio.name}</a>
      </div>
    </div>
  </div>

export default Portfolio;
