import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../states/slices/cartSlice'

const Product = ({product}) => {
    const cartState = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }
    console.log(cartState);
    return (
        <div className='border p-4'>
            <img src={product.image} alt={product.name} className='mb-2 w-full h-40 object-cover' />
            <div className='text-lg font-bold'>{product.name}</div>
            <div className='text-sm'>{product.price}</div>
            <button
                onClick={() => handleAddToCart(product)}
                className='bg-blue-500 text-white px-4 py-2 mt-2 rounded cursor-pointer'
            >Add to cart</button>
        </div>
    )
}

export default Product