import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Space } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons';
import styles from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 如果已经登录，直接跳转到首页
    if (React.$getToken()) {
      navigate('/home');
    }
  }, [navigate]);

  const handleClick = () => {
    // 登录成功后，将token存储到localStorage中
    React.$setToken('123456');
    navigate('/home');
  };

  return (
    <div>
      <h2>Login</h2>
      <Form
        initialValues={{
          username: 'admin',
          password: '123456',
        }}
      >
        <Form.Item label="用户名" name="username">
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <div className={styles.password}>
            <Input
              className={styles.input}
              placeholder="请输入密码"
              type={visible ? 'text' : 'password'}
            />
            <div className={styles.eye}>
              {!visible ? (
                <EyeInvisibleOutline onClick={() => setVisible(true)} />
              ) : (
                <EyeOutline onClick={() => setVisible(false)} />
              )}
            </div>
          </div>
        </Form.Item>
      </Form>
      <Space
        direction="vertical"
        block
        style={{ padding: '0 20px', marginTop: '20px' }}
      >
        <Button onClick={handleClick} color="danger" block>
          模拟登录成功
        </Button>
      </Space>
    </div>
  );
}
