import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        dark
          ? "bg-[#0a0f0a] text-white"
          : "bg-gradient-to-br from-green-50 to-emerald-100 text-gray-800"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`w-full flex justify-between items-center px-8 py-4 shadow-md backdrop-blur-md 
          ${
            dark
              ? "bg-white/5 border-b border-white/10"
              : "bg-white/70 border-b border-green-300"
          }`}
      >
        <h1 className="text-3xl font-extrabold text-[#2E7D32]">
          🌿 AgriSense
        </h1>

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
            onClick={() => setDark(!dark)}
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

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1
            className={`text-5xl md:text-6xl font-extrabold leading-tight ${
              dark ? "text-white" : "text-green-900"
            }`}
          >
            Grow Smarter With  
            <span className="text-green-700"> AI-Powered Farming</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            AgriSense combines nature, data and technology to help farmers make
            better decisions — from crop selection to fertilizer guidance.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/register"
              className="px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800 transition"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="px-6 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="https://cdn-icons-png.flaticon.com/512/7664/7664184.png"
          className="w-80 mt-10 md:mt-0 animate-float"
        />
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 md:px-20 py-14">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-700">
          🌱 Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "🌾 Crop Recommendation",
              text: "Get suggestions for the best crops based on soil, weather and region.",
            },
            {
              title: "🧪 Fertilizer Guide",
              text: "Receive fertilizer mixes based on nutrient needs and crop type.",
            },
            {
              title: "📸 Disease Detection",
              text: "Upload leaf images to identify plant diseases instantly.",
            },
            {
              title: "☁️ Live Weather Alerts",
              text: "Be notified about rainfall, humidity, temperature instantly.",
            },
            {
              title: "🤖 Smart Chat Assistant",
              text: "Ask farming questions and get instant AI support.",
            },
            {
              title: "📊 Analytics Dashboard",
              text: "Track your farm progress with beautiful insights.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`p-6 rounded-xl shadow-lg backdrop-blur-lg transition-all duration-500 
              ${
                dark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white/90 border border-green-200"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`mt-20 py-10 text-center ${
          dark ? "bg-white/5 border-t border-white/10" : "bg-green-50"
        }`}
      >
        <h3 className="text-xl font-semibold text-green-700">
          🌿 AgriSense — Farming Made Smarter
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Nurturing crops with the power of technology.
        </p>

        <div className="mt-4 flex justify-center gap-6 text-green-700 dark:text-green-300">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} AgriSense. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
