import { createSlice } from '@reduxjs/toolkit'

const breadcrumb = {
  hidden: true,
  path: [],
}

export const breadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState: breadcrumb,
  reducers: {
    toggleVisibility: (breadcrumb, { payload }) => {
      breadcrumb.hidden = payload.hidden
    },
    setPath: (breadcrumb, { payload }) => {
      breadcrumb.path = payload.path
    },
  },
})

export const { toggleVisibility, setPath } = breadcrumbSlice.actions

export default breadcrumbSlice.reducer
