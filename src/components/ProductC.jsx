import React from 'react'
import { FaAngleDown } from "react-icons/fa";


const ProductC = ({icon, label, text, drop, desc}) => {
  const [dropdown, setDropdown] = React.useState(false)

  const handleOpen = () => {
    setDropdown((prevState) => !prevState)
  }
  return (
    <div onClick={handleOpen} classname='w-full cursor-pointer transition-all duration-700 ease-in-out'>
      <div className='flex-1 flex flex-col items-center justify-center gap-4 p-8 shadow-md bg-white rounded'>
        {icon}
        <h4 className='text-3xl font-poppins text-primary font-semibold text-center'>{label}</h4>
        <span className='text-center text-sm'>
          {text}
        </span>
        <div className='flex flex-row items-center justify-center cursor-pointer'>
          <p className='text-purple-500'>Click to Learn More</p> 
          <FaAngleDown className='text-purple-500' />
        </div>
        {dropdown && desc}
      </div>
    </div>
  )
}

export default ProductC