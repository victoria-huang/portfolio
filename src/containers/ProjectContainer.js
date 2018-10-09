import React from 'react'
import { ParallaxLayer } from 'react-spring'

const ProjectContainer = (props) => {
  return (
    <ParallaxLayer offset={ 2.5 } speed={ 0.5 }>
      <div className='center container'>
        Project Container
      </div>
    </ParallaxLayer>
  )
}

export default ProjectContainer
