'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Menu = () => {
  let currentPath = usePathname();

  return (
    <div>
        <h1>{currentPath}</h1>

        <Link replace href={'/'} className={currentPath === '/' ? 'active-list mr-1' : 'pending-list mr-1' }>Home</Link>

        <Link
          replace
          href={
            {
              pathname: '/about',
              query: {
                name: 'Computer',
                price: 100
              }
            }
          }
          className={currentPath === '/about' ? 'active-list mr-1' : 'pending-list mr-1' }>About</Link>

         <Link
            replace
            href={
            {
              pathname: '/contact',
              query: {
                name: 'Computer',
                price: 100
              }
            }
          }
          className={currentPath === '/contact' ? 'active-list mr-1' : 'pending-list mr-1' }>Contact</Link>

        <Link replace href={'/admin'} className={currentPath === '/admin' ? 'active-list mr-1' : 'pending-list mr-1' }>Admin</Link>

        {/**
         prefetch:
         <Link> ট্যাগে prefetch={true} (ডিফল্টভাবে সেট করা থাকে) দিলে:
          Next.js ঐ পেইজের জন্য প্রয়োজনীয় জাভাস্ক্রিপ্ট ফাইল ও ডেটা আগেই ব্যাকগ্রাউন্ডে লোড করে নেয়।
          ফলে যখন ইউজার ক্লিক করে, তখন পেইজ দ্রুত লোড হয়।
          প্রপার্টি	কী হয়
          prefetch={true}	পেইজটি আগেই লোড হয় (ডিফল্ট)
          prefetch={false}	পেইজটি আগেই লোড হয় না

          By default, যখন আপনি Next.js-এ <Link> দিয়ে কোনো পেইজে যান,
          তখন সেটা ব্রাউজারের হিস্টরিতে নতুন এন্ট্রি হিসেবে যোগ হয়। অর্থাৎ, আপনি আগের পেইজে Back বাটন দিয়ে ফিরে যেতে পারেন।
          কিন্তু যদি আপনি replace={true} দেন,
          তাহলে Next.js ওই লিঙ্কে যাওয়ার সময় বর্তমান URL-টা রিপ্লেস করে, নতুন এন্ট্রি না যোগ করে।
        */}

        <Link
          prefetch={false}
          replace={true}
          href={
            {
              pathname: '/admin/products',
              query: {
                name: 'Computer',
                price: 100
              }
            }
          }
          className={currentPath === '/admin/products' ? 'active-list mr-1' : 'pending-list mr-1' }>Products</Link>
    </div>
  )
}

export default Menu