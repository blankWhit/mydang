import React, { Component } from 'react'

import Home from './components/Home';

import './App.less';
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Home/>
      </div>
    )
  }
}
