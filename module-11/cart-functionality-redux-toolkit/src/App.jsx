import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Outlet } from 'react-router'

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header'

const BaseLayout = () => {
  return (
    <div className='mx-auto max-w-screen-lg'>
        <Header/>
        <Outlet/>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
