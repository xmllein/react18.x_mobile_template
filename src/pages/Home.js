import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, addincrease, sub, counterAsyncIncrease } from '../store/counter'
import { Button, Space } from 'antd-mobile'

export default function Home() {
  // 获取counter的值
  const counter = useSelector((state) => state.counter)
  // 获取dispatch
  const dispatch = useDispatch()

  // 增加
  const handleAdd = () => {
    dispatch(add())
  }

  // 减少
  const handleSub = () => {
    dispatch(sub())
  }

  // 自定义增加(同步)
  const handleIncrease = () => {
    dispatch(addincrease(10))
  }

  // 自定增加(异步)
  /*
  const handleAsyncIncrease = () => {
    dispatch(counterAsyncIncrease(10)).then((res) => {
      // 同步处理
      dispatch(addincrease(res.payload))
    })
  }
  */

  const handleAsyncIncrease = () => {
    // 使用 extraReducers 处理异步
    dispatch(counterAsyncIncrease(10))
  }

  return (
    <div>
      <h1>Home</h1>
      <h2>Counter: {counter.num}</h2>
      <Space
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Button color='primary' fill='solid' onClick={handleAdd}>
          +1
        </Button>
        <Button color='primary' fill='solid' onClick={handleSub}>
          -1
        </Button>
        <Button onClick={handleIncrease}> 自定义增加10 </Button>
        <Button onClick={handleAsyncIncrease}> 异步自定义增加10 </Button>
      </Space>
    </div>
  )
}
