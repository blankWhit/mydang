import React, { Component } from 'react';

import Footer from '../Footer';
import "./index.less";

class List extends Component {
  render() {
    return (
      <div className="list">
        列表
        <Footer/>
      </div>
    );
  }
}

export default List;