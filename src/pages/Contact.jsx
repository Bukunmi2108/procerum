import React from 'react'
import {Navbar, Footer} from '../containers'
import {Form} from '../containers'

const Contact = () => {
  const handleSMSClick = () => {
    const recipient = '+2349137099774'
    const message = 'I would to reach out'

    const smsUrl = `sms:${recipient}?body=${encodeURIComponent(message)}`
    window.location.href = smsUrl
  }

  const handleTELClick = () => {
    const phonenumber = '+2349137099774'

    const telUrl = `tel:${phonenumber}`
    window.location.href = telUrl
  }

  return (
    <div>
        <Navbar />
        <div className='flex flex-col md:flex-row py-12 px-4 md:px-12 font-poppins items-center justify-center md:items-start gap-8'>
            <div className='flex flex-col gap-2 justify-center pt-12'>
                <h1 className='text-4xl text-primary font-semibold'>Contact Us Today</h1>
                <div className='flex flex-row gap-2'>
                    <p onClick={handleSMSClick} className='cursor-pointer p-4 border-purple-500 border-2 w-fit hover:text-white hover:bg-purple-500 rounded'>Click to sms</p>
                    <p onClick={handleTELClick} className='cursor-pointer p-4 border-purple-500 border-2 w-fit hover:text-white hover:bg-purple-500 rounded'>Click to call</p>
                </div>
                <p>Feel free to send us a message</p>
            </div>
            <Form />
        </div>
        <Footer />
    </div>
  )
}

export default Contact