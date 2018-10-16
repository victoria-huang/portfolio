import React from 'react'
import { animated } from 'react-spring'
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
    <animated.div className='mainRoute' style={{ ...props.style, background: `#000000` }}>
      <div className='mainRouteItem'>
        {/*<Slider {...settings}>*/}
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        {/*</Slider>*/}
      </div>
    </animated.div>
  )
}

export default ProjectContainer
