import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainLogout from './pages/CaptainLogout'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'
const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/login" element={<UserLogin/>} />
          <Route path="/riding" element={<Riding/>} />
          <Route path="/captain-riding" element={<CaptainRiding/>} />
          <Route path="/signup" element={<UserSignup/>} />
          <Route path="/captain-login" element={<Captainlogin/>} />
          <Route path="/captain-signup" element={<Captainsignup/>} />
          <Route path="/home" 
          element={
            <UserProtectWrapper>
              <Home/>
            </UserProtectWrapper>}
          />
          <Route path='/user/logout' 
          element={
            <UserProtectWrapper>
              <UserLogout/>
            </UserProtectWrapper>
          }/>
          <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
          } />
          <Route path='/captain/logout' element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          } />
      </Routes>
    </div>
  )
}

export default App