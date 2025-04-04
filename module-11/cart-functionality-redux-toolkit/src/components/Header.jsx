import React from 'react'
import {NavLink } from 'react-router'
import { FaClosedCaptioning, FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux'

const Header = () => {
  const cartState = useSelector((state) => state.cart)
  console.log('cart', cartState)

  return (
    <div className='flex justify-between items-center p-4'>
      <div className='text-2xl font-bold'>E-commerce</div>
      <div className='flex space-x-4'>
        <NavLink to='/' className='text-blue-500'>Home</NavLink>
        <NavLink to='/cart' className='text-blue-500'>Cart</NavLink>

      </div>

      <div className='flex space-x-4 relative'>
        <NavLink to="/cart">
          <FaShoppingCart className='text-3xl' />
          <span className='absolute top-0 right-0 z-10 bg-amber-400 rounded-full p-[3px]'>
            {cartState?.totalPrice || 0}
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default Header