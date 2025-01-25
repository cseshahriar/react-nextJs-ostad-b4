import React from 'react'

const Course = ({ title }) => {
  const handleClick = () => {
    alert('Course');
  }

  return (
    <div>
      <h1 className="text-[20px]">{title}</h1>
    </div>
  )
}

export default Course