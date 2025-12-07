import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Welcome from './pages/Welcome'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App
