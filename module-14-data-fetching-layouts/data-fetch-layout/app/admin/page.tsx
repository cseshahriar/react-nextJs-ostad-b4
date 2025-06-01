import Link from 'next/link'
import React from 'react'

import Head from 'next/head';

const page = () => {
  return (
    <>
     <Head>
        <title>Blog| Admin</title>
        <meta name="description" content="Learn more about our company." />
      </Head>
    <div>
        Admin Page
        <Link href="/admin/blog">Blog</Link>
    </div>
    </>
  )
}

export default page