import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    // Handle forgot password logic here
    console.log("Reset link sent to:", email);
    navigate("/login");
  } 
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-8"
      >
        <h1 className="text-4xl font-bold text-center text-green-700 mb-2">
          🔐 Forgot Password
        </h1>
        <p className="text-center text-green-600 mb-6">
          Enter your registered email to reset your password
        </p>

        {/* Email */}
        <label className="block font-semibold text-green-700 mb-3">
          Email Address
        </label>
        <input
          className="w-full p-3 rounded-lg mb-6 border border-green-300 focus:ring-2 focus:ring-green-500 outline-none transition"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Reset Button */}
        <button
          className="w-full p-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
          onClick={handleSubmit}
        >
          Send Reset Link
        </button>

        {/* Back to Login */}
        <p className="text-center text-sm text-green-700 mt-5">
          Remember your password?{" "}
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

export default ForgotPassword;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// const ForgotPassword = () => {
//   const [dark, setDark] = useState(false);

//   return (
//     <div
//       className={`min-h-screen flex items-center justify-center px-6 transition-all duration-500 ${
//         dark
//           ? "bg-[#0a0a0f] text-white"
//           : "bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800"
//       }`}
//     >
//       {/* Toggle Button */}
//       <div className="absolute top-6 right-6">
//         <button
//           onClick={() => setDark(!dark)}
//           className="p-2 w-14 rounded-full transition-all duration-300 shadow-lg 
//             flex items-center justify-between cursor-pointer 
//             bg-white/20 backdrop-blur-md border border-white/30"
//         >
//           <motion.span
//             animate={{ x: dark ? 20 : 0 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className={`w-6 h-6 rounded-full ${
//               dark ? "bg-yellow-300" : "bg-blue-600"
//             }`}
//           />
//         </button>
//       </div>

//       <AnimatePresence>
//         <motion.div
//           initial={{ opacity: 0, y: 50, scale: 0.9 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className={`w-full max-w-md p-8 rounded-2xl shadow-xl border 
//             backdrop-blur-lg transition-all duration-500
//             ${
//               dark
//                 ? "bg-white/5 border-white/10 shadow-purple-500/20"
//                 : "bg-white/90 border-purple-300 shadow-lg"
//             }`}
//         >
//           {/* Title */}
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className={`text-4xl font-bold text-center ${
//               dark ? "text-purple-300" : "text-purple-700"
//             }`}
//           >
//             🔐 Reset Password
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className={`text-center mt-2 mb-6 ${
//               dark ? "text-purple-200/80" : "text-gray-600"
//             }`}
//           >
//             Enter your email to receive a password reset link.
//           </motion.p>

//           {/* Email Input */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <label className="font-semibold mb-1 block">Email</label>
//             <input
//               className={`w-full p-3 rounded-lg border outline-none transition-all duration-300 
//                 ${
//                   dark
//                     ? "bg-white/10 border-white/20 text-white placeholder-white/40"
//                     : "bg-white border-purple-300"
//                 }
//                 focus:ring-2 focus:ring-purple-500`}
//               type="email"
//               placeholder="Enter your email"
//             />
//           </motion.div>

//           {/* Button */}
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             whileHover={{ scale: 1.02 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className={`w-full mt-6 p-3 rounded-xl font-semibold shadow-md transition-all duration-300
//               ${
//                 dark
//                   ? "bg-purple-600 hover:bg-purple-700 shadow-purple-800/40"
//                   : "bg-purple-600 hover:bg-purple-700 text-white"
//               }`}
//           >
//             Send Reset Link
//           </motion.button>

//           {/* Back to login */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="text-center text-sm mt-5"
//           >
//             Remember your password?{" "}
//             <Link
//               to="/login"
//               className="font-semibold text-purple-600 hover:underline"
//             >
//               Login
//             </Link>
//           </motion.p>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ForgotPassword;
