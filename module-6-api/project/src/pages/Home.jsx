import React from 'react'
import StopWatch from '../components/StopWatch'

import ProductList from '../components/ProductList'

const sampleProducts = [
  {id:1, name: 'I phone1', price: 100001},
  {id:2, name: 'I phone2', price: 100002},
  {id:3, name: 'I phone3', price: 100003},
  {id:4, name: 'I phone4', price: 100004},
  {id:5, name: 'I phone5', price: 100005},
]

const Home = () => {
  return (
    <div>
      {/* <StopWatch /> */}

      {/** usememo and call back  */}
      <ProductList products={sampleProducts} />
    </div>
  )
}

export default Home