import React, { useEffect } from 'react'

const Footer = () => {

  useEffect(() => {
    console.log('Footer only first rendered')
  }, []);

  return (
    <div style={{
      padding: '10px',
      background:'#282c34',
      color: 'white'
    }}>Footer</div>
  )
}

export default Footer