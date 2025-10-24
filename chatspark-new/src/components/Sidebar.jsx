// src/components/Sidebar.jsx
import React, { useState } from "react";
import {
  Menu,
  TrendingUp,
  Users,
  FileText,
  ClipboardCheck,
  BarChart3,
  Wallet,
  DollarSign,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import colors from "../constants/colors";
import logo from "../assets/logo.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: "Recent Trend", icon: <TrendingUp size={20} /> },
    { name: "Creators", icon: <Users size={20} /> },
    { name: "Application", icon: <FileText size={20} /> },
    { name: "KYC Reviews", icon: <ClipboardCheck size={20} /> },
    { name: "User Analytics", icon: <BarChart3 size={20} /> },
    { name: "Payouts", icon: <Wallet size={20} /> },
    { name: "Payout Request", icon: <DollarSign size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <motion.aside
      animate={{ width: isOpen ? 220 : 65 }}
      transition={{ duration: 0.4, type: "tween" }}
      className="h-screen bg-[#11162a]/95 text-white fixed top-0 left-0 z-40 flex flex-col justify-between overflow-hidden shadow-xl"
    >
      {/* Top Section */}
      <div>
        {/* Hamburger Icon */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          onClick={toggleSidebar}
          className="flex fixed items-center justify-center p-4 pl-6 cursor-pointer hover:bg-white/20 bg-white/10 transition"
        >
          <Menu color={colors.textPrimary} size={22} />
        </motion.div>


        {/* Logo + Title */}
        {/* <motion.div
          className="flex items-center justify-center mt-4"
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ delay: isOpen ? 0.2 : 0 }}
        >
          {isOpen && (
            <div className="flex flex-col items-center gap-2">
              <img src={logo} alt="ChatSpark" className="w-10 h-10 rounded-full" />
              <h1 className="text-lg font-semibold text-gray-200">
                Chat<span style={{ color: colors.accent }}>Spark</span>
              </h1>
            </div>
          )}
        </motion.div> */}

        {/* Menu Items */}
        <nav className="mt-10 pt-10 flex flex-col gap-2">
          {menuItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all ${
                item.name === "Recent Trend"
                  ? "text-[#FFD700] bg-white/10"
                  : "text-gray-300 hover:bg-white/10"
              } ${isOpen ? "justify-start" : "justify-center"}`}
            >
              {item.icon}
              {isOpen && <span className="text-sm">{item.name}</span>}
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="text-center mb-4">
        {isOpen && (
          <p className="text-xs text-gray-500">
            © 2025 <span style={{ color: colors.accent }}>ChatSpark</span>
          </p>
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
