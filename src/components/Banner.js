import React, { Component } from 'react'
import { animated } from 'react-spring'
import sr from './ScrollReveal'
// import TrailText from './TrailText'

class Banner extends Component {
  state = {
    mouseOver: false
  }

  componentDidMount = () => {
    const config = {
      origin: 'top',
      duration: 800,
      delay: 100,
      distance: '30px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.header, config)
  }

  handleMouseEnter = () => {
    this.setState({
      mouseOver: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      mouseOver: false
    })
  }

  render() {
    return (
        <animated.div className='mainRoute' style={{ ...this.props.style, background: `#1B1B1C` }}>
          <div className='mainRouteItem'>
            <h1
              className='header'
              ref='header'
              onMouseEnter={ this.handleMouseEnter }
              onMouseLeave={ this.handleMouseLeave }
              onClick={ () => this.props.history.push('/about') }
              style={{ opacity: this.state.mouseOver ? 0 : 1, display: this.state.mouseOver ? 'none' : 'block' }}
            >
              Victoria Huang
            </h1>

            <h1
              className='header'
              onMouseEnter={ this.handleMouseEnter }
              onMouseLeave={ this.handleMouseLeave }
              onClick={ () => this.props.history.push('/about') }
              style={{ opacity: this.state.mouseOver ? 1 : 0, display: this.state.mouseOver ? 'block' : 'none' }}
            >
              &nbsp;&nbsp;&nbsp; Who I Am &nbsp;&nbsp;&nbsp;
            </h1>

            <hr className='white-hr' style={{ width: '200px' }} />

            {/* this.state.mouseOver && <TrailText /> */}
          </div>
        </animated.div>
    )
  }
}

export default Banner
