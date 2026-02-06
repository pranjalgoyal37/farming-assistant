import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Contact from "./components/Home/contatct";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CropRecommendation from "./pages/CropRecommendation";
import PrivateRoutes from "./routes/PrivateRoutes";
import AuthProvider from "./context/AuthProvider";
import LanguageProvider from "./context/LanguageProvider";

import { Toaster } from "react-hot-toast";

import FertilizerGuide from "./pages/FertilizerGuide";
import Weather from "./pages/Weather";

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#fff",
              color: "#333",
            },
          }}
        />
        <Routes>
          {/* public Routes */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/forget" element={<ForgotPassword />}></Route>

          {/* private Route */}
          <Route element={<PrivateRoutes allowedRoles={["admin", "farmer"]} />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/crop-recommendation" element={<CropRecommendation />}></Route>
            <Route path="/fertilizer" element={<FertilizerGuide />}></Route>
            <Route path="/weather" element={<Weather />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
