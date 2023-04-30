import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  page: 'Services'
}

export const pageSlise = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    }
  }
})

export const {setPage} = pageSlise.actions
export default pageSlise.reducer