import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const sidebarItems = [
    {id: 1, name: 'Home', url: '/'},
    {id: 2, name: 'About', url: '/about'},
    {id: 3, name: 'Contact', url: '/contact'},
  ];

  return (
    <aside style={{
      width: '200px',
      background: "#f1f1f0",
      minHeight: "90vh",
      padding: '10px'
    }}>
      <nav>
        <ul style={{listStyle: 'none', padding: '0px'}}>
          { sidebarItems.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar