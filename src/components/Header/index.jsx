import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import './index.less';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="headerLogo">
          <NavLink to="/">
            <span className="logo">ACG</span>
          </NavLink>
        </div>
        <div className="headerSearch">
          <input type="text" placeholder="五年级课外阅读必读书" autoComplete="off"/>
        </div>
        <div className="headerCate">
          <NavLink to="/list">
            <span className="iconfont icon-fenlei"></span>
          </NavLink>
        </div>
      </header>
    )
  }
}
