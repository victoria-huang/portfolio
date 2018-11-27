import React, { Component } from 'react'
import { animated } from 'react-spring'
import { Parallax } from 'react-spring/dist/addons'
import Project from '../components/Project'
import { allProjects } from '../projects'
import v4 from 'uuid'
import debounce from 'lodash/debounce'
// import throttle from 'lodash/throttle'

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

  handlePageChange = idx => {
    if ( idx < 0 || idx > allProjects.length - 1 ) return    
   
    this.setState({
      active: idx
    }, () => {
      this.parallax.scrollTo(idx)
    })
  }

  debounceWheel = debounce( idx => {
    this.handlePageChange(idx)
  }, 50)

  handleWheel = e => {
    if (e.deltaY > 0) this.debounceWheel(this.state.active + 1)
    if (e.deltaY < 0) this.debounceWheel(this.state.active - 1)
  }

  render () {
    return (
      <animated.div className='subRoute' style={{ ...this.props.style }}>
        <div onWheel={ this.handleWheel } className='mainRouteItem'>
          <div className='arrow top'>
            <a>
              <h1 className='large' onClick={ () => this.handlePageChange(this.state.active - 1) }>
                {
                  this.state.active > 0
                  &&
                  `Previous: ${allProjects[this.state.active - 1].name}`
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
              <h1 className='large' onClick={ () => this.handlePageChange(this.state.active + 1) }>
                {
                  this.state.active < (allProjects.length - 1)
                  &&
                  `Next: ${allProjects[this.state.active + 1].name}`
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
