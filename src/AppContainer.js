import React, { Component } from 'react'
import Parallax from 'react-springy-parallax'
import App from './App'

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
      <Parallax ref={ this.setParallax } pages={ 3 }>
        <App scroll={ this.scroll } />
      </Parallax>
    );
  }
}

export default AppContainer;
