import React, { Component } from 'react'
import { ParallaxLayer } from 'react-spring'
import { Link } from 'react-router-dom'
import ProjectDetail from './ProjectDetail'

class Project extends Component {
  render() {
    return (
      <ParallaxLayer offset={ this.props.offset } speed={-0.2} style={{ backgroundColor: '#006E6D' }}>
        <div className='container-item'>
          <div>
            <span className='overlay-text'>
              <h1 className='large'>{ this.props.name }</h1>
            </span>
            <img src={ this.props.image ?
              this.props.image
              :
              'https://images.pexels.com/photos/754082/pexels-photo-754082.jpeg?auto=compress&cs=tinysrgb&h=350'
            } height='350px' width='300px' alt={ `${this.props.name} preview` } />
          </div>
          <ProjectDetail />
        </div>

        {
          this.props.last &&
          <span className='bottom-button'>
            <Link to='/contact'>
              <button className='button-2'>Contact me.</button>
            </Link>
          </span>
        }
      </ParallaxLayer>
    )
  }
}

export default Project
