import React from 'react'
import { ParallaxLayer } from 'react-spring'

const ProjectContainer = (props) => {
  return (
    <ParallaxLayer offset={ 2.5 } speed={ 0.5 }>
      Project Container
    </ParallaxLayer>
  )
}

export default ProjectContainer
