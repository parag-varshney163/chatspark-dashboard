import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import colors from "../constants/colors"; // your existing color file

const vibes = [
  { label: "Romantic 💖", value: 75 },
  { label: "Friendship 🤝", value: 60 },
  { label: "Chill 😌", value: 85 },
  { label: "Feeling Lonely 😔", value: 40 },
  { label: "Sad 😢", value: 55 },
];

const chartData = [
  { name: "1 AM", users: 2 },
  { name: "3 AM", users: 5 },
  { name: "5 AM", users: 3 },
  { name: "7 AM", users: 6 },
  { name: "9 AM", users: 4 },
  { name: "11 AM", users: 7 },
];

const TrendSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 w-full">
      {/* Left: Trending Vibes */}
      <motion.div
        className="p-6 rounded-2xl text-white shadow-lg"
        style={{ backgroundColor: `${colors.secondary}dd` }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-5">
          Trending Vibes <span className="text-[#FFD700]">Analytics</span>
        </h2>

        <ul className="space-y-4">
          {vibes.map((vibe, index) => (
            <li key={index}>
              <div className="flex justify-between mb-1 text-sm font-medium text-[#FFD700]">
                <span>{vibe.label}</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${vibe.value}%`,
                    backgroundColor: "#FFD700",
                  }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right: Chart */}
      <motion.div
        className="p-6 rounded-2xl text-white shadow-lg flex flex-col justify-between"
        style={{ backgroundColor: `${colors.secondary}dd` }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">
          Hourly Demand & <span className="text-[#FFD700]">Supply Trend</span>
        </h2>

        <div className="flex-1">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" stroke="#aaa" tick={{ fill: "#aaa", fontSize: 12 }} />
              <YAxis stroke="#aaa" tick={{ fill: "#aaa", fontSize: 12 }} />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#FFD700"
                strokeWidth={2}
                dot={{ fill: "#FFD700" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default TrendSection;
