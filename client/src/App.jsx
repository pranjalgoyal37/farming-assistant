import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Contact from "./components/Home/contatct";
import Home from "./pages/Home";
import { Routes,Route } from "react-router-dom";
function App() {


  return (
   <>
   <Routes>
    <Route path="/" element ={<Home/>}></Route>
    <Route path="/login" element ={<Login/>}></Route>
    <Route path="/Register" element ={<Register/>}></Route>
    <Route path="/forget" element ={<ForgotPassword/>}></Route>
    <Route path="/contact" element ={<Contact/>}></Route>

    {/* <Route path="/" element ={<Home/>}></Route> */}

   </Routes>

   </>
  )
}

export default App
