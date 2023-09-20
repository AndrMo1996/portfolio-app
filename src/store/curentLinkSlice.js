import { createSlice } from '@reduxjs/toolkit'

export const curentLinkSlice = createSlice({
  name: 'curentLink',
  initialState: {
    value: 'home',
  },
  reducers: {
    setCurrentLink: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setCurrentLink } = curentLinkSlice.actions

export default curentLinkSlice.reducer