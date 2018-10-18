import React from 'react'
import { ParallaxLayer } from 'react-spring'

const Project = (props) => {
  return (
    <ParallaxLayer offset={ props.offset } speed={0.2}>
      <div className='container-item'>
        <div style={{height: '400px', border: '5px solid white'}}>
          <h2>{ props.name }</h2>
          <img src={ props.image ?
            props.image
            :
            'https://www.charterres.com/wp-content/uploads/sites/5382/2018/01/Image-coming-soon.png'
          } alt={ `${props.name} preview` } />
        </div>

        
      </div>
    </ParallaxLayer>
  )
}

export default Project
