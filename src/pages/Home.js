import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, addincrease, sub, counterAsyncIncrease } from '../store/counter'
import { Button, Space, Swiper, NoticeBar } from 'antd-mobile'

import styles from './Home.module.css'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div className={styles.content} style={{ background: color }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

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
      <Space direction='vertical' block style={{ marginBottom: '10px' }}>
        <NoticeBar
          content='适用于当前页面内信息的通知，是一种较醒目的页面内通知方式'
          color='alert'
        />
      </Space>
      <Space direction='vertical' block>
        <Swiper
          indicatorProps={{
            color: 'white',
          }}
          defaultIndex={1}
          loop
        >
          {items}
        </Swiper>
      </Space>
      <h1 className={styles.textCenter}>Home</h1>
      <h2 className={styles.textCenter}>Counter: {counter.num}</h2>
      <Space
        direction='vertical'
        block
        style={{ padding: '0 20px', marginBottom: '10px' }}
      >
        <Button
          color='primary'
          shape='default'
          fill='solid'
          block
          size='large'
          onClick={handleAdd}
        >
          增加 1
        </Button>
        <Button
          color='primary'
          shape='default'
          fill='solid'
          block
          size='large'
          onClick={handleSub}
        >
          减少 1
        </Button>
      </Space>
      <Space direction='vertical' block style={{ padding: '0 20px' }}>
        <Button block size='large' onClick={handleIncrease}>
          {' '}
          自定义增加10{' '}
        </Button>
        <Button block size='large' onClick={handleAsyncIncrease}>
          {' '}
          异步自定义增加10{' '}
        </Button>
      </Space>
    </div>
  )
}
