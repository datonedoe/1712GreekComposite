import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="Header-Title">Online Greek Composite</h1>
        <hr className="Header-Hr"/>
        <h3 className="Header-Title">Alpha Beta Gamma - Psi Upsilon</h3>
      </div>
    )
  }
}

export default Header;
