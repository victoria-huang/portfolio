import React, { Component } from 'react'
import { animated, Trail, config } from 'react-spring'
import sr from './ScrollReveal'

class Banner extends Component {
  state = {
    mouseOver: false
  }

  componentDidMount = () => {
    const config = {
      origin: 'left',
      duration: 1000,
      delay: 100,
      distance: '500px',
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
    const name = "developer designer pharmacist".split(' ')

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
            {
              this.state.mouseOver
              ?
              <div className='trail'>
                <Trail
                  keys={name}
                  from={{ opacity: 0, transform: 'translate3d(0px,0,0)' }}
                  to={{ opacity: 1, transform: 'translate3d(5px,0,0)' }}
                  config={ config.molasses }
                  >
                  { name.map(word => props => <div style={props}><p className='subheader'>{ word }</p></div>) }
                </Trail>
              </div>
              :
              <div className='trail' />
            }
          </div>
        </animated.div>
    )
  }
}

export default Banner
