import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">

        <img src="../src/assets/img/hero-img.jpg" alt="" data-aos="fade-in"/>

        <div className="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
          <h2>I am Morgan Freeman</h2>
          <p><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
        </div>
      </section>
  )
}

export default Hero