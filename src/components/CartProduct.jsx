import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart-slice';

const CartProduct = (props) => {

  const dispatch = useDispatch()


  const incrementCartItem = () => {
    dispatch(cartActions.addToCart({
      id: props.item.id,
      name: props.item.name,
      price: props.item.price
    }))
  }

  const decrementCartItem = () => {
    dispatch(cartActions.removeFromCart(props.item.id))
  }
  
  return (
    <div key={props.item.id} className='flex justify-between p-4 shadow-sm'>
      <h2>{props.item.name}</h2>
      <h2>Price: {props.item.price}</h2>
      <h2>Total Quantity: {props.item.quantity}</h2>
      <h2>Total Price: {props.item.totalPrice}</h2>
      <button onClick={incrementCartItem} className='px-4 py-2 rounded-sm bg-green-500 text-lg font-semibold cursor-pointer'>+</button>
      <button onClick={decrementCartItem} className='px-4 py-2 rounded-sm bg-red-500 text-lg font-semibold cursor-pointer'>-</button>
    </div>
  )
}

export default CartProduct