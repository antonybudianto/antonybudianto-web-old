import React from 'react';

import './NotFoundPage.css';

const NotFoundPage = () =>
  <div className="NotFoundPage">
    <h1>Oops!</h1>
    <div>
      Looks like you're lost...
    </div>
    <div className="action">
      <a className="btn btn-outline-primary" href="/">Guide me to the right path!</a>
    </div>
  </div>

export default NotFoundPage;
