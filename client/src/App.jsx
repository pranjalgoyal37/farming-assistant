import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Contact from "./components/Home/contatct";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./routes/PrivateRoutes";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div>
        <Routes>
          {/* public Routes */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/forget" element={<ForgotPassword />}></Route>

          {/* private Route */}
          <Route element={<PrivateRoutes allowedRoles={["admin"]} />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
