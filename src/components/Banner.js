import React from 'react'
import { ParallaxLayer } from 'react-spring'

const Banner = (props) => {
  return (
    <ParallaxLayer offset={ 0.5 } speed={ 0.5 }>
      <div className='ui container center aligned header'>
        <h1>Hi, I'm Victoria.</h1>
      </div>
    </ParallaxLayer>
  )
}

export default Banner
