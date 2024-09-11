import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProductIds: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log('action', action)
      state.cartProductIds = [action.payload, ...state.cartProductIds]
    },
    removeFromCart: (state, action) => {
      console.log('action', action)
      const indexOfId = state.cartProductIds.indexOf(action.payload)
      state.cartProductIds.splice(indexOfId, 1)
    },
    clearAllItems: (state) => {
      state.cartProductIds = []
    },
  },
})

export default cartSlice
