import React, { Component, Fragment } from 'react'
import Banner from './components/Banner'
import About from './components/About'
import ProjectContainer from './containers/ProjectContainer'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <ProjectContainer />
        <About />
      </Fragment>
    );
  }
}

export default App;
