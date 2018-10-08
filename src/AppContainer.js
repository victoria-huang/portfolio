import React, { Component } from 'react'
import Parallax from 'react-springy-parallax'
import App from './App'
import Nav from './components/Nav'

class AppContainer extends Component {
  constructor() {
    super()

    this.parallax = null
    this.setParallax = ref => { this.parallax = ref }
  }

  scroll = (page) => {
    this.parallax.scrollTo(page)
  }

  render() {
    return (
      <Parallax ref={ this.setParallax } pages={ 2 }>
        <Nav scroll={ this.scroll } />
        <App />
      </Parallax>
    );
  }
}

export default AppContainer;
