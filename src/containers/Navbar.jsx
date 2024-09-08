import React from 'react'
import {Logo} from '../components'
import { Btn } from '../components'
import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  function handleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='bg-primary w-full h-18 flex items-center justify-center font-poppins px-8'>
      <div className='flex justify-between w-full md:flex-row flex-col md:items-center items-start'>
        <div className='flex items-end py-6'>
          <Logo class = 'w-6 h-auto'/>
          <h3 className='text-white text-xl font-semibold font-poppins'>rocerum</h3>
        </div>
        <ul className='hidden text-white md:text-xs text-base md:flex '>
          <li className='py-4 md:p-4'>Our Products</li>
          <li className='py-4 md:p-4'>Portfolio</li>
          <li className='py-4 md:p-4'>Our Team</li>
          <li className='py-4 md:p-4'>What we are building</li>
          <li className='py-4 md:p-4 bg-white text-primary font-semibold md:ml-8'>Contact us</li>
        </ul>
        {menuOpen && <ul className='text-white md:text-xs text-base md:flex '>
          <li className='py-4 md:p-4'>Our Products</li>
          <li className='py-4 md:p-4'>Portfolio</li>
          <li className='py-4 md:p-4'>Our Team</li>
          <li className='py-4 md:p-4'>What we are building</li>
          <li className='py-4 md:p-4 bg-white text-primary font-semibold text-center'>Contact us</li>
        </ul>}


        {!menuOpen && <RiMenuLine 
          className='h-auto w-10 text-white absolute top-5 right-4 md:hidden' 
          onClick={handleMenu}
        />}
        {menuOpen && <IoMdClose 
          className='h-auto w-10 text-white absolute top-5 right-4 md:hidden'
          onClick={handleMenu}
        />}

      </div>
    </nav>
  )
}

export default Navbar