import React from 'react'
import {ProductC} from '../components'
import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiSeoLine } from "react-icons/ri";




const Product = () => {
  return (
    <div className='p-8 bg-blue-50 font-poppins text-primary flex flex-col gap-12 w-full overflow-x-hidden'>
        <h2 className='text-4xl font-semibold text-center'>Our Products</h2>

        <div className='flex items-center justify-center flex-col md:flex-row gap-8'>
            <ProductC 
             icon={<FaCode className='w-16 h-auto'/>
             }
             label='Web Design'
             text='See our we create converting websites for lawyers and law firms.'
              desc={
              <ul className='list-disc w-full'>
                <li>Custom website design</li>
                <li>Responsive design</li>
                <li>Content management system</li>
                <li>SEO optimization</li>
              </ul>
              }
            />
            <ProductC 
             icon={<MdOutlineDesignServices className='w-16 h-auto'/>
             }
             label='Branding'
             text='Lawyers need a memorable identity, check out how we make them.'
            desc={
                <ul className='list-disc w-full'>
                  <li>Logo design</li>
                  <li>Social media design</li>
                  <li>Brand Identity</li>
                  <li>Presentation Design</li>
                </ul>
                }
            />
            <ProductC 
             icon={<RiSeoLine className='w-16 h-auto'/>
             }
             label='SEO'
             text='Do you want clients to find you easily? See how we optimse Google Business Profile.'
            desc={
                <ul className='list-disc w-full'>
                  <li>Optimizing Google business profile</li>
                  <li>Content Marketing & SMMA</li>
                  <li>Brand Positioning</li>
                </ul>
                }
            />
        </div>
    </div>
  )
}

export default Product