import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// 初始值
const count = { num: 0 }
// 创建异步
export const counterAsyncIncrease = createAsyncThunk(
  'counter/increase',
  async (payload) => {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(payload)
      }, 1000)
    })
    return res
  }
)

// 创建切片
const counterSlice = createSlice({
  name: 'context',
  initialState: count,
  reducers: {
    add(state) {
      state.num++
    },
    sub(state) {
      state.num--
    },
    addincrease(state, action) {
      state.num += action.payload
    },
  },
  extraReducers: {
    // 处理异步
    [counterAsyncIncrease.fulfilled]: (state, action) => {
      state.num += action.payload
    },
  },
})
// 导出
export const { add, sub, addincrease } = counterSlice.actions
// 导出
export const counterReducer = counterSlice.reducer
