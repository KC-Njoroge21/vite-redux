import React from 'react'

const Product = (props) => {
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
        <button className='bg-black text-white p-2 rounded-lg font-semibold'>Add to Cart</button>
      </div>

    </div>
  )
}

export default Product