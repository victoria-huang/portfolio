import React, { Component } from 'react'
import sr from './ScrollReveal'
import Parser from 'html-react-parser'

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
      <div className="project-detail">
        <h1 className="project-header">{ this.props.name }</h1>
        <hr className='white-hr' style={{ width: '200px' }} />
        { this.props.current && <p className='wip'>work in progress</p> }
        <p>{ Parser(this.props.description) }</p>
        <p>Built with { this.props.tech.join(', ') }</p>
        { 
          this.props.url 
          && 
          <a href={this.props.url} target="_blank" rel="noopener noreferrer">
            <button className='button'>Experience</button> 
          </a>
        }

        { 
          this.props.video
          &&
          <a href={this.props.video} target="_blank" rel="noopener noreferrer">
            <button className='button'>Video Demo</button> 
          </a>
        }

        {
          (this.props.repo)
            &&
            <a href={this.props.repo} target="_blank" rel="noopener noreferrer">
              <button className='button'>Repo</button>
            </a>
        }

        <p className='back' onClick={ this.props.handleClick }>{'< Back >'}</p>
      </div>
    )
  }
}

export default ProjectDetail
