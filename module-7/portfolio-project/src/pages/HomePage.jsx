import React from 'react'
import Layout from './layout/Layout'

import Hero from '../components/Hero'
import About from '../components/About'
import Resume from '../components/Resume'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <main className="main">
      <Hero/>
      <About />
      <Resume/>
      <Services/>
      <Stats />
      <Portfolio />
      <Pricing/>
      <Faq/>
      <Testimonials/>
      <Contact/>
  </main>
  )
}

export default HomePage