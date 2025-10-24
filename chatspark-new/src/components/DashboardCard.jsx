import React from "react";

export default function DashboardCard({ title, value, subtext }) {
  return (
    <div className="bg-[#11162a] rounded-2xl p-5 shadow-md hover:shadow-lg transition-all">
      <h3 className="text-yellow-400 text-sm font-semibold mb-1">{title}</h3>
      <p className="text-3xl font-bold text-white">{value}</p>
      {subtext && <p className="text-gray-400 text-xs mt-1">{subtext}</p>}
    </div>
  );
}
