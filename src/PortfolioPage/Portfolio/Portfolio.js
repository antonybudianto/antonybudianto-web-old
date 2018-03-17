import React from 'react';

import ImageLoader from '../../common/ImageLoader/ImageLoader';
import './Portfolio.css';

const Portfolio = ({ portfolio }) => (
  <div className="portfolio no-padding col-md-4">
    <div className="portfolio-image-wrapper">
      <ImageLoader
        className="img-responsive img-thumbnail"
        src={portfolio.imageUrl}
        alt="Coming soon"
      >
        <i className="fa fa-spin fa-spinner fa-lg" />
      </ImageLoader>
      <div className="portfolio-label">
        {portfolio.url ? (
          <a href={portfolio.url}>{portfolio.name}</a>
        ) : (
          portfolio.name
        )}
      </div>
    </div>
  </div>
);

export default Portfolio;
