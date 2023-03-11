import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
// 工具函数
import * as utils from './utils/index.js'
// 移动端适配
import 'lib-flexible'

// 引入store
import store from './store'

// 暴露全局
// 暴露全局文件
Object.keys(utils).forEach((key) => {
  const newKey = '$' + key
  React[newKey] = utils[key]
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
