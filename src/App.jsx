import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/layout'
import Landingpage from './pages/landingpage'
import Login from './pages/login'
import Signup from './pages/signup'
import AboutUs from './components/about'

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Landingpage />
        },
        {
          path: '/about us',
          element: <AboutUs />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '*',
      element: <h1>404 page not found</h1>
    }
  ]
)
function App() {



  return (
    <>
      < RouterProvider router={routes} />
    </>
  )
}

export default App
