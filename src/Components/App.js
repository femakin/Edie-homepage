import React from 'react'
import Design from './Pages/Design'
import Footer from './Pages/Footer'
import Hero from './Pages/Hero'
import Navbar from './Pages/Navbar'
import Services from './Pages/Services'
import Team from './Pages/Team'
import Testimonial from './Pages/Testimonial'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Design/>
      <Team/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
