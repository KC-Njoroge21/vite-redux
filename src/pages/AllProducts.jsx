import React from 'react'
import DUMMY_PRODUCTS from '../components/ItemsData'
import Product from '../components/Product'

const AllProducts = () => {
  const allItems = DUMMY_PRODUCTS.map((item, index) => {
    return (
      <Product key={index} item={item} />
    )
  })

  return (
    <div className='flex flex-wrap gap-5 justify-center'>{allItems}</div>
  )
}

export default AllProducts