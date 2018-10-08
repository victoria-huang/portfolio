import React, { Component, Fragment } from 'react';
import Banner from './components/Banner'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav scroll={ this.props.scroll } />
        <Banner />
      </Fragment>
    );
  }
}

export default App;
