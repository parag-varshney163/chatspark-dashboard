// src/pages/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import AnalyticsCards from "../components/AnalyticsCards";
import TrendSection from "../components/TrendSection";
import ReviewCards from "../components/ReviewCards";
import PerformanceCards from "../components/PerformanceCards";
import { motion } from "framer-motion";
import colors from "../constants/colors";
import AnalyticsControls from "../components/AnalyticsControls";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex text-white overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${colors.primary}, ${colors.secondary})`,
      }}
    >
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <motion.main
        animate={{
          marginLeft: sidebarOpen ? 220 : 70,
          width: sidebarOpen ? "calc(100% - 220px)" : "calc(100% - 70px)",
        }}
        transition={{ duration: 0.4, type: "tween" }}
        className="p-6 overflow-y-auto scrollbar-hide"
      >
        <Navbar />
        <div className="space-y-6">
          <StatsCards />
          <AnalyticsControls/>
          <AnalyticsCards />
          <TrendSection />
          <ReviewCards />
          <PerformanceCards />
        </div>
      </motion.main>
    </div>
  );
};

export default Dashboard;
