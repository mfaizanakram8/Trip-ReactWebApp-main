import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/Auth/Signup/Signup"
import Login from "./pages/Auth/Login/Login"
import './App.css'
import LoginOtp from "./pages/Auth/LoginOtp/LoginOtp"
import SignupOtp from "./pages/Auth/SignupOtp"
import Welcome from "./pages/Welcome"
import PrefferredAirports from "./pages/PrefferredAirports"
import Accommadations from "./pages/Accommadations"
import Adventure from "./pages/Adventure"
import Subscription from "./pages/Subscription"


function App() {

  return (
    <>
      <Routes>
        <Route eaxct path='/' element={<SignUp />} />
        <Route eaxct path='/signupotp' element={<SignupOtp />} />
        <Route eaxct path='/login' element={<Login />} />
        <Route eaxct path='/loginotp' element={<LoginOtp />} />
        <Route eaxct path='/welcome' element={<Welcome />} />
        <Route eaxct path='/preferredairports' element={<PrefferredAirports />} />
        <Route eaxct path='/accommadations' element={<Accommadations/>} />
        <Route eaxct path='/adventure' element={<Adventure/>} />
        <Route eaxct path='/subcription' element={<Subscription/>} />
      </Routes>
    </>
  )
}

export default App
