import React from 'react'
import Skills from './Skills'

const About = () => {
  return (
    <section id="about" className="about section">

    <div className="container" data-aos="fade-up" data-aos-delay="100">

      <div className="row gy-4">
        <div className="col-md-6">

          <div className="row justify-content-between gy-4">
            <div className="col-lg-5">
              <img src="../src/assets/img/profile-img.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-7 about-info">
              <p><strong>Name: </strong> <span>Morgan Freeman</span></p>
              <p><strong>Profile: </strong> <span>full stack developer</span></p>
              <p><strong>Email: </strong> <span>contact@example.com</span></p>
              <p><strong>Phone: </strong> <span>(617) 557-0089</span></p>
            </div>
          </div>

         <Skills/>
        </div>

        <div className="col-md-6">
          <div className="about-me">
            <h4>About me</h4>
            <p>
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor
              at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
              porttitor accumsan tincidunt.
            </p>
            <p>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
              porttitor volutpat. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
            </p>
            <p>
              Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Nulla porttitor accumsan
              tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
          </div>
        </div>
      </div>

    </div>

  </section>
  )
}

export default About