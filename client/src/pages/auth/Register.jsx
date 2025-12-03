import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosInstance";
import { API_PATH } from "../../utils/apiPath";
import { useState } from "react";
import toast from "react-hot-toast";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "farmer",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // ✅ use name + value
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegistration = async () => {
    const { fullName, email, role, password, confirmPassword } = formData;
    console.log(formData);
    console.log(fullName, email, role, password);

    if (!fullName || !email || !role || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      // Example API Call
      const response = await axiosInstance.post(API_PATH.AUTH.REGISTER, {
        fullName,
        email,
        role,
        password,
      });

      toast.success("Registration Successful!");
      navigate("/login");
    } catch (error) {
      if (error.response) {
        console.log("DATA:", JSON.stringify(error.response.data, null, 2)); // 👈 see fields & messages
        toast.error(
          error.response.data.detail?.message || "Registration Failed!"
        );
      } else {
        console.error(error);
        toast.error("Network error");
      }
    } finally {
      setLoading(false);
    }
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
          onChange={handleChange}
          name="fullName"
        />

        {/* Email */}
        <label className="block font-semibold text-green-700 mb-1">Email</label>
        <input
          className="w-full p-3 rounded-lg mb-4 border border-green-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />

        {/* Role */}
        <label className="block font-semibold text-green-700 mb-1">
          Select Role
        </label>
        <select
          className="w-full p-3 rounded-lg mb-4 border border-green-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          onChange={handleChange}
          name="role"
          value={formData.role}
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
          onChange={handleChange}
          name="password"
        />

        {/* Confirm Password */}
        <label className="block font-semibold text-green-700 mb-1">
          Confirm Password
        </label>
        <input
          className="w-full p-3 rounded-lg mb-6 border border-green-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          type="password"
          placeholder="Confirm your password"
          onChange={handleChange}
          name="confirmPassword"
        />

        {/* Register Button */}
        <button
          className="w-full p-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
          onClick={handleRegistration}
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
