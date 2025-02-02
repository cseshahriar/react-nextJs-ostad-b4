import React, { useReducer } from 'react'
import StopWatch from '../components/StopWatch'

import ProductList from '../components/ProductList'

const sampleProducts = [
  {id:1, name: 'I phone1', price: 100001},
  {id:2, name: 'I phone2', price: 100002},
  {id:3, name: 'I phone3', price: 100003},
]

const reducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return [...state.filter(item => item !== action.payload)];
    default:
      state
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, sampleProducts);
  return (
    <div>
      {/* <StopWatch /> */}

      {/** usememo and call back  */}
      <ProductList products={state} dispatch={dispatch} />
    </div>
  )
}

export default Home