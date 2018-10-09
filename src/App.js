import React, { Component, Fragment } from 'react'
import Banner from './components/Banner'
import About from './components/About'
import ProjectContainer from './containers/ProjectContainer'
import { ParallaxLayer } from 'react-spring'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ParallaxLayer offset={0} speed={0.5} factor={1.5} style={{ backgroundColor: '#243B4A' }} />
        <ParallaxLayer offset={1} speed={0.5} factor={1.5} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={0.5} factor={1.5} style={{ backgroundColor: '#87BCDE' }} />

        <Banner />
        <About />
        <ProjectContainer />
      </Fragment>
    );
  }
}

export default App;
