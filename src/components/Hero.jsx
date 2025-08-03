import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#040710] p-20 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Find Your <span className="text-cyan-400">Perfect PG</span> in Seconds
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Discover budget-friendly and comfortable PGs with the amenities you need — right where you want to be.
        </p>
        <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 px-8 rounded-xl transition-all duration-300">
          Find a PG
        </button>
      </div>
    </section>
  );
};

export default Hero;

