import React from 'react'
import { ParallaxLayer } from 'react-spring'

const ResumeContainer = (props) => {
  return (
    <ParallaxLayer offset={ 3.5 } speed={ 0.5 }>
      <div className='center container'>
        Resume Container
      </div>
    </ParallaxLayer>
  )
}

export default ResumeContainer
