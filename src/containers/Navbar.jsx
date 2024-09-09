import React from 'react'
import {Logo} from '../components'
import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  function handleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='bg-primary w-full h-18 flex items-center justify-center font-poppins px-8'>
      <div className='flex justify-between w-full md:flex-row flex-col md:items-center items-start'>
        <Link to='/' className='flex items-end py-6'>
          <Logo class = 'w-6 h-auto'/>
          <h3 className='text-white text-xl font-semibold font-poppins'>rocerum</h3>
        </Link>
        <ul className='hidden text-white md:text-xs text-base md:flex '>
          {/* <Link className='py-4 md:p-4'>Our Products</Link>
          <Link className='py-4 md:p-4'>PortfoLio</Link> */}
          <Link to="/about" className='py-4 md:p-4'>About us</Link>
          {/* <Link className='py-4 md:p-4'>What we are building</Link> */}
          <Link to="/contact" className='py-4 md:p-4 bg-white text-primary font-semibold md:ml-8'>Contact us</Link>
        </ul>
        {menuOpen && <ul className='text-white md:text-xs text-base flex flex-col'>
          {/* <Link className='py-4 md:p-4'>Our Products</Link>
          <Link className='py-4 md:p-4'>PortfoLio</Link> */}
          <Link to="/about" className='py-4 md:p-4'>About us</Link>
          {/* <Link className='py-4 md:p-4'>What we are building</Link> */}
          <Link to="/contact" className='p-4 m-2 bg-white text-primary font-semibold text-center'>Contact us</Link>
        </ul>}


        {!menuOpen && <RiMenuLine 
          className='h-auto w-10 text-white absolute top-5 right-4 md:hidden transition-all ease duration-700' 
          onClick={handleMenu}
        />}
        {menuOpen && <IoMdClose 
          className='h-auto w-10 text-white absolute top-5 right-4 md:hidden transition-all ease duration-700'
          onClick={handleMenu}
        />}

      </div>
    </nav>
  )
}

export default Navbar