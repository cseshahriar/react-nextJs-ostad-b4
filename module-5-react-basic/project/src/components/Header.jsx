import React, { useEffect } from 'react'

const Header = ({ appName }) => {
  useEffect(() => {
    console.log('Header only first rendered')
  }, []);

  return (
    <div style={{
      padding: '10px',
      background:'#282c34',
      color: 'white'
    }}>
      {appName}
    </div>
  )
}

export default Header