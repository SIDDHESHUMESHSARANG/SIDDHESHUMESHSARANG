import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/blog-source/Blog'
import UserOffline from './pages/UserOffline'
import AdminVerify from './pages/blog-source/Admin/AdminVerify'
import Admin from './pages/blog-source/Admin/Admin'
import ProtectedRoute from './pages/blog-source/Admin/ProtectedRoute';
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [userOffline, SetOffline] = useState(false)
  useEffect(() => {
    if (!navigator.onLine) {
      SetOffline(true)
    }
  },[])
  return (
    <Routes>
      <Route path='/' element={userOffline ? <UserOffline/> : <Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/AdminVerify' element={<AdminVerify />} />
      <Route path='/blogadmin' element={<ProtectedRoute><Admin /></ProtectedRoute>} />
    </Routes>
  )
}

export default App