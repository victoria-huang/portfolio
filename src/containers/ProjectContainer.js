import React from 'react'
import { animated } from 'react-spring'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Project from '../components/Project'

const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 1,
      speed: 500,
      swipeToSlide: true,
      dots: true,
    }

const ProjectContainer = (props) => {
  return (
    <animated.div className='mainRoute' style={{ ...props.style, background: `#222222` }}>
      <div className='mainRouteItem'>
        <div className='arrow top'>
          <Link to='/about'><FaAngleUp size={ 50 } /></Link>
        </div>
        {/*<Slider {...settings}>*/}
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        {/*</Slider>*/}

        <div className='arrow bottom'>
          <Link to='/'><FaAngleDown size={ 50 } /></Link>
        </div>
      </div>
    </animated.div>
  )
}

export default ProjectContainer
