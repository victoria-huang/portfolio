import React from 'react'
import { ParallaxLayer } from 'react-spring'
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
    <ParallaxLayer offset={ 2 } speed={ 0.5 }>
      <div className='center'>
        <Slider {...settings}>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </Slider>
      </div>
    </ParallaxLayer>
  )
}

export default ProjectContainer
