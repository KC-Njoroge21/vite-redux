import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'

const Cart = () => {

  const itemList = useSelector(state => state.cart.itemList)

  const cartItems = itemList.map((item, index) => {
    return (
      <CartProduct item={item} key={index} />
    )
  })

  const sumTotal = itemList.reduce((acc, item) => {
    return acc + item.totalPrice

  }, 0)

  return (
    <div>
      <h2 className='text-center text-3xl font-semibold'>
        Your Cart
      </h2>
      {itemList.length <= 0 ? <div className='flex justify-center text-2xl text-gray-500 font-semibold mt-5'>You cart is empty!</div> : <div className='flex flex-col gap-4'>{cartItems}</div>}
      <div className='p-6 flex justify-end text-lg font-semibold'>
        <p className='bg-gray-300 p-2'>Total Amount: {sumTotal}$</p>
      </div>
    </div>
  )
}

export default Cart