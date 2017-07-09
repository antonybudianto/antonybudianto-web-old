import React from 'react';

import ImageLoader from '../../common/ImageLoader/ImageLoader';
import './Portfolio.css';

const Portfolio = ({portfolio}) =>
  <div className="col-md-4 no-padding portfolio">
    <div className="portfolio-image-wrapper">
      <ImageLoader
        className="img-responsive img-thumbnail"
        src={portfolio.imageUrl} alt="Coming soon">
        <i className="fa fa-spin fa-spinner fa-lg"></i>
      </ImageLoader>
      <div className="portfolio-label">
        <a href={portfolio.url}>{portfolio.name}</a>
      </div>
    </div>
  </div>

export default Portfolio;
