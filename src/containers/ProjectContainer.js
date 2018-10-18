import React, { Component } from 'react'
import { animated, Parallax } from 'react-spring'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import Slider from 'react-slick'
import Project from '../components/Project'
import { allProjects } from '../projects'
import v4 from 'uuid'

// const settings = {
//       centerMode: true,
//       infinite: true,
//       centerPadding: '60px',
//       slidesToShow: 1,
//       speed: 500,
//       swipeToSlide: true,
//       dots: true,
//     }

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
      <Project key={ v4() } { ...project } offset={ idx }/>
    )
  }

  handleClick = (idx) => {
    this.setState({
      active: idx
    })
    this.parallax.scrollTo(idx)
  }

  renderNavDots = () => {
    return allProjects.map( (project, idx) =>
      <span
        key={ v4() }
        onClick = { () => this.handleClick(idx) }
      >
        <img src='assets/dot.png' className='navDot' alt='navigation dot' width={ this.state.active === idx ? '15px' : '10px' } height={ this.state.active === idx ? '15px' : '10px' } />
      </span>
    )
  }

  render () {
    return (
      <animated.div className='subRoute' style={{ ...this.props.style, background: `#333333` }}>
        <div className='mainRouteItem'>
          <div className='arrow top'>
            <Link to='/about'><FaAngleUp size={ 50 } /></Link>
          </div>
          {/*<Slider {...settings}>*/}

          <Parallax horizontal ref={ this.setParallax } pages={ allProjects.length }>
            <div className='container'>
              <div className='column right' />
              { this.renderProjects() }
            </div>
          </Parallax>

          <div className='navDots'>
            { this.renderNavDots() }
          </div>

          {/*</Slider>*/}

          <div className='arrow bottom'>
            <Link to='/'><FaAngleDown size={ 50 } /></Link>
          </div>
        </div>
      </animated.div>
    )
  }
}

export default ProjectContainer
