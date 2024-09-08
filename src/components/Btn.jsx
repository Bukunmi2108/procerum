import React from 'react'


const Btn = ({classes, label}) => {
  return (
    <div className='cursor-pointer bg-white p-4 text-primary font-semibold w-fit text-center transition-all duration-700 hover:bg-purple-300'>
      {label}
    </div>
  )
}

export default Btn