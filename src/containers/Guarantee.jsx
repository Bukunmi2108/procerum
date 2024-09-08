import React from 'react'
import dash from '../assets/dash.png'
import {Btn} from '../components'

const Guarantee = () => {
  return (
    <div className="bg-primary px-6 py-12">
      <div className='flex flex-row gap-4'>
        <img className='md:flex hidden w-96 h-auto' src={dash} alt='Dashboard Image'/>
        <div className='flex flex-1 flex-col text-white font-poppins gap-8'>
          <h2 className='font-poppins text-4xl'>
            Get more Cases, Completely Organically
          </h2>
          <p className='leading-loose'>
            We  believe in strategic positioning. Firms and lawyers do not need to spend much money on Ads when they can do better with an impressive website and a great content system.
            <br/>
            If you don’t see results using our process, you can get your money back.
          </p>
          <Btn 
            classes = 'bg-white p-4 font-poppins text-primary text-lg font-semibold w-fit'
            label = "Let's get started"
          />
        </div>
      </div>
    </div>
  )
}

export default Guarantee