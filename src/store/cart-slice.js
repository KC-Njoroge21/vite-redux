import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showCart: false
  },
  reducers: {
    addToCart (state, action) {
      const newItem = action.payload

      //Check if Item is already in the cart
      const existingItem = state.itemList.find((item) => {
        return (
          item.id === newItem.id
        )
      })

      if (existingItem) {
        
          existingItem.quantity++,
          existingItem.totalPrice += newItem.price
        
      } 
      else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name
        })
      }
    },
    /* removeFromCart (state, action) {

    },
    clearCart (state, action) {

    }, */
    setShowCart (state) {
      state.showCart = true
    }

  }

})

export const cartActions = cartSlice.actions
export default cartSlice