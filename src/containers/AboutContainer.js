import React from 'react'
import { animated } from 'react-spring'
import { FaAngleDown } from 'react-icons/fa'
import Slider from 'react-slick'
import About from '../components/About'
import Resume from '../components/Resume'

const settings = { dots: true }

const AboutContainer = (props) => {
  return (
    <animated.div className='mainRoute bg' style={{ ...props.style }}>
      <div className='mainRouteItem layer'>
        {/*<Slider {...settings}>*/}
          <About />
          {/*<Resume />*/}
        {/*</Slider>*/}


        <FaAngleDown size={ 50 } onClick={ () => props.history.push('/projects') } />

      </div>
    </animated.div>
  )
}

export default AboutContainer
