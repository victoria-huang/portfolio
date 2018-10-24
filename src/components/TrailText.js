import React, { Component, Fragment } from 'react'
import { Trail, config } from 'react-spring'

class TrailText extends Component {
  // constructor() {
  //   super()
  //
  //   this.__isMounted = true;
  // }

  // componentWillUnmount() {
  //   this.__isMounted = false;
  // }

  render() {
    const name = "developer designer pharmacist".split(' ')
    return (
      <Fragment>
      {/* this.__isMounted && */}
          <div className='trail'>
            <Trail
              keys={ name }
              from={{ opacity: 0, transform: 'translate3d(0px,0,0)' }}
              to={{ opacity: 1, transform: 'translate3d(5px,0,0)' }}
              config={ config.molasses }
              >
              { name.map(word => props => <div style={props}><p className='subheader'>{ word }</p></div>) }
            </Trail>
          </div>
      {/* } */}
      </Fragment>
    )
  }
}

export default TrailText
