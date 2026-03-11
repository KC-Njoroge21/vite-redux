import React from 'react'
import DUMMY_PRODUCTS from '../components/ItemsData'
import Product from '../components/Product'
import Header from '../components/Header'

const AllProducts = () => {
  const allItems = DUMMY_PRODUCTS.map((item, index) => {
    return (
      <Product key={index} item={item} />
    )
  })

  return (
    <div>
      <Header />
      <div className='flex flex-wrap gap-5 justify-center'>
      
      {allItems}</div>
    </div>
  )
}

export default AllProducts