import React, { Component, Fragment } from 'react';
import Banner from './components/Banner'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={ Banner } />
        </Switch>
      </Router>
    );
  }
}

export default App;
