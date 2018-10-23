import React from 'react'
import { ParallaxLayer } from 'react-spring'

const Project = (props) => {
  return (
    <ParallaxLayer offset={ props.offset } speed={-0.2}>
      <div className='container-item'>
        <div>
          <h1>{ props.name }</h1>
          <img src={ props.image ?
            props.image
            :
            'https://www.charterres.com/wp-content/uploads/sites/5382/2018/01/Image-coming-soon.png'
          } height='400px' width='300px' alt={ `${props.name} preview` } />
        </div>


      </div>
    </ParallaxLayer>
  )
}

export default Project
