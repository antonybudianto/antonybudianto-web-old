import React, { Component } from 'react';

import './BlogSection.css';

const mediumBlogs = [
  {
    title: 'React Testing with react-testing-library',
    imgUrl:
      'https://cdn-images-1.medium.com/max/1600/1*GeTKyss99H4Q5cWqFsNO8Q.jpeg',
    url:
      'https://medium.com/@antonybudianto/react-testing-with-react-testing-library-3b8554f6acfd'
  },
  {
    title: 'New cra-universal 3.0.0 released!',
    imgUrl:
      'https://cdn-images-1.medium.com/max/1600/1*VK508QZOHvxzoA0uk1tzPw.png',
    url:
      'https://medium.com/@antonybudianto/new-cra-universal-3-0-0-released-37ceb19d31fb'
  },
  {
    title: 'Tips for server-side rendering with React',
    imgUrl:
      'https://cdn-images-1.medium.com/max/1600/1*QvtSaHdquK5FBIFoJ0gc_A.jpeg',
    url:
      'https://itnext.io/tips-for-server-side-rendering-with-react-e42b1b7acd57'
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
      'https://medium.com/@antonybudianto/server-side-rendering-with-react-and-firebase-functions-cd67fdb2b605',
    imgUrl:
      'https://cdn-images-1.medium.com/max/1600/1*LCU8zQ3Tw51MPlLtSCFyfw.jpeg'
  },
  {
    title: 'Testing React Router apps with Jest and Enzyme',
    url:
      'https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303'
  }
];

class BlogSection extends Component {
  render() {
    return (
      <div className="List-section">
        <h2 className="List-section__heading">Blogs</h2>
        <p>I wrote some blogs from what I've learned, please check it out!</p>
        <div className="card-deck row no-gutters">
          {mediumBlogs.map((md, i) => (
            <div key={i} className="col-md-4 mb-3">
              <div className="card BlogSection__card">
                <div
                  style={{
                    overflow: 'hidden'
                  }}
                >
                  <div
                    className="BlogSection__post-img"
                    style={{
                      backgroundImage: `url('${md.imgUrl ||
                        '/images/medium.jpg'}')`
                    }}
                  />
                </div>
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
