import React from 'react'
import {Navbar, Footer} from '../containers'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
        <Navbar />
        <div className="container mx-auto py-8 px-8 text-white bg-gradient-to-diagonal font-poppins w-full">
            <div className='max-w-md'>
                <h1 className="text-4xl font-semibold text-center mb-8">Crafting Websites That Deliver Justice</h1>

                <p className="text-lg  mb-6">
                    "It is easy to build a wordpress website, but it is easy to build a custom website that would rank, attract and convert."
                </p>
                <p className="text-lg  mb-3">
                    We are a specialized web development company dedicated to empowering lawyers and law firms with cutting-edge online solutions. With a deep understanding of the legal industry, we create websites that not only showcase your expertise but also drive results.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Trust and Integrity</li>
                    <li>Client-Centric Approach</li>
                    <li>Technical Excellence</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Our Offerings</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Website Design</li>
                    <li>Website Development</li>
                    <li>SEO Optimization</li>
                    <li>Content Creation</li>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About