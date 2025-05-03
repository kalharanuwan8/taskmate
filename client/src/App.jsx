import React from 'react'
import Navbar from './pages/navbar'
import Login from './pages/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
    
  )
}

export default App