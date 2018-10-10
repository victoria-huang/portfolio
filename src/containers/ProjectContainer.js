import React from 'react'
import { ParallaxLayer } from 'react-spring'

const ProjectContainer = (props) => {
  return (
    <ParallaxLayer offset={ 2 } speed={ 0.5 }>
      <div className='center'>
        Project Container
      </div>
    </ParallaxLayer>
  )
}

export default ProjectContainer
