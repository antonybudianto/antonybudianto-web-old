import React, { Component } from 'react';

const mediumBlogs = [
  {
    title: 'New cra-universal 3.0.0 released!',
    imgUrl:
      'https://cdn-images-1.medium.com/max/1600/1*VK508QZOHvxzoA0uk1tzPw.png',
    url:
      'https://medium.com/@antonybudianto/new-cra-universal-3-0-0-released-37ceb19d31fb'
  },
  {
    title: 'Building React library using react-lib-scripts',
    imgUrl:
      'https://cdn-images-1.medium.com/max/1600/1*yDNSy8SRSyedGig3lD8KOA.jpeg',
    url:
      'https://medium.com/@antonybudianto/building-react-library-using-react-lib-scripts-eab6f0fd21f2'
  },
  {
    title: 'Managing packages using LernaJS',
    url:
      'https://medium.com/@antonybudianto/managing-packages-with-lernajs-a15aaa786366',
    imgUrl:
      'https://cdn-images-1.medium.com/max/1600/1*GS0ohg3qm14E4Ya7fljicw.jpeg'
  },
  {
    title: 'Server-side rendering with React and Firebase Functions',
    url:
      'https://medium.com/@antonybudianto/server-side-rendering-with-react-and-firebase-functions-cd67fdb2b605'
  },
  {
    title: 'Testing React Router apps with Jest and Enzyme',
    url:
      'https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303'
  },
  {
    title: 'Automate your create-react-app build on Heroku using Buildpack',
    url:
      'https://medium.com/@antonybudianto/automate-your-create-react-app-build-on-heroku-using-buildpack-beb77408ffee'
  }
];

class BlogSection extends Component {
  render() {
    return (
      <div className="List-section">
        <h3 className="List-section__heading">Blogs</h3>
        <div className="card-deck row no-gutters">
          {mediumBlogs.map((md, i) => (
            <div key={i} className="col-md-4 mb-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={md.imgUrl || '/images/medium.jpg'}
                  alt={md.title}
                />
                <div className="card-body">
                  <a className="card-title" href={md.url}>
                    {md.title}
                  </a>
                  {/* <p className="card-text">{md.}</p> */}
                  <p className="card-text">
                    {/* <small className="text-muted">Read</small> */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogSection;
