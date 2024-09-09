import React from 'react'
import {Navbar, Hero, Scroll, Guarantee, Product, Portfolio, Form, Footer} from '../containers'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Scroll />
        <Guarantee />
        <Product />
        <Portfolio />
        <Form />
        <Footer />
    </div>
  )
}

export default Home