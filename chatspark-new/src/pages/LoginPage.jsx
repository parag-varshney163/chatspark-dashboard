// src/pages/LoginPage.jsx
import React from "react";
import { LogIn } from "lucide-react";
import { motion } from "framer-motion";
import colors from "../constants/colors";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate=useNavigate();
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`,
      }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
          backgroundSize: "contain",
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 bg-[#0f1424]/60 backdrop-blur-md rounded-2xl p-8 w-[90%] max-w-md text-white shadow-2xl"
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="ChatSpark logo" className="w-20 h-20" />
        </div>

        <h1 className=" text-2xl md:text-4xl font-bold text-center mb-2">
          Chat<span style={{ color: colors.accent }}>Spark</span>
        </h1>

        <p
          className="text-center text-lg md:text-3xl font-semibold mb-6"
          style={{ color: colors.textSecondary }}
        >
          Welcome To <span style={{ color: colors.accent }}>ChatSpark</span>
        </p>

        {/* Yellow underline */}
        <div
          className="w-2/3 h-[2px] mx-auto mb-6"
          style={{ backgroundColor: colors.accent }}
        ></div>

        {/* Email field */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Email ID
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md bg-[#1a2238] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Password field */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-md bg-[#1a2238] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>

        {/* Forget password */}
        <div className="text-left text-sm mb-4">
          <a
            href="#"
            className="hover:underline"
            style={{ color: colors.accent }}
          >
            Forget Password
          </a>
        </div>

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex justify-center items-center gap-2 font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300"
          style={{
            backgroundColor: colors.buttonBg,
            color: colors.textPrimary,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = colors.buttonHover)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = colors.buttonBg)
          }
          onClick={()=>{navigate("/resetPassword")}}
        >
          <LogIn size={18} />
          Log In
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LoginPage;

