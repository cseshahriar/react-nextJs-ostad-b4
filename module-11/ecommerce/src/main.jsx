import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import AdminLayout from './layout/AdminLayout'
import AuthLayout from './layout/AuthLayout'

// website
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'

// admin
import AdminHome from './pages/admin/AdminHome'

// auth
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Website routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="collection" element={<Collection />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
        </Route>

        {/* Auth routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
