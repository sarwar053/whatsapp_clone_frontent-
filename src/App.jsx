import React from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route} from 'react-router'
import Login from "./pages/user-login/login"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/user-login" element={<Login/>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  )
}

export default App
