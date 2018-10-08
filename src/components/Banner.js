import React from 'react'
import { ParallaxLayer } from 'react-spring'

const Banner = (props) => {
  return (
    <ParallaxLayer offset={ 0.5 } speed={ 0.5 } style={{ backgroundColor: '#243B4A' }}>
      <div className='center container'>
        <h1 style={{ color: '#FFFFFF' }}>Victoria Huang</h1>
      </div>
    </ParallaxLayer>
  )
}

export default Banner
