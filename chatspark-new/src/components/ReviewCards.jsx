import React from "react";
import colors from "../constants/colors";

export default function ReviewCards() {
  const cardData = [
    {
      title: "Pending",
      highlight: "Applications",
      value: "45",
      subtext: "📈 +8 vs yesterday",
    },
    {
      title: "Creators Under",
      highlight: "Review",
      value: "12",
      subtext: "Avg. review time: 2.3 days",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-8xl mx-auto p-6"
      style={{ backgroundColor: colors.primary }}
    >
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center rounded-3xl text-center shadow-md transition-all duration-300 hover:shadow-xl"
          style={{
            backgroundColor: colors.secondary,
            height: "180px",
          }}
        >
          <h2
            className="text-xl sm:text-2xl font-semibold mb-2"
            style={{ color: colors.textPrimary }}
          >
            {card.title}{" "}
            <span className="font-bold" style={{ color: colors.accent }}>
              {card.highlight}
            </span>
          </h2>

          <p
            className="text-4xl sm:text-5xl font-bold mb-2"
            style={{ color: colors.textPrimary }}
          >
            {card.value}
          </p>

          <p className="text-sm" style={{ color: colors.textSecondary }}>
            {card.subtext}
          </p>
        </div>
      ))}
    </div>
  );
}
