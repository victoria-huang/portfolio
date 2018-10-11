import React from 'react'
import { ParallaxLayer } from 'react-spring'
import Slider from 'react-slick'
import About from '../components/About'
import Resume from '../components/Resume'

const settings = { dots: true }

const AboutContainer = (props) => {
  return (
    <ParallaxLayer offset={ 1 } speed={ -0.1 }>
      <div className='center'>
        <Slider {...settings}>
          <About />
          <Resume />
        </Slider>
      </div>
    </ParallaxLayer>
  )
}

export default AboutContainer
