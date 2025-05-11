import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './pages/First'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Cart from './pages/Cart/Cart'
import NotFound from './pages/NotFound/NotFound'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import useAuthListener from './auth/useAuthListener'
import ProtectedRoute from './auth/ProtectedRoute'
import FindRecipe from './pages/aiRecipie/FindRecipie'
const router = createBrowserRouter([{
  path: "/",
  element: <First />,
  children: [
    {
      index: true,
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      )
    },
    {
      path: "/about",
      element: (
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      )
    }, 
    {
      path: "/contact",
      element: <ProtectedRoute>
        <Contact />
      </ProtectedRoute>
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
      path: "findrecipie",
      element: <FindRecipe />
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