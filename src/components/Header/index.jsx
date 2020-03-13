import React, { Component } from 'react';
import './index.less';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="headerLogo">
          <a href="##">ACG</a>
        </div>
        <div className="headerSearch">
          <input type="text" placeholder="五年级课外阅读必读书" autoComplete="off"/>
        </div>
        <div className="headerCate">
          <a href="##">
            
          </a>
        </div>
      </header>
    )
  }
}
