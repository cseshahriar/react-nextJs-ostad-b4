import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{padding: "100px", textAlign: "center"}}>404 Not Found. <NavLink to='/'>Home</NavLink></div>
  )
}

export default NotFound