import React, { Component } from 'react'
import { ParallaxLayer, Trail, config } from 'react-spring'

const name = "Designer Developer Pharmacist".split(' ')

class Banner extends Component {
  state = {
    mouseOver: false
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
      <ParallaxLayer offset={ 0.4 } speed={ 0.5 }>
        <div className='center container'>
          <hr />
          <h1
            className='header'
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
          <hr />
          <Trail
            keys={name}
            from={{ opacity: 0, transform: 'translate3d(0px,0,0)' }}
            to={{ opacity: 1, transform: 'translate3d(5px,0,0)' }}
            config={ config.molasses }
            >
            { name.map(letter => props => <div style={props}><p style={{ color: '#FFFFFF', fontSize: '1.3em' }}>{ letter }</p></div>) }
          </Trail>
        </div>
      </ParallaxLayer>
    )
  }
}

export default Banner
