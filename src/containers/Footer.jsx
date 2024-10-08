import React from 'react'
import {Logo} from '../components'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='bg-gray-800 py-8 px-4 font-poppins text-white w-full flex flex-col items-center justify-center gap-2'>
        <Logo />
        <p className='text-2xl mt-4 font-semibold'>Procerum c. <span>{year}</span></p>
        <p>Copyright Procerum</p>
    </div>
  )
}

export default Footer