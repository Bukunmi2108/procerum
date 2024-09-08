import React from 'react'
import logo from '../assets/logoW.svg'

const Logo = (props) => {
  return (
    <img src={logo} alt="Procerum's Logo" className={props.class}/>
  )
}

export default Logo