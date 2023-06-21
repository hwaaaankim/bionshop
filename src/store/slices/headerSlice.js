import { createSlice } from '@reduxjs/toolkit'

const header = {
  hidden: false,
}

export const headerSlice = createSlice({
  name: 'header',
  initialState: header,
  reducers: {
    toggleVisibility: (header, { payload }) => {
      header.hidden = payload.hidden
    },
  },
})

export const { toggleVisibility } = headerSlice.actions

export default headerSlice.reducer
