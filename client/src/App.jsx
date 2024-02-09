import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/static/Home'
import Navbar from './components/static/Navbar'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Layout from './components/static/Layout'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { checkUser } from './slices/authSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])

  return (
    <Router>
      <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
    </Router>
  )
}

export default App
