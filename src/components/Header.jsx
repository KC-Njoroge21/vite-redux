import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-4 shadow-lg'>
      <h1 className='text-3xl'>Redux Cart</h1>
      <div className='flex gap-6 items-center'>
        <h1 className='text-lg font-semibold'>Cart Quantity: 0 </h1>
        <button className='bg-black text-white p-2 rounded-lg font-semibold cursor-pointer'>Log out</button>
      </div>
    </div>
  )
}

export default Header