import React from 'react'
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

const ProjectContainer = (props) => {
  const projects = allProjects.map( (project, idx) =>
    <Project key={ v4() } { ...project } offset={ idx }/>
  )

  return (
    <animated.div className='subRoute' style={{ ...props.style, background: `#222222` }}>
      <div className='mainRouteItem'>
        <div className='arrow top'>
          <Link to='/about'><FaAngleUp size={ 50 } /></Link>
        </div>
        {/*<Slider {...settings}>*/}

        <Parallax horizontal pages={ projects.length }>
          <div className='container'>
              { projects }
          </div>
        </Parallax>

        {/*</Slider>*/}

        <div className='arrow bottom'>
          <Link to='/'><FaAngleDown size={ 50 } /></Link>
        </div>
      </div>
    </animated.div>
  )
}

export default ProjectContainer
