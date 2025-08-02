// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-blue-600">PG Finder</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:text-blue-500">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">About</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Browse PG</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">List Your PG</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
