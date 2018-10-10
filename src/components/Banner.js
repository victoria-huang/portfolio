import React, { Component } from 'react'
import { ParallaxLayer, Trail, config } from 'react-spring'
import sr from './ScrollReveal'

const name = "Designer Developer Pharmacist".split(' ')
// https://www.reddit.com/r/reactjs/comments/8b3l3e/x_why_react_needed_yet_another_animation_library/
class Banner extends Component {
  state = {
    mouseOver: false
  }

  componentDidMount = () => {
    const config = {
      origin: 'left',
      duration: 800,
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
    return (
      <ParallaxLayer offset={ 0 } speed={ 0.5 }>
        <div className='center'>
          <hr className='white-hr'/>
          <h1
            // className='header'
            ref='header'
            onMouseEnter={ this.handleMouseEnter }
            onMouseLeave={ this.handleMouseLeave }
            onClick={ () => this.props.scroll(1) }
            style={{ color: '#FFFFFF', opacity: this.state.mouseOver ? 0 : 1, display: this.state.mouseOver ? 'none' : 'block' }}
          >
            V i c t o r i a &nbsp; H u a n g
          </h1>
          <h1
            className='header'
            onMouseEnter={ this.handleMouseEnter }
            onMouseLeave={ this.handleMouseLeave }
            onClick={ () => this.props.scroll(1) }
            style={{ color: '#FFFFFF', opacity: this.state.mouseOver ? 1 : 0, display: this.state.mouseOver ? 'block' : 'none' }}
          >
            W h o &nbsp; I &nbsp; A m
          </h1>
          <hr className='white-hr' />
          <Trail
            keys={name}
            from={{ opacity: 0, transform: 'translate3d(0px,0,0)' }}
            to={{ opacity: 1, transform: 'translate3d(5px,0,0)' }}
            config={ config.molasses }
            >
            { name.map(letter => props => <div style={props}><p style={{ color: '#FFFFFF', fontSize: '3vmin' }}>{ letter }</p></div>) }
          </Trail>
        </div>
      </ParallaxLayer>
    )
  }
}

export default Banner
