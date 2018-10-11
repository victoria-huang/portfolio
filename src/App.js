import React, { Component, Fragment } from 'react'
import Banner from './components/Banner'
import AboutContainer from './containers/AboutContainer'
import ProjectContainer from './containers/ProjectContainer'
import { ParallaxLayer } from 'react-spring'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
// #243B4A
class App extends Component {
  render() {
    const styles = {
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }

    return (
      <Fragment>
        <ParallaxLayer offset={0} speed={0.5} factor={1.5} style={{ backgroundColor: '#2a4e57' }} />
        <ParallaxLayer offset={1} speed={0.5} factor={1.5} style={{ backgroundColor: '#ecc3a2' }} />
        <ParallaxLayer offset={2} speed={0.5} factor={1.5} style={{ backgroundColor: '#87BCDE' }} />

        <Banner style={styles} scroll={ this.props.scroll } />
        <AboutContainer style={styles} />
        <ProjectContainer style={styles} />
      </Fragment>
    );
  }
}

export default App;
