// 导入页面组件
import Login from '../pages/Login'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Shop from '../pages/Shop'
import My from '../pages/My'
import Todo from '../pages/Todo'
const routerList = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/todo',
        element: <Todo />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/my',
        element: <My />,
      },
    ],
  },
]

export default routerList
