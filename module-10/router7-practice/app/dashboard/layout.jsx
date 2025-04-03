import React from 'react'
import { Outlet } from 'react-router'

const layout = () => {
  return (
    <div className='w-full flex h-screen'>
        <div className='sidebar bg-amber-500 px-7 py-3'>
            <h3>Sidebar</h3>
            <ul className=''>
                <li>
                    <a href='/dashboard/brands'>Brands</a>
                </li>
                <li>
                    <a href='/dashboard/brands/1'>Brand/1</a>
                </li>
                <li>
                    <a href='/dashboard/products'>Products</a>
                </li>
                <li>
                    <a href='/dashboard/categories'>Categories</a>
                </li>
            </ul>
        </div>

        <div className='content grow px-3 py-3 bg-amber-100'>
            <Outlet/>
        </div>
    </div>
  )
}

export default layout