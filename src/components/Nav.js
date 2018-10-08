import React, { Fragment } from 'react'

const Nav = (props) => {
  return (
    <Fragment>
      <a onClick={ () => props.scroll(0) }>{ ':)' }</a>
      &nbsp; | &nbsp;
      <a onClick={ () => props.scroll(1) }>About</a>
      &nbsp; | &nbsp;
      <a onClick={ () => props.scroll(2) }>Portfolio</a>
    </Fragment>
  )
}

export default Nav
