import React, { Component } from 'react';

class ImageLoader extends Component {
    state = {
      loading: true
    };

    handleImageLoad() {
      this.setState({
        loading: false
      });
    }

    render() {
      return (
        <div>
          { this.state.loading ? this.props.children : null }
          <img className={!this.state.loading ? this.props.className : null}
            src={this.props.src} alt={this.props.alt} onLoad={this.handleImageLoad.bind(this)} />
        </div>
      );
    }
}

export default ImageLoader;
