import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
  },
  reducers: {

  }

})

export const cartActions = cartSlice.actions
export default cartSlice