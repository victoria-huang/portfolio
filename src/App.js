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
        <ParallaxLayer offset={ 0 } speed={ 0.5 } style={{ backgroundColor: '#243B4A' }} />
        <Banner />
        <About />
        <ProjectContainer />
      </Fragment>
    );
  }
}

export default App;
