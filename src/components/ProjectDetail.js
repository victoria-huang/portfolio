import React, { Component } from 'react'
import sr from './ScrollReveal'

class ProjectDetail extends Component {
  componentDidMount = () => {
    const config = {
      origin: 'left',
      duration: 500,
      delay: 0,
      distance: '100px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.details, config)
  }

  render() {
    return (
      <div ref='details'>
        Deeeetails
        <p className='trigger' onClick={ this.props.handleClick }>Back.</p>
      </div>
    )
  }
}

export default ProjectDetail
