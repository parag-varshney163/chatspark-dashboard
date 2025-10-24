import React from "react";
import colors from "../constants/colors";

const stats = [
  { title: "Total Creators", value: "1,250", info: "+112 from last month" },
  { title: "Active Creator", value: "892", info: "71% of total creators" },
  { title: "Total Calls Today", value: "3,487", info: "+18 from yesterday" },
  { title: "Mood Matches", value: "1,284", info: "87% success rate" },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((s, idx) => (
        <div
          key={idx}
          className="p-4 sm:p-6 md:p-7 rounded-2xl shadow-md transition-transform transform hover:scale-[1.02]"
          style={{ backgroundColor: `${colors.secondary}cc` }}
        >
          <p className="text-gray-400 text-sm sm:text-base">{s.title}</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1 text-white">
            {s.value}
          </h2>
          <small className="text-green-400 text-xs sm:text-sm">{s.info}</small>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
