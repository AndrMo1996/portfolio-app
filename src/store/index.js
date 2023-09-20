import { configureStore } from '@reduxjs/toolkit'

import currentLinkReducer from './curentLinkSlice'

export default configureStore({
  reducer: {
    currentLink: currentLinkReducer,
  },
})