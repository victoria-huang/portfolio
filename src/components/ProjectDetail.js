import React, { Component, Fragment } from 'react'
import sr from './ScrollReveal'

class ProjectDetail extends Component {
  componentDidMount = () => {
    const config = {
      origin: 'top',
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
        <h1 style={{ marginBottom: '10px' }}>{ this.props.name }</h1>
        <hr className='white-hr' style={{ width: '200px' }} />
        { this.props.current && <p className='wip'>work in progress</p> }
        <p>{ this.props.description }</p>
        <p>Built with { this.props.tech.join(', ') }</p>
        { this.props.url && <button className='button'>Experience</button> }

        {
          (this.props.frontendRepo && this.props.backendRepo)
          &&
          <Fragment>
            <button className='button'>Frontend Repo</button>
            <button className='button'>Backend Repo</button>
          </Fragment>
        }

        {
          ((this.props.frontendRepo && !this.props.backendRepo) || (this.props.backendRepo && !this.props.frontendRepo))
            &&
            <button className='button'>Repo</button>
        }

        <p className='trigger' onClick={ this.props.handleClick }>{'< Back >'}</p>
      </div>
    )
  }
}

export default ProjectDetail
