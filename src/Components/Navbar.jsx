import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex px-6 py-4 gap-5 text-white bg-purple-300">
      <NavLink className="hover:text-purple-600" to="/">Home</NavLink>
      <NavLink className="hover:text-purple-600" to="/Allcotes">Allcotes</NavLink>
    </div>
  );
}

export default Navbar;
