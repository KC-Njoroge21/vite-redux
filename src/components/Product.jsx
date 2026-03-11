import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart-slice'

const Product = (props) => {



  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name: props.item.name,
      id: props.item.id,
      price: props.item.price
    }))
  }


  return (
    <div className='shadow-lg p-4 flex flex-col gap-3 '>
      <div className='w-60 h-40 '>
        <img className='w-full h-full object-cover' src={props.item.imgURL} alt="" />
      </div>
      <div>
        <h2 className='font-semibold text-lg'>- {props.item.name}</h2>
        <h2>Price: {props.item.price}$</h2>
      </div>
      <div className='flex justify-center'>
        <button onClick={addToCart} className='bg-black text-white p-2 rounded-lg font-semibold'>Add to Cart</button>
      </div>

    </div>
  )
}

export default Product