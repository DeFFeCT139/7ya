import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  item: ''
}

export const itemSlise = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.item = action.payload
    }
  }
})

export const {setItem} = itemSlise.actions
export default itemSlise.reducer