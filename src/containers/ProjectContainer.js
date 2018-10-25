import React, { Component } from 'react'
import { animated, Parallax } from 'react-spring'
import Project from '../components/Project'
import { allProjects } from '../projects'
import v4 from 'uuid'

class ProjectContainer extends Component {
  constructor() {
    super()

    this.parallax = null
    this.setParallax = ref => { this.parallax = ref }

    this.state = {
      active: 0
    }
  }

  renderProjects = () => {
    return allProjects.map( (project, idx) =>
      <Project key={ v4() } { ...project } offset={ idx } last={ idx === allProjects.length - 1 } />
    )
  }

  handleClick = (idx) => {
    if (idx < 0) {
      idx = 0
    } else if (idx > (allProjects.length - 1) ) {
      idx = allProjects.length - 1
    }

    this.setState({
      active: idx
    })

    this.parallax.scrollTo(idx)
  }

  render () {
    return (
      <animated.div className='subRoute' style={{ ...this.props.style }}>
        <div className='mainRouteItem'>
          <div className='arrow top'>
            <a>
              <h1 className='large' onClick={ () => this.handleClick(this.state.active - 1) }>
                {
                  this.state.active > 0
                  &&
                  allProjects[this.state.active - 1].name
                }
              </h1>
            </a>
          </div>

          <Parallax scrolling={ false } ref={ this.setParallax } pages={ allProjects.length }>
            <div className='container'>
              { this.renderProjects() }
            </div>
          </Parallax>

          <div className='arrow bottom'>
            <a>
              <h1 className='large' onClick={ () => this.handleClick(this.state.active + 1) }>
                {
                  this.state.active < (allProjects.length - 1)
                  &&
                  allProjects[this.state.active + 1].name
                }
              </h1>
            </a>
          </div>
        </div>
      </animated.div>
    )
  }
}

export default ProjectContainer
