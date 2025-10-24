import React from "react";
import { Star } from "lucide-react";
import colors from "../constants/colors";

export default function PerformanceCards() {
  const cardData = [
    {
      title: "Platform",
      highlight: "Engagement",
      stats: [
        {
          label: "Total Sessions Today",
          value: "2,847",
          subtext: "📈 +8.2% vs yesterday",
          color: "text-green-400",
        },
        {
          label: "Avg. Session Duration",
          value: "12.4m",
          subtext: "Minutes per session",
          color: "text-gray-300",
        },
        {
          label: "User Retention Rate",
          value: "78.5%",
          color: "text-gray-300",
        },
        {
          label: "Avg. Rating",
          icon: <Star className="inline-block w-5 h-5 text-yellow-400 mr-1" />,
          value: "4.7",
          color: "text-gray-300",
        },
      ],
    },
    {
      title: "Mood Matching",
      highlight: "Performance",
      stats: [
        {
          label: "Successful Matches",
          value: "1,284",
          subtext: "📈 87% success rate",
          color: "text-green-400",
        },
        {
          label: "Avg. Match Time",
          value: "2.3m",
          subtext: "Time to find match",
          color: "text-gray-300",
        },
        {
          label: "Repeat Matches",
          value: "73%",
          color: "text-gray-300",
        },
        {
          label: "Avg. Rating",
          icon: <Star className="inline-block w-5 h-5 text-yellow-400 mr-1" />,
          value: "4.6",
          color: "text-gray-300",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-8xl mx-auto p-6">
      {cardData.map((card, i) => (
        <div
          key={i}
          className="rounded-3xl shadow-lg p-8 flex flex-col justify-between text-left transition-all duration-300 hover:shadow-2xl"
          style={{
            backgroundColor: colors.secondary,
            color: colors.textPrimary,
          }}
        >
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            {card.title}{" "}
            <span style={{ color: colors.accent }}>{card.highlight}</span>
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-y-6 sm:gap-y-8">
            {card.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start">
                <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                <p className={`text-2xl sm:text-3xl font-semibold ${stat.color}`}>
                  {stat.icon}
                  {stat.value}
                </p>
                {stat.subtext && (
                  <p className="text-xs text-gray-500 mt-1">{stat.subtext}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

