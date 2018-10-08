import React, { Fragment } from 'react'

const Nav = (props) => {
  return (
    <Fragment>
      <div onClick={() => props.scroll(1)}>Link 1</div>
    </Fragment>
  )
}

export default Nav
