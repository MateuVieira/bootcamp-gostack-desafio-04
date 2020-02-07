import React, { Component } from 'react';

import './style.css';
import logo from '../../assets/facebook.png';


class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} />
      </header>
    );
  }
}

export default Header;