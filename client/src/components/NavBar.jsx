import { ThemeContext } from '../context/ThemeProvider'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
  const { dark, toggle } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center shadow-md 
      backdrop-blur-lg transition-all
      ${
        dark
          ? 'bg-black/40 border-b border-white/10'
          : 'bg-white/70 border-b border-green-200'
      }`}
    >
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-extrabold flex items-center gap-2 text-green-700 dark:text-green-300">
        🌿 AgriSense
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          to="/login"
          className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-5 py-2 rounded-lg border border-green-700 text-green-700 font-medium 
          hover:bg-green-700 hover:text-white transition"
        >
          Register
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggle}
          className={`ml-4 w-14 p-1 rounded-full flex items-center transition
          ${
            dark
              ? 'bg-white/10 border border-white/20'
              : 'bg-green-200 border border-green-300'
          }`}
        >
          <motion.div
            animate={{ x: dark ? 24 : 2 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className={`w-6 h-6 rounded-full shadow-md ${
              dark ? 'bg-yellow-300' : 'bg-green-700'
            }`}
          ></motion.div>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-lg transition"
      >
        {open ? (
          <X size={28} className="text-green-700 dark:text-green-300" />
        ) : (
          <Menu size={28} className="text-green-700 dark:text-green-300" />
        )}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`absolute top-full left-0 w-full md:hidden backdrop-blur-md px-6 pt-4 pb-6 space-y-4
            ${
              dark
                ? 'bg-black/60 border-b border-white/10'
                : 'bg-white/90 border-b border-green-200'
            }`}
          >
            <Link
              onClick={() => setOpen(false)}
              to="/login"
              className="block w-full px-5 py-3 rounded-lg text-center bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Login
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/register"
              className="block w-full px-5 py-3 rounded-lg text-center border border-green-700 text-green-700 
              font-semibold hover:bg-green-700 hover:text-white transition"
            >
              Register
            </Link>

            {/* Theme Toggle (Mobile) */}
            <div className="flex justify-center">
              <button
                onClick={() => {
                  toggle()
                  setOpen(false)
                }}
                className={`mt-3 w-16 p-1 rounded-full flex items-center transition
                ${
                  dark
                    ? 'bg-white/10 border border-white/30'
                    : 'bg-green-200 border border-green-300'
                }`}
              >
                <motion.div
                  animate={{ x: dark ? 26 : 2 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className={`w-7 h-7 rounded-full ${
                    dark ? 'bg-yellow-300' : 'bg-green-700'
                  }`}
                ></motion.div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavBar
