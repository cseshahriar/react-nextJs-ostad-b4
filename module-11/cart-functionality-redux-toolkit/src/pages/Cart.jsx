import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../states/slices/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const cartState = useSelector((state) => state.cart)

    return (
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                  <th  class="px-6 py-3">ID</th>
                  <th  class="px-6 py-3">Product</th>
                  <th  class="px-6 py-3">Price</th>
                  <th  class="px-6 py-3">Quantity</th>
                  <th  class="px-6 py-3">Total</th>
                  <th  class="px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody class="text-gray-700 text-sm divide-y divide-gray-200">
            {cartState?.items?.map((item) => (
              <tr class="hover:bg-gray-50 transition" key={item.id}>
                <td class="px-6 py-4">{item.id}</td>
                <td class="px-6 py-4">{item.name}</td>
                <td class="px-6 py-4">{item.price}</td>
                <td class="px-6 py-4">{item.quantity}</td>
                <td class="px-6 py-4">{item.price * item.quantity}</td>
                <td class="px-6 py-4">
                  <button class="text-blue-500 mr-4 text-4xl"  onClick={() => dispatch(decreaseQuantity({ id: item.id }))}>-</button>
                  <button class="text-blue-500 mr-4 text-4xl"  onClick={() => dispatch(increaseQuantity({ id: item.id }))}>+</button>
                  <button class="text-red-500 text-4xl"  onClick={() => dispatch(removeFromCart({ id: item.id }))}>x</button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th class="px-6 py-4" colSpan="3"></th>
              <th class="px-6 py-4">Total Price</th>
              <th class="px-6 py-4">{cartState?.totalPrice}</th>
              <th class="px-6 py-4"></th>
            </tr>
            </tfoot>
          </table>
      </div>
    )
}

export default Cart