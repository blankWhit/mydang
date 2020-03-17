import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Switch,Redirect} from 'react-router-dom';

import Home from './components/Home';
import List from './components/List';
import Shop from './components/Shop';
import Shopping from './components/Shopping';
import Pre from './components/Person';

export default class routers extends Component {

  render() {
    return (
      <div className="routers">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/list" component={List}/>
            <Route path="/Shop" component={Shop}/>
            <Route path="/Shopping" component={Shopping}/>
            <Route path="/Pre" component={Pre}/>
            <Redirect  to="/"/>
          </Switch>
        </Router>
      </div>
    )
  }
}
