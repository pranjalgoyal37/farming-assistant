 import { motion } from "framer-motion";

const Contact = ({ dark }) => {
  return (
    <section className="px-6 md:px-20 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 text-green-700"
      >
        🌿 Contact Us
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`max-w-3xl mx-auto p-8 rounded-2xl shadow-lg backdrop-blur-lg 
        ${
          dark
            ? "bg-white/5 border border-white/20"
            : "bg-white/90 border border-green-300"
        }`}
      >
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6 text-lg">
          Have questions or need help with your farming journey?  
          We’re here to assist you! 🌱
        </p>

        {/* FORM */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="font-semibold">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`w-full p-3 rounded-lg mt-2 border outline-none transition 
              ${
                dark
                  ? "bg-white/10 border-white/20 text-white placeholder-white/40"
                  : "bg-white border-green-300"
              }
              focus:ring-2 focus:ring-green-600`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full p-3 rounded-lg mt-2 border outline-none transition 
              ${
                dark
                  ? "bg-white/10 border-white/20 text-white placeholder-white/40"
                  : "bg-white border-green-300"
              }
              focus:ring-2 focus:ring-green-600`}
            />
          </div>

          {/* Message */}
          <div>
            <label className="font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className={`w-full p-3 rounded-lg mt-2 border outline-none transition
              ${
                dark
                  ? "bg-white/10 border-white/20 text-white placeholder-white/40"
                  : "bg-white border-green-300"
              }
              focus:ring-2 focus:ring-green-600`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-3 mt-4 bg-green-700 text-white font-semibold rounded-xl shadow-md hover:bg-green-800 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
