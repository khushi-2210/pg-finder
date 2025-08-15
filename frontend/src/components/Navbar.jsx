import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] lg:w-[70%]">
      {/* Floating card-like navbar */}
      <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-lg">
        <div className="px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-white/90 flex items-center justify-center shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z" />
                </svg>
              </div>
              <span className="text-white font-semibold tracking-wide text-lg select-none">
                PGFinder
              </span>
            </div>

            {/* Middle: nav links */}
            <nav className="hidden md:flex gap-10 items-center">
              <a href="#" className="text-white hover:text-yellow-300 transition">
                Home
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition">
                Listings
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition">
                About
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition">
                Contact
              </a>
            </nav>

            {/* Right: auth buttons */}
            <div className="flex items-center gap-4">
              <a
                href="/login"
                className="hidden md:inline-block text-white hover:underline"
              >
                Login
              </a>
              <a
                href="/signup"
                className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold shadow"
              >
                Signup
              </a>

              {/* Mobile toggle */}
              <button
                className="md:hidden p-2 rounded-md text-white focus:outline-none"
                onClick={() => setIsOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-6 pb-6 pt-4 space-y-3 bg-white/10 backdrop-blur-md rounded-b-2xl">
              <a href="#" className="block text-white py-2">
                Home
              </a>
              <a href="#" className="block text-white py-2">
                Listings
              </a>
              <a href="#" className="block text-white py-2">
                About
              </a>
              <a href="#" className="block text-white py-2">
                Contact
              </a>
              <div className="pt-2 border-t border-white/20">
                <a href="/login" className="block text-white py-2">
                  Login
                </a>
                <a
                  href="/signup"
                  className="mt-2 inline-block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-black py-2 rounded-full font-semibold"
                >
                  Signup
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;