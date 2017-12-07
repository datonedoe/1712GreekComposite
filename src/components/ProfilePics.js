import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
class ProfilePics extends Component {
  render() {
    return (
      <div>
        <p>imgUrl: {this.props.imageUrl}</p>
        <Image
          src={this.props.imageUrl}
          alt={this.props.imageUrl}
          responsive
        />
      </div>

    )
  }
}

export default ProfilePics;
