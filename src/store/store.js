import { configureStore } from '@reduxjs/toolkit'
import headerSlice from './slices/headerSlice'
import footerSlice from './slices/footerSlice'
import authSlice from './slices/authSlice'
import breadcrumbSlice from './slices/breadcrumbSlice'

export const store = configureStore({
  reducer: {
    header: headerSlice,
    breadcrumb: breadcrumbSlice,
    footer: footerSlice,
    auth: authSlice,
  },
})
