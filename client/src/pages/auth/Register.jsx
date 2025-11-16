import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-8"
      >
        <h1 className="text-4xl font-bold text-center text-green-700 mb-2">
          🌱 Create Account
        </h1>
        <p className="text-center text-green-600 mb-6">
          Join the Farming Assistant Community
        </p>

        {/* Full Name */}
        <label className="block font-semibold text-green-700 mb-1">
          Full Name
        </label>
        <input
          className="w-full p-3 rounded-lg mb-4 border border-green-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          type="text"
          placeholder="Enter your full name"
        />

        {/* Email */}
        <label className="block font-semibold text-green-700 mb-1">Email</label>
        <input
          className="w-full p-3 rounded-lg mb-4 border border-green-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          type="email"
          placeholder="Enter your email"
        />

        {/* Phone */}
        <label className="block font-semibold text-green-700 mb-1">Phone</label>
        <input
          className="w-full p-3 rounded-lg mb-4 border border-green-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          type="text"
          placeholder="Enter your phone number"
        />

        {/* Role */}
        <label className="block font-semibold text-green-700 mb-1">
          Select Role
        </label>
        <select
          className="w-full p-3 rounded-lg mb-4 border border-green-300 focus:ring-2 focus:ring-green-500 outline-none transition"
        >
          <option value="farmer">Farmer</option>
          <option value="admin">Admin</option>
        </select>

        {/* Password */}
        <label className="block font-semibold text-green-700 mb-1">
          Password
        </label>
        <input
          className="w-full p-3 rounded-lg mb-4 border border-green-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          type="password"
          placeholder="Enter your password"
        />

        {/* Confirm Password */}
        <label className="block font-semibold text-green-700 mb-1">
          Confirm Password
        </label>
        <input
          className="w-full p-3 rounded-lg mb-6 border border-green-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          type="password"
          placeholder="Confirm your password"
        />

        {/* Register Button */}
        <button
          className="w-full p-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
          onClick={goToLogin}
        >
          Register
        </button>

        {/* Already have account */}
        <p className="text-center text-sm text-green-700 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-green-700 hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
