import { configureStore } from '@reduxjs/toolkit'

import headingReducer from './headings/headingSlice'

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      heading: headingReducer,
    }
  })

  store.subscribe(() => {
    console.log(store.getState())
  })

  return store
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']