import {Outlet} from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const MasterLayout = ({ title }) => {
  return (
    <div style={{ minWidth:"100vw" }}>
        <Header appName={title} />
        <div style={{ minWidth:"100vw", display: "flex" }}>
            <Sidebar/>
            <main style={{padding: "12px", marginLeft: '10px'}}>
                <Outlet/>
            </main>
        </div>
        <Footer/>
    </div>
  )
}

export default MasterLayout