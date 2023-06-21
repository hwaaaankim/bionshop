import { createSlice } from '@reduxjs/toolkit'

const footer = {
  hidden: false,
}

export const footerSlice = createSlice({
  name: 'footer',
  initialState: footer,
  reducers: {
    toggleVisibility: (footer, { payload }) => {
      footer.hidden = payload.hidden
    },
  },
})

export const { toggleVisibility } = footerSlice.actions

export default footerSlice.reducer
