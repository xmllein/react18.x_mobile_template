import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Badge, TabBar } from 'antd-mobile'
import styles from './Layout.module.css'
import { AuthComponents } from '../components/AuthRoute'

import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

const tabs = [
  {
    key: '/home',
    title: '首页',
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: '/shop',
    title: '商店',
    icon: <UnorderedListOutline />,
    badge: '5',
  },
  {
    key: '/todo',
    title: '待办',
    icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
    badge: '99+',
  },
  {
    key: '/my',
    title: '我的',
    icon: <UserOutline />,
  },
]

export default function Layout() {
  const navigate = useNavigate()

  const tabChangeHandle = (key) => {
    console.log(key)
    navigate(key)
  }
  return (
    <div>
      <AuthComponents>
        <div className={styles.tabBar}>
          <TabBar onChange={tabChangeHandle}>
            {tabs.map((item) => (
              <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
          </TabBar>
        </div>
        <div className={styles.tabContent}>
          <Outlet />
        </div>
      </AuthComponents>
    </div>
  )
}
