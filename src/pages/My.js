import React from 'react';
import { List, Button, Space } from 'antd-mobile';
import { removeToken } from '../utils/token';
import { useNavigate } from 'react-router-dom';

export default function My() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('click');
  };

  // 退出登录
  const handleLogout = () => {
    console.log('logout');
    removeToken();
    // 跳转到登录页
    navigate('/login');
  };

  return (
    <div>
      <List mode="card" header="卡片列表">
        <List.Item extra="按照支付设置的顺序扣款" onClick={handleClick}>
          扣款方式
        </List.Item>
        <List.Item extra="200元" onClick={handleClick}>
          月限额
        </List.Item>
        <List.Item onClick={handleClick}>帮助中心</List.Item>
        <List.Item onClick={handleClick}>关闭服务</List.Item>
      </List>
      <Space direction="vertical" block style={{ padding: '0 20px' }}>
        <Button size="large" color="danger" block onClick={handleLogout}>
          退出登录
        </Button>
      </Space>
    </div>
  );
}
