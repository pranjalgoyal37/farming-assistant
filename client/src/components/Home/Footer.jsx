import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'
import { Facebook, Instagram, Linkedin, Twitter, Github } from 'lucide-react'

import { motion } from 'framer-motion'

const Footer = () => {
  const { dark } = useContext(ThemeContext)

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={`pt-16 pb-10 transition-all ${
        dark
          ? 'bg-[#0a0f0a] text-gray-300 border-t border-white/10'
          : 'bg-gradient-to-br from-green-50 to-green-100 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-16 text-center md:text-left"
        >
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-3xl font-extrabold text-green-700 dark:text-green-300">
              🌿 AgriSense
            </h3>
            <p className="mt-4 text-lg opacity-80 leading-relaxed">
              Smarter farming through AI, analytics, and real-time insights.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-lg">
              {['Home', 'Features', 'How It Works', 'Contact'].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-green-700 dark:hover:text-green-300 hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
              Contact Us
            </h4>
            <p className="text-lg opacity-90">📍 AgriSense HQ, India</p>
            <p className="text-lg mt-2 opacity-90">📧 support@agrisense.com</p>
            <p className="text-lg mt-2 opacity-90">📞 +91 98765 43210</p>
          </motion.div>
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-6 mb-10"
        >
          {[
            { icon: <Facebook size={26} />, href: '#' },
            { icon: <Instagram size={26} />, href: '#' },
            { icon: <Twitter size={26} />, href: '#' },
            { icon: <Linkedin size={26} />, href: '#' },
            { icon: <Github size={26} />, href: '#' }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              whileHover={{ scale: 1.2, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`p-3 rounded-full transition-all ${
                dark
                  ? 'bg-white/10 hover:bg-white/20 text-green-300'
                  : 'bg-green-200 hover:bg-green-300 text-green-800'
              }`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          initial={{ width: '0%' }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8 }}
          className={`h-[2px] mx-auto mb-6 ${
            dark
              ? 'bg-gradient-to-r from-transparent via-green-300 to-transparent'
              : 'bg-gradient-to-r from-transparent via-green-700 to-transparent'
          }`}
        ></motion.div>

        {/* COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg opacity-80">
            © {new Date().getFullYear()} <b>AgriSense</b>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
