import { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../assets/Hero.jpg'
import { ThemeContext } from '../context/ThemeProvider'
import NavBar from '../components/NavBar'
import Footer from '../components/Home/Footer'
const Home = () => {
  const { dark } = useContext(ThemeContext)

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        dark ? 'bg-[#0a0f0a] text-white' : 'bg-white text-gray-800'
      }`}
    >
      {/* NavBar */}
      <NavBar />

      {/* === HERO SECTION === */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-28 gap-10">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1
            className={`text-4xl md:text-6xl font-extrabold leading-tight ${
              dark ? 'text-white' : 'text-green-900'
            }`}
          >
            Grow Smarter with
            <span className="block text-green-600">AI-Powered Farming</span>
          </h1>

          <p
            className={`mt-4 text-lg ${
              dark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            AgriSense combines nature, data and AI to help farmers make better
            decisions — crop selection, plant health, fertilizer needs, and
            more.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/register"
              className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition font-semibold"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition font-semibold"
            >
              Login
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.img
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src={Hero}
          className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
        />
      </section>

      {/* === FEATURES SECTION === */}
      <section className="px-6 md:px-20 py-16">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            dark ? 'text-green-300' : 'text-green-700'
          }`}
        >
          🌱 Key Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            [
              '🌾 Crop Recommendation',
              'Get suggestions for the best crops based on soil & weather.'
            ],
            [
              '🧪 Fertilizer Guide',
              'Get nutrient-balanced fertilizer recommendations.'
            ],
            [
              '📸 Disease Detection',
              'Upload leaf images and detect diseases instantly.'
            ],
            [
              '☁️ Weather Alerts',
              'Stay updated with live rainfall, humidity & heat alerts.'
            ],
            [
              '🤖 Smart Chat Assistant',
              'Ask farming questions and get instant AI answers.'
            ],
            [
              '📊 Analytics Dashboard',
              'Track farm growth, soil health & reports.'
            ]
          ].map(([title, text], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-xl shadow-lg border ${
                dark
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-green-100'
              } hover:shadow-2xl hover:scale-[1.02] transition-transform`}
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p
                className={`${
                  dark ? 'text-gray-300' : 'text-gray-600'
                } text-sm md:text-base`}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === HOW AGRISENSE WORKS (REDESIGNED) === */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-transparent dark:to-transparent">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-14 ${
            dark ? 'text-green-300' : 'text-green-800'
          }`}
        >
          🚀 How AgriSense Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: '1',
              title: 'Upload Crop / Soil Data',
              text: 'Enter soil values (NPK, pH, moisture) or crop symptoms.'
            },
            {
              step: '2',
              title: 'AI Processes Data',
              text: 'AI analyzes soil, weather, plant health & disease signals.'
            },
            {
              step: '3',
              title: 'Get Instant Insights',
              text: 'Receive crop, fertilizer & disease reports instantly.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-10 text-center rounded-2xl shadow-xl border ${
                dark
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-green-200'
              } hover:scale-[1.03] transition-transform`}
            >
              <div
                className={`text-6xl font-extrabold mb-4 ${
                  dark ? 'text-green-300' : 'text-green-600'
                }`}
              >
                {item.step}
              </div>

              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>

              <p className={`${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
