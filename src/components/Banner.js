import React from 'react'
import { ParallaxLayer, Trail, config } from 'react-spring'

const name = "Designer Developer Pharmacist".split(' ')

const Banner = (props) => {
  return (
    <ParallaxLayer offset={ 0.4 } speed={ 0.5 }>
      <div className='center container'>
        <hr />
        <h1 style={{ color: '#FFFFFF' }}>Victoria Huang</h1>
        <hr />
        <Trail
          keys={name}
          from={{ opacity: 0, transform: 'translate3d(0px,0,0)' }}
          to={{ opacity: 1, transform: 'translate3d(5px,0,0)' }}
          config={ config.molasses }
          >
          { name.map(letter => props => <div style={props}><p style={{ color: '#FFFFFF', fontSize: '1.3em' }}>{ letter }</p></div>) }
        </Trail>
      </div>
    </ParallaxLayer>
  )
}

export default Banner
