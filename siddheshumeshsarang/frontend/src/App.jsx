import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/blog-source/Blog'
import AdminVerify from './pages/blog-source/Admin/AdminVerify'
import Admin from './pages/blog-source/Admin/Admin'
import ProtectedRoute from './pages/blog-source/Admin/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/AdminVerify' element={<AdminVerify />} />
      <Route path='/blogadmin' element={<ProtectedRoute><Admin /></ProtectedRoute>} />
    </Routes>
  )
}

export default App