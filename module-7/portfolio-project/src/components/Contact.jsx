import React from 'react'

const Contact = () => {
  return (

    <section id="contact" className="contact section">
    <div className="container section-title" data-aos="fade-up">
      <h2>Contact</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div className="container" data-aos="fade-up" data-aos-delay="100">

      <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-5">

          <div className="col-lg-4">
            <div className="info-item d-flex align-items-center">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="info-item d-flex align-items-center">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="info-item d-flex align-items-center">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form action="" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="300">
        <div className="row gy-4">

          <div className="col-md-6">
            <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
          </div>

          <div className="col-md-6 ">
            <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
          </div>

          <div className="col-md-12">
            <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
          </div>

          <div className="col-md-12">
            <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
          </div>

          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>

            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </div>
  </section>
  )
}

export default Contact