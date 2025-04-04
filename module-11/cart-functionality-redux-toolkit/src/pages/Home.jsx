import React from 'react'
import products from '../data/products'
import Product from '../components/Product'


const Home = () => {
  return (
    <div className='mt-9'>
      <h2>Products</h2>
      <div className='grid grid-cols-4 gap-4 py-5'>
        {
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default Home