import React from 'react'

const page = async({params}: any) => {
  const { slug } = await params;
  return (
    <div>Product slug: {slug}</div>
  )
}

export default page