import React from 'react'

const page = async({params}: any) => {
  const { id } = await params;
  return (
    <div>Product id: {id}</div>
  )
}

export default page