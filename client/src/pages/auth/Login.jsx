import { motion, setDragLock } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useAuth } from "../../context/AuthProvider";
import { axiosInstance } from "../../utils/axiosInstance";
import { API_PATH } from "../../utils/apiPath";
import { ThemeContext } from "../../context/ThemeProvider";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dark } = useContext(ThemeContext);

  const { login } = useAuth();
  const navigate = useNavigate();
  console.log(dark);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(API_PATH.AUTH.LOGIN, {
        email,
        password,
      });
      const data = response.data;
      console.log(data);

      const { role, token, user } = data;

      // set the user and token in localstroge and AuthContext
      login(token, user);

      // role based redirection
      // if (role?.toLowerCase() === "admin") {
      //   navigate("/user/dashboard");
      // } else {
      //   navigate("/user/dashboard");
      // }

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen px-5 
        ${
          dark
            ? "bg-[#0a0f0a] text-white"
            : "bg-gradient-to-br from-green-50 to-emerald-100 text-gray-800"
        }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-md  backdrop-blur-lg shadow-xl rounded-2xl p-8  ${
          dark
            ? "bg-white/5 border border-white/10"
            : "bg-white/90 border border-green-200"
        }`}
      >
        <h1 className="text-4xl font-bold text-center text-green-700 mb-2">
          🌾 Welcome Back
        </h1>
        <p className="text-center text-green-600 mb-6">
          Login to your Farming Assistant
        </p>

        {/* Email Input */}
        <label className="block font-semibold text-green-700 mb-1">Email</label>
        <input
          className="w-full p-3 rounded-lg mb-4 border border-green-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <label className="block font-semibold text-green-700 mb-1">
          Password
        </label>
        <input
          className="w-full p-3 rounded-lg mb-4 border border-green-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <button
          className="w-full p-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Forgot Password */}
        <div className="flex justify-end mt-2">
          <Link
            to="/forgot-password"
            className="text-sm text-green-600 font-medium hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-green-200"></div>

        {/* Register Link */}
        <p className="text-center text-sm text-green-700">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-green-700 hover:underline"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
