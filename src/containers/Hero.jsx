import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Btn } from '../components'
import img1 from '../assets/m1.png' 
import img2 from '../assets/m2.png' 
import img3 from '../assets/m3.png' 


const Hero = () => {
  const [currentImg, setCurrentImg] = useState(img1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImg((prevImg) => {
        switch (prevImg) {
          case img1:
            return img2;
          case img2:
            return img3;
          default:
            return img1;
        }
      })
    }, 5000)

    return () => clearInterval(intervalId)
  }, [img1, img2])

  return (
    <div className='bg-gradient-to-diagonal w-full py-16 font-poppins overflow-x-hidden'>
      <div className='flex flex-col md:flex-row w-full items-center justify-start gap-8 md:gap-4'>
        <div className='w-full gap-6 md:gap-12 flex flex-col text-white pl-8'>
          <h1 className='text-white text-5xl md:text-7xl font-semibold md:leading-[60px] leading-[48px] md:w-[32rem]'>
            Providing Digital
            Solutions 
            for Lawyers
          </h1>
          <p classname="text-white ">
            We craft websites that attract more clients, reinforces your brand identity and acts as an online sales person.
          </p>
          <Btn 
            classes = 'bg-white py-4 px-6 w-fit text-xl font-semibold text-primary'
            label="Let's get started"
          />
        </div>

        <img src={currentImg} className='' alt='Portfolio'/>

      </div>
    </div>
  )
}

export default Hero