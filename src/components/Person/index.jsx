import React, { Component } from 'react';

import Footer from '../Footer';

class Person extends Component {
  render() {
    return (
      <div className="person">
        我的界面
        <Footer/>
      </div>
    );
  }
}

export default Person;