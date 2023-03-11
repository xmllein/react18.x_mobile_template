import React from 'react'
import { useSelector } from 'react-redux'
export default function Shop() {
  // 获取counter的值
  const counter = useSelector((state) => state.counter)
  return (
    <div>
      <h1>Shop</h1>
      <h2>Counter: {counter.num}</h2>
    </div>
  )
}
