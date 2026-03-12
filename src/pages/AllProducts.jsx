import React from 'react'
import DUMMY_PRODUCTS from '../components/ItemsData'
import Product from '../components/Product'
import Header from '../components/Header'
import Cart from './Cart'
import { useSelector } from 'react-redux'

const AllProducts = () => {
  const allItems = DUMMY_PRODUCTS.map((item, index) => {
    return (
      <Product key={index} item={item} />
    )
  })

  const showCart = useSelector(state => state.cart.showCart)

  return (
    <div className='flex flex-col gap-4'>
      <Header />
      <div className='flex flex-wrap gap-5 justify-center'>
      
      {allItems}</div>
      {showCart && <Cart />}
    </div>
  )
}

export default AllProducts