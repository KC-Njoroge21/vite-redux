import React from 'react'
import Login from './pages/Login'
import { useSelector } from 'react-redux'
import Product from './pages/Product'

const App = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  console.log(isLoggedIn)

  return (
    <div>
      {isLoggedIn ? <Product /> : <Login /> }
    </div>
  )
}

export default App