import React from 'react'
import { animated } from 'react-spring'
// import { FaAngleRight } from 'react-icons/fa'
import Slider from 'react-slick'
import About from '../components/About'
import Resume from '../components/Resume'
import { Link } from 'react-router-dom'

const settings = { dots: true }

const AboutContainer = (props) => {
  return (
    <animated.div className='mainRoute bg' style={{ ...props.style }}>
      <div className='mainRouteItem layer'>
        {/*<Slider {...settings}>*/}
          <About />
          {/*<Resume />*/}
        {/*</Slider>*/}

      {/*<div className='arrow'>*/}
        <Link to='/portfolio'>
          <button className='button'>View my projects.</button>
          { /*<FaAngleRight size={ 50 } />*/ }
        </Link>
      {/*</div>*/}

      </div>
    </animated.div>
  )
}

export default AboutContainer
