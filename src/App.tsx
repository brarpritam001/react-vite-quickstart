import { Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './pages/auth/login'
import Signup from './pages/auth/signUp'
import ForgotPassword from './pages/auth/forgotPassword'
import Home from './pages/home/home'
import SplashScreen from './pages/splashScreen/splashScreen'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<Signup />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
