import { BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'

import Layout from './pages/layout/Layout'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="/services" element={<ServicePage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
