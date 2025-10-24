import React from "react";
import colors from "../constants/colors";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav
      className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 p-6 rounded-3xl mb-8 shadow-md"
      style={{
        background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
      }}
    >
      {/* Empty left space for symmetry (optional, for perfect centering on large screens) */}
      <div className="hidden md:block w-16" />

      {/* Center Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-center">
        Welcome Back{" "}
        <span style={{ color: colors.accent }} className="font-bold">
          User
        </span>
      </h1>

      {/* Right Logo */}
      <div className="flex justify-center md:justify-end w-16">
        <img
          src={logo}
          alt="ChatSpark"
          className="w-12 sm:w-14 md:w-16 object-contain"
        />
      </div>
    </nav>
  );
};

export default Navbar;
