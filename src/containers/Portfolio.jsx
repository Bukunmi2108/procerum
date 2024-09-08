import React from 'react'
import inn from '../assets/inn.png'
import portalimg from '../assets/por.png'
import toplaw from '../assets/toplaw.png'


const Portfolio = () => {
  return (
    <div className='px-4 py-8 md:p-12 bg-primary font-poppins text-white flex flex-col gap-12 w-full overflow-x-hidden items-center justify-center'>
        <h2 className='text-4xl font-semibold text-center'>Our Projects</h2>

        <div className='flex items-center justify-center flex-col md:flex-row gap-8'>
            <div className='flex-1 relative rounded-md group'>
                <img alt='Portfolio' src={portalimg} className='w-fit h-fit object-cover rounded-md'/>
                <div className='hidden group-hover:flex flex-col p-8 absolute bg-purple-950 w-full h-full top-0 left-0 items-center justify-center opacity-70 transition-all'>
                    <p className='text-center shadow-lg'>Portal Law Project is the redesign and development of a law firms website. Check out the demo below</p>
                    <a href='https://portalaw.vercel.app/' className='hover:text-orange-400 underline p-4'>View Project</a>
                </div>
            </div>
            <div className='flex-1 relative rounded-md group'>
                <img alt='Portfolio' src={inn} className='w-fit h-fit object-cover rounded-md'/>
                <div className='hidden group-hover:flex flex-col p-8 absolute bg-purple-950 w-full h-full top-0 left-0 items-center justify-center opacity-70 transition-all'>
                    <p className='text-center shadow-lg'>Innovate Law Project is the design and development of a law firm's website. Check out the demo below</p>
                    <a href='https://innovatelawfirm.vercel.app/' className='hover:text-orange-400 underline p-4'>View Project</a>
                </div>
            </div>
            <div className='flex-1 relative rounded-md group'>
                <img alt='Portfolio' src={toplaw} className='w-fit h-fit object-cover rounded-md'/>
                <div className='hidden group-hover:flex flex-col p-8 absolute bg-purple-950 w-full h-full top-0 left-0 items-center justify-center opacity-70 transition-all'>
                    <p className='text-center shadow-lg'>Top Law Project is the design and development of a law firm's website. Check out the demo below</p>
                    <a href='https://bukunmi2108.github.io/topfirm/'
                    className='hover:text-orange-400 underline p-4'>View Project</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio