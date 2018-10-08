import React, { Component, Fragment } from 'react'
import App from './App'
import { Parallax } from 'react-spring'
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
      <Fragment>
        <div id='nav'>
          <Nav scroll={ this.scroll } />
        </div>
        <Parallax ref={ this.setParallax } pages={ 3 }>
          <App scroll={ this.scroll } />
        </Parallax>
      </Fragment>
    );
  }
}

export default AppContainer;
