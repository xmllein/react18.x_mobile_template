import React, { useEffect } from 'react'
import { Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  useEffect(() => {
    // 如果已经登录，直接跳转到首页
    if (React.$getToken()) {
      navigate('/home')
    }
  }, [navigate])

  const handleClick = () => {
    // 登录成功后，将token存储到localStorage中
    React.$setToken('123456')
    navigate('/home')
  }

  return (
    <div>
      <h2>Login</h2>
      <Button onClick={handleClick}>模拟登录成功</Button>
    </div>
  )
}
