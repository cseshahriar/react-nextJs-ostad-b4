import React from 'react'

const Skills = () => {
  return (
    <div className="skills-content skills-animation">

    <h5>Skills</h5>

    <div className="progress">
      <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div className="progress">
      <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div className="progress">
      <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div className="progress">
      <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  </div>
  )
}

export default Skills