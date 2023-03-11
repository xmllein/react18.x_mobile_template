import './App.css'
// 路由
import RoutesComport from './router' // 路由组件
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

function App() {
  // 引入路由组件
  const GetRoutes = () => useRoutes(RoutesComport)
  return (
    <Router>
      <GetRoutes />
    </Router>
  )
}

export default App
