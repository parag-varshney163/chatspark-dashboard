import React from "react";
import { LogIn, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import colors from "../constants/colors";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const WelcomePage = () => {
    const navigate=useNavigate();
  return (
    <div
      className="min-h-screen flex items-center justify-center text-white relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`,
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
          backgroundSize: "contain",
        }}
      ></div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6"
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="ChatSpark Logo" className="w-28 h-28" />
        </div>

        
        <h1 className="text-4xl font-bold mb-2">
          <span style={{ color: colors.textSecondary }}>Chat</span>
          <span style={{ color: colors.accent }}>Spark</span>
        </h1>

        <p style={{ color: colors.textSecondary }} className="text-3xl pt-5 font-semibold">
          Welcome To <span style={{ color: colors.accent }}>ChatSpark</span>
        </p>

        {/* Yellow underline */}
        <div
          className="w-3/4 sm:w-1/2 md:w-[400px] h-[2px] mx-auto my-4"
          style={{ backgroundColor: colors.accent }}
        ></div>

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-flex items-center gap-2 font-semibold px-6 py-2 rounded-full shadow-lg transition"
          style={{
            backgroundColor: colors.buttonBg,
            color: colors.textPrimary,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.buttonHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.buttonBg)}
          onClick={()=>{navigate("/login")}}
        >
          <LogIn size={18} />
          Login IN
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WelcomePage;

