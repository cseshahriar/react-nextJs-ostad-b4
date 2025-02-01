import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

    <NavLink to="index.html" className="logo d-flex align-items-center">
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1 className="sitename">Md. Shahriar Hosen</h1>
    </NavLink>

    <nav id="navmenu" className="navmenu">
        <ul>
        <li><NavLink to="/" className="active">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li className="dropdown"><NavLink to="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></NavLink>
            <ul>
            <li><NavLink to="#">Dropdown 1</NavLink></li>
            {/* <li className="dropdown"><NavLink to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></NavLink>
                <ul>
                <li><NavLink to="#">Deep Dropdown 1</NavLink></li>
                <li><NavLink to="#">Deep Dropdown 2</NavLink></li>
                <li><NavLink to="#">Deep Dropdown 3</NavLink></li>
                <li><NavLink to="#">Deep Dropdown 4</NavLink></li>
                <li><NavLink to="#">Deep Dropdown 5</NavLink></li>
                </ul>
            </li> */}
            <li><NavLink to="#">Dropdown 2</NavLink></li>
            <li><NavLink to="#">Dropdown 3</NavLink></li>
            <li><NavLink to="#">Dropdown 4</NavLink></li>
            </ul>
        </li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

    </div>
</header>
  )
}

export default Header