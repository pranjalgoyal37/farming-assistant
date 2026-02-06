import React from 'react'

const Footer = () => {
  return (
    <footer
      className={`mt-20 py-10 text-center ${
        dark ? 'bg-white/5 border-t border-white/10' : 'bg-green-50'
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
  )
}

export default Footer
