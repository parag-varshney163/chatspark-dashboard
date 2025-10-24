import React, { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import colors from "../constants/colors";

const AnalyticsControls = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Today");
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const options = ["Today", "Yesterday", "7 Days", "30 Days", "60 Days", "Custom"];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    setShowCalendar(false); // hide date picker when not Custom
  };

  return (
    <div className="flex flex-wrap justify-end items-center gap-4 mb-6">
      {/* Advance Analytics Button */}
      <button
        className="px-5 py-2.5 rounded-full font-medium transition-colors"
        style={{
          backgroundColor: colors.secondary,
          color: colors.textPrimary,
        //   border: `1px solid ${colors.whiteTransparent20 || "#FFFFFF33"}`,
        }}
        onMouseEnter={(e)=>{e.target.style.backgroundColor=colors.hover}}
        onMouseLeave={(e)=>{e.target.style.backgroundColor=colors.secondary}}
      >
        Advance Analytics
      </button>

      {/* Dropdown Button */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between gap-2 px-5 py-2.5 rounded-full font-medium min-w-[130px] transition-colors"
          style={{
            backgroundColor:
              selected === "Custom" ? colors.accent : colors.secondary,
            color: selected === "Custom" ? colors.primary : colors.textPrimary,
          }}
          onMouseEnter={(e)=>{e.target.style.backgroundColor=colors.hover}}
          onMouseLeave={(e)=>{e.target.style.backgroundColor=colors.secondary}}
        >
          {selected}
          <ChevronDown
            size={18}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-44 rounded-xl shadow-lg overflow-hidden z-50"
              style={{
                backgroundColor: colors.secondary,
                border: `1px solid ${colors.whiteTransparent20 || "#FFFFFF33"}`,
              }}
            >
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-2 cursor-pointer transition-colors ${
                    selected === option
                      ? "font-semibold"
                      : ""
                  }`}
                  style={{
                    color:
                      selected === option ? colors.accent : colors.textPrimary,
                  }}
                  onMouseEnter={(e) =>
                    {e.target.style.backgroundColor = colors.hover,
                        e.target.style.color=colors.textPrimary
                    }

                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = colors.secondary)
                  }
                >
                  {option}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Date Range Button — only if Custom */}
      {selected === "Custom" && (
        <div className="relative">
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-colors"
            style={{
              backgroundColor: colors.secondary,
              color: colors.textPrimary,
              border: `1px solid ${colors.whiteTransparent20 || "#FFFFFF33"}`,
            }}
          >
            <Calendar size={18} />
            {startDate && endDate
              ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
              : "Pick a date range"}
          </button>

          {showCalendar && (
            <div className="absolute right-0 mt-2 z-50">
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                inline
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AnalyticsControls;
