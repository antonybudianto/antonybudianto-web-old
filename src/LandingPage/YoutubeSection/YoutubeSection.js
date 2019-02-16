import React, { Component } from 'react';

import './YoutubeSection.css';

const ytVideos = [
  {
    src: 'https://www.youtube.com/embed/oq7xNC9ZH9c'
  },
  {
    src: 'https://www.youtube.com/embed/dZTNdNNkED8'
  },
  {
    src: 'https://www.youtube.com/embed/CBopqO-RsYo'
  },
  {
    src: 'https://www.youtube.com/embed/DP5eFSbpNZ0'
  },
  {
    src: 'https://www.youtube.com/embed/9jQmDBLIqBA'
  },
  {
    src: 'https://www.youtube.com/embed/X3Tj3jpCwgA'
  }
];

class YoutubeSection extends Component {
  render() {
    return (
      <div className="List-section">
        <h2 className="List-section__heading">YouTube</h2>
        <div className="mb-3">
          I create tech news and tutorial, please like, share and{' '}
          <strong>subscribe!</strong>
        </div>
        <div className="card-deck row no-gutters">
          {ytVideos.map((v, i) => (
            <div key={i} className="col-md-4 mb-3">
              <div className="card CardSection__card">
                <div className="card-body">
                  <iframe
                    style={{ width: '100%' }}
                    src={v.src}
                    frameBorder="0"
                    title={i}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default YoutubeSection;
