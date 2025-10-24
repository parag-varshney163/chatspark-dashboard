import React from "react";
import colors from "../constants/colors";
import { Star } from "lucide-react"; // optional (if you have lucide-react installed)

const cards = [
  {
    title: "Expert Consultations",
    data: [
      { label: "Sessions Today", value: "247", info: "+12 vs yesterday" },
      { label: "Avg. Duration", value: "18.5m", sub: "Minutes per session" },
      { label: "Revenue Today", value: "$4,940" },
      { label: "Satisfaction Rate", value: "4.8", icon: <Star size={14} fill="#FFD700" color="#FFD700" /> },
    ],
  },
  {
    title: "Gaming & Challenges",
    data: [
      { label: "Games Played", value: "1,847", info: "+25 vs yesterday" },
      { label: "Avg. Duration", value: "634", sub: "Currently playing" },
      { label: "Challenges Won", value: "892" },
      { label: "Avg. Game Time", value: "12.3m" },
    ],
  },
  {
    title: "Call Connection Analytics",
    data: [
      { label: "Connection Success Rate", value: "94.2%", info: "+2.1% vs last week" },
      { label: "Avg. Wait Time", value: "1.8m", sub: "Before connection" },
      { label: "Peak Hours", value: "8–11 PM" },
      { label: "Repeat Calls", value: "67%" },
    ],
  },
];

const AnalyticsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="rounded-3xl p-6 sm:p-8 shadow-lg transition-transform transform hover:scale-[1.02]"
          style={{
            background: `linear-gradient(160deg, ${colors.secondary}, ${colors.primary})`,
          }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
            {card.title.split(" ").map((word, i) => (
              <span
                key={i}
                className={i === card.title.split(" ").length - 1 ? "text-[#FFD700]" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </h2>

          <div className="grid grid-cols-2 gap-y-4 text-gray-300 text-sm sm:text-base">
            {card.data.map((d, i) => (
              <div key={i}>
                <p className="text-gray-400">{d.label}</p>
                <div className="flex items-center gap-1 text-white text-lg sm:text-xl font-semibold">
                  {d.icon}
                  {d.value}
                </div>
                {d.info && <p className="text-green-400 text-xs">{d.info}</p>}
                {d.sub && <p className="text-gray-500 text-xs">{d.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;
