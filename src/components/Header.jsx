import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cart-slice';
import { authActions } from '../store/auth-slice';

const Header = () => {

  const totalQuantity =  useSelector(state => state.cart.totalQuantity)

  const dispatch = useDispatch();

  const setShowCart = () => {
    return (
      dispatch(cartActions.setShowCart())
    )
  }

  const logOut = () => {
    return (
      dispatch(authActions.logout())
    )
  }

  return (
    <div className='flex justify-between p-4 shadow-lg'>
      <h1 className='text-3xl'>Redux Cart</h1>
      <div className='flex gap-6 items-center'>
        <h1 onClick={setShowCart} className=' font-semibold shadow-lg border-2 border-gray-200 cursor-pointer rounded-lg p-2'>Cart Quantity: {totalQuantity} </h1>
        <button onClick={logOut} className='bg-black text-white p-2 rounded-lg font-semibold cursor-pointer'>Log out</button>
      </div>
    </div>
  )
}

export default Header