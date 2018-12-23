import React, { Component } from 'react';

const githubRepos = [
  {
    name: 'cra-universal',
    desc: `CLI for universal create-react-app without ejecting, zero config, with Hot Module Reload support.
Featuring Server-side Rendering and Code-splitting`
  },
  {
    name: 'react-ua',
    desc: 'React User Agent component and provider, using new Context API'
  },
  {
    name: 'react-save-localstorage',
    desc: 'React component to save data to localStorage on render phase safely'
  },
  {
    name: 'gitfun-react-native',
    desc:
      'Simple GitHub client on your mobile. Available on Expo and Google Play.'
  },
  {
    name: 'react-lib-scripts',
    desc: 'CLI for developing React UI libraries.'
  },
  {
    name: 'express-firebase-middleware',
    desc: 'Express middleware for your Firebase applications.'
  }
];

class OpenSourceSection extends Component {
  render() {
    return (
      <div className="List-section">
        <h2 id="latest-repos" className="List-section__heading">
          Open source
        </h2>
        <p>
          Here are some of my open source projects, feel free to check it out
          and contribute!
        </p>
        <div className="d-flex flex-wrap justify-content-between">
          {githubRepos.map((gh, i) => (
            <div key={i} className="col-md-4 mb-2 px-0">
              <div key={i} className="card mx-1">
                <div className="card-body">
                  <div className="card-title">
                    <a href={'https://github.com/antonybudianto/' + gh.name}>
                      {gh.name}
                    </a>
                  </div>
                  <p className="card-text">{gh.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default OpenSourceSection;
