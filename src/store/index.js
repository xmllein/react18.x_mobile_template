import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter'

// 调用方法
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store
