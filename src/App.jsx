import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './pages/First'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import NotFound from './pages/NotFound/NotFound'
import Menu from './pages/Menu/Menu'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import useAuthListener from './auth/useAuthListener'
import ProtectedRoute from './auth/ProtectedRoute'
const router = createBrowserRouter([{
  path: "/",
  element: <First />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    }, 
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/cart",
      element: (
        <ProtectedRoute>
          <Cart />
        </ProtectedRoute>
      )
    },
    {
      path: "/placeorder",
      element: <PlaceOrder />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]
}])

function App() {
  useAuthListener()
  return (
    <RouterProvider router={router}/> 
  )
}

export default App