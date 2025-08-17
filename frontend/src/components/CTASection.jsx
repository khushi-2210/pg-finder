import React from "react";

const CTASection = ({ handleSearchClick, handleListPGClick }) => {
  return (
    <section
      className="relative bg-cover bg-center py-20 px-6 mb-0 text-center text-white"
      style={{ backgroundImage: "url('/room.jpg')" }} 
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-yellow-100/10"></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Tired of PG roulette? Let’s end the madness.
        </h2>
        <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
          Making PG-hunting smoother, simpler, and a little more fun (okay, a lot more fun)
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={handleSearchClick}
            className="bg-yellow-400 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Start Searching
          </button>
          <button
            onClick={handleListPGClick}
            className="bg-transparent border border-yellow-500 text-gray-700 hover:bg-yellow-500 hover:border-yellow-400 hover:text-white py-3 px-6 rounded-full font-semibold transition duration-300"
          >
            List Your PG
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;