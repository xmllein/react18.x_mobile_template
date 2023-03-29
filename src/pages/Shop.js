import React from 'react';
import { useSelector } from 'react-redux';
import { List, Image, PullToRefresh } from 'antd-mobile';

const userList = [
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    name: '小明',
    desc: '我是小明',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    name: '小红',
    desc: '我是小红',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    name: '小刚',
    desc: '我是小刚',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
    name: '小李',
    desc: '我是小李',
  },
];

export default function Shop() {
  // 获取counter的值
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Shop</h1>
      <h2>Counter: {counter.num}</h2>
      <PullToRefresh
        onRefresh={async () => {
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });
        }}
      >
        <List header="用户列表">
          {userList.map((user) => (
            <List.Item
              key={user.name}
              prefix={
                <Image
                  src={user.avatar}
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={40}
                  height={40}
                />
              }
              description={user.desc}
            >
              {user.name}
            </List.Item>
          ))}
        </List>
      </PullToRefresh>
    </div>
  );
}
