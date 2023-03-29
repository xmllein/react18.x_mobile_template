// AuthRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom'; // Navigate 重定向

function AuthComponents({ children }) {
  // 获取token
  const token = React.$getToken(); // 暴露全局方法的书写方式

  // 判断有无 token
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to={'/login'} replace />;
  }
}

export { AuthComponents };
