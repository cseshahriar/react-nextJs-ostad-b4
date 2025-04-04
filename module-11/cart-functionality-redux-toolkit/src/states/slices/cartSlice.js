import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // action function
    addToCart: (state, action) => {
        // check the product is exists
        const existingProduct = state.items.findIndex((item) => item.id === action.payload.id)
        if(existingProduct === -1) {
            state.items.push({...action.payload, quantity: 1})
        } else {
            state.items[existingProduct].quantity += 1 // increment if exists
        }

        // increase the total price
        state.totalPrice += action.payload.price
    },
    removeFromCart: (state, action) => {
        const existingProduct = state.items.findIndex((item) => item.id === action.payload.id)
        if(existingProduct !== -1) {
            state.totalPrice -= state.items[existingProduct].price * state.items[existingProduct].quantity
            state.items.splice(existingProduct, 1)
        }
    },
    increaseQuantity: (state, action) => {
        const existingProduct = state.items.findIndex((item) => item.id === action.payload.id)
        if(existingProduct !== -1) {
            state.items[existingProduct].quantity += 1
            state.totalPrice += state.items[existingProduct].price
        }
    },
    decreaseQuantity: (state, action) => {
        const existingProduct = state.items.findIndex((item) => item.id === action.payload.id)
        if(existingProduct !== -1) {
            state.items[existingProduct].quantity -= 1
            state.totalPrice -= state.items[existingProduct].price
            if(state.items[existingProduct].quantity === 0) {
                state.items.splice(existingProduct, 1)
            }
        }
    },
  }
})
// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer