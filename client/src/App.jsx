import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import { Routes,Route } from "react-router-dom";
function App() {


  return (
   <>
   <Routes>
    <Route path="/login" element ={<Login/>}></Route>
    <Route path="/Register" element ={<Register/>}></Route>
    <Route path="/home" element ={<Home/>}></Route>
    <Route path="/forget" element ={<ForgotPassword/>}></Route>

    {/* <Route path="/" element ={<Home/>}></Route> */}

   </Routes>

   </>
  )
}

export default App
