import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  contact: [],
  desc: '',
  name: '',
  prof: '',
  title: '',
  edit: 'editCV',
  soc: []
  
}

export const cvSlise = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    setContact: (state, action) => {
      state.contact = action.payload
    },
    setDesc: (state, action) => {
      state.desc = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
      state.title = action.payload
    },
    setProf: (state, action) => {
      state.prof = action.payload
    },
    setSoc: (state, action) => {
      state.soc = action.payload
    }
  }
})

export const {setContact} = cvSlise.actions
export const {setDesc} = cvSlise.actions
export const {setName} = cvSlise.actions
export const {setProf} = cvSlise.actions
export const {setTitle} = cvSlise.actions
export const {setSoc} = cvSlise.actions
export default cvSlise.reducer