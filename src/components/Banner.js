import React, { Fragment, Component } from 'react'
import Parallax from 'react-springy-parallax'

class Banner extends Component {
  render() {
    return (
      <Fragment>
      <Parallax.Layer offset={0} speed={0.5}>
        <div className='ui container center aligned header'>
          <h1>Hi, Im Victoria.</h1>
          <a href="https://github.com/victoria-huang" target="_blank" rel="noopener noreferrer">
            <i className="large circular github link icon"></i>
          </a>&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/victoriah92/" target="_blank" rel="noopener noreferrer">
            <i className="large circular linkedin link icon"></i>
          </a>&nbsp;&nbsp;
          <a href="https://medium.com/@victoria.huang" target="_blank" rel="noopener noreferrer">
            <i className="large circular medium link icon"></i>
          </a>&nbsp;&nbsp;
          <a href="https://www.victoriahuang.me" target="_blank" rel="noopener noreferrer">
            <i className="large circular user circle link icon"></i>
          </a>
        </div>
      </Parallax.Layer>
      <Parallax.Layer offset={1} speed={0.5}>
        Hi from page 1
      </Parallax.Layer>
      <Parallax.Layer offset={2} speed={0.5}>
        Hi from page 2
      </Parallax.Layer>
      </Fragment>
    )
  }
}

export default Banner

// const copy = 'HELLO'.split('');
// <Fragment>
//   <div className='banner-container'>
//     <Parallax
//       offsetYMin={'-20%'}
//       offsetYMax={'20%'}
//       slowerScrollRate
//     >
//       <div
//         className='banner-image'
//         style={{
//           backgroundColor: '#DECEEA'
//         }}
//       />
//
//     </Parallax>
//
//     <div className='banner-children'>
//       <h1>Hi, I'm Victoria.</h1>
//     </div>
//   </div>
//
//   <div
//     className='root-style banner-image'
//     style={{
//       backgroundColor: '#DECEEA'
//     }}
//   >
//       <span className='copy h1'>
//           {copy.map((letter, i) => (
//               <Parallax
//                   key={`copy-${i}`}
//                   offsetXMax={100 * (i - 3)}
//                   className='letter'
//               >
//                   {letter}
//               </Parallax>
//           ))}
//       </span>
//   </div>
//
//   <div className='banner-container'>
//     <Parallax
//       offsetYMin={'-20%'}
//       offsetYMax={'20%'}
//       slowerScrollRate
//     >
//       <div
//         className='banner-image'
//         style={{
//           backgroundColor: '#DECEEA'
//           //backgroundImage: `url(${'http://wowslider.com/sliders/demo-10/data/images/dock.jpg'})`
//         }}
//       />
//     </Parallax>
//
//     <div className='banner-children'>
//       <h1>Goodbye.</h1>
//     </div>
//   </div>
// </Fragment>
