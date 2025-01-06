import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/HomePages/Home'
import Login from './Pages/Loginpags/Login'
import Signup from './Pages/Loginpags/Signup'
import Forgetpassword from './Pages/Loginpags/Forgetpassword'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* routers for homepage   */}
        <Route path='/' element={<Home />} />

        {/* routers for login signup and forgetpassword pages   */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgetpassword' element={<Forgetpassword />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App