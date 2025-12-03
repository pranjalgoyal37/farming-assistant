import { ThemeContext } from "../context/ThemeProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const NavBar = () => {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <nav
      className={`w-full flex justify-between items-center px-8 py-4 shadow-md backdrop-blur-md 
          ${
            dark
              ? "bg-white/5 border-b border-white/10"
              : "bg-white/70 border-b border-green-300"
          }`}
    >
      <h1 className="text-3xl font-extrabold text-[#2E7D32]">🌿 AgriSense</h1>

      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="px-5 py-2 rounded-lg bg-[#2E7D32] text-white font-semibold hover:bg-green-700 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-5 py-2 rounded-lg border border-green-700 text-green-700 font-semibold hover:bg-green-700 hover:text-white transition"
        >
          Register
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={() => toggle()}
          className="ml-4 w-14 p-1 rounded-full flex items-center bg-white/20 border border-white/30 transition"
        >
          <motion.div
            animate={{ x: dark ? 24 : 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`w-6 h-6 rounded-full ${
              dark ? "bg-yellow-300" : "bg-green-600"
            }`}
          ></motion.div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
