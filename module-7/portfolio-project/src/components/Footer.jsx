import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className="footer accent-background">

    <div className="container">
      <div className="copyright text-center ">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">DevFolio</strong> <span>All Rights Reserved</span></p>
      </div>
      <div className="social-links d-flex justify-content-center">
        <a href=""><i className="bi bi-twitter-x"></i></a>
        <a href=""><i className="bi bi-facebook"></i></a>
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-linkedin"></i></a>
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer