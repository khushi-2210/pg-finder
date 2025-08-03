// Navbar.jsx
// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-gray-950 border-b border-gray-800 shadow-md backdrop-blur sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-white tracking-wide">
//           PG<span className="text-cyan-400">Finder</span>
//         </h1>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-8 text-sm font-medium">
//           <a href="#" className="text-gray-300 hover:text-cyan-400 transition">
//             Home
//           </a>
//           <a href="#" className="text-gray-300 hover:text-cyan-400 transition">
//             Listings
//           </a>
//           <a href="#" className="text-gray-300 hover:text-cyan-400 transition">
//             About
//           </a>
//           <a href="#" className="text-gray-300 hover:text-cyan-400 transition">
//             Contact
//           </a>
//         </nav>

//         {/* Mobile Toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-300 focus:outline-none"
//           >
//             {isOpen ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <nav className="md:hidden px-6 pb-4 flex flex-col space-y-3 bg-gray-950 text-sm">
//           <a href="#" className="text-gray-300 hover:text-cyan-400 transition">
//             Home
//           </a>
//           <a href="#" className="text-gray-300 hover:text-cyan-400 transition">
//             Listings
//           </a>
//           <a href="#" className="text-gray-300 hover:text-cyan-400 transition">
//             About
//           </a>
//           <a href="#" className="text-gray-300 hover:text-cyan-400 transition">
//             Contact
//           </a>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-teal-100 border-b border-teal-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          PG<span className="text-teal-500">Finder</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="text-gray-600 hover:text-teal-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-600 transition">
            Listings
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-600 transition">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-600 transition">
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col space-y-3 bg-white text-sm">
          <a href="#" className="text-gray-600 hover:text-teal-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-600 transition">
            Listings
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-600 transition">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-600 transition">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;


