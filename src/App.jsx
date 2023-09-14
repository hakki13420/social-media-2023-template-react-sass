import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { useState } from 'react'

function App () {
  const [currentUser, setCurrentUser] = useState(true)

  const ProtectedRoute = ({ children }) => {
    return (
      currentUser
        ? <>{ children }</>
        : <Navigate to='/login' />
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute><Home /></ProtectedRoute>
    },
    {
      path: '/profile/:id',
      element: <Profile/>
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
