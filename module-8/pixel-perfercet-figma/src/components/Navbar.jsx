import React from 'react'
import {Link} from 'react-router-dom'
import { FaGear } from "react-icons/fa6";

const Navbar = () => {
  return <section className='h-[100px] flex items-center'>
    <div className='container mx-auto'>
        <div className='grid grid-cols-12 gap-[30px]'>

            <div className='col-span-2'>
                <img src='/assets/logo.svg' alt='' />
            </div>

            <div className='col-span-7 flex items-center'>
              <nav className='navbar'>
                <ul className='nav-links flex gap-[50px]'>
                  <li className='relative'>
                    <Link to="" className="active custom-link text-[18px] font-medium text-[#2196F3]">Services</Link>
                  </li>
                  <li className='relative'>
                    <Link to="" className="custom-link text-[18px] font-medium text-[#6a6a6a] opacity-85">Our Values</Link>
                  </li>
                  <li className='relative'>
                    <Link to="" className="custom-link text-[18px] font-medium text-[#6a6a6a] opacity-85">Case Studies</Link>
                  </li>
                  <li className='relative'>
                    <Link to="" className="custom-link text-[18px] font-medium text-[#6a6a6a] opacity-85">Case Studies</Link>
                  </li>
                  <li className='relative'>
                    <Link to="" className="custom-link text-[18px] font-medium text-[#6a6a6a] opacity-85">Inner Pages</Link>
                  </li>
                  <li className='relative'>
                    <Link to="" className="custom-link text-[18px] font-medium text-[#6a6a6a] opacity-85">Blog</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className='col-span-3 flex items-center justify-end w-full'>
              <div className='flex gap-[30px] items-center'>
                <div>
                  <Link to="#" className="uppercase custom-link text-[18px] font-medium text-[#302F2F]">Login</Link>
                </div>

                <div>
                  <Link to="#"
                    className="bg-[#2196F3] px-[22px] py-[16px] text-[16px] font-medium text-[#fff] rounded-[8px] leading-none uppercase">Register</Link>
                </div>

                <div>
                  <div className='flex gap-[26px] items-center'>
                    <span className='w-[2px] h-[25px] bg-[#6a6a6a]'></span>
                    <FaGear className='text-[#6a6a6a] w-[29px] h-[29px]' />
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </section>
}

export default Navbar