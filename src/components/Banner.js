import React, { Fragment } from 'react'
import { Parallax } from 'react-scroll-parallax'

const copy = 'HELLO'.split('');

const Banner = () => {
  return (
    <Fragment>
      <div className='banner-container'>
        <Parallax
          offsetYMin={'-20%'}
          offsetYMax={'20%'}
          slowerScrollRate
        >
          <div
            className='banner-image'
            style={{
              backgroundColor: '#DECEEA'
            }}
          />
        </Parallax>

        <div className='banner-children'>
          <h1>Hello!</h1>
        </div>
      </div>

      <div
        className='root-style banner-image'
        style={{
          backgroundColor: '#DECEEA'
        }}
      >
          <span className='copy h1'>
              {copy.map((letter, i) => (
                  <Parallax
                      key={`copy-${i}`}
                      offsetXMax={100 * (i - 3)}
                      className='letter'
                  >
                      {letter}
                  </Parallax>
              ))}
          </span>
      </div>

      <div className='banner-container'>
        <Parallax
          offsetYMin={'-20%'}
          offsetYMax={'20%'}
          slowerScrollRate
        >
          <div
            className='banner-image'
            style={{
              backgroundColor: '#DECEEA'
              //backgroundImage: `url(${'http://wowslider.com/sliders/demo-10/data/images/dock.jpg'})`
            }}
          />
        </Parallax>

        <div className='banner-children'>
          <h1>Goodbye.</h1>
        </div>
      </div>
    </Fragment>
  )
}

export default Banner
