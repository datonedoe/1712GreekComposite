import React, { Component } from 'react';
import './ProfileName.css'
class ProfileName extends Component {
  render() {
    return (
      <div className="ProfileName">
        <strong>{this.props.fullName}</strong>
      </div>
    )
  }
}

export default ProfileName ;
