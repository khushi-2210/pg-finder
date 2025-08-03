// import React from "react";

// const Hero = () => {
//   return (
//     <section className="bg-[#040710] p-20 flex items-center justify-center px-6">
//       <div className="text-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//           Find Your <span className="text-cyan-400">Perfect PG</span> in Seconds
//         </h1>
//         <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
//           Discover budget-friendly and comfortable PGs with the amenities you need — right where you want to be.
//         </p>
//         <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 px-8 rounded-xl transition-all duration-300">
//           Find a PG
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React from "react";

// const Hero = () => {
//   return (
//     <section className="bg-green-50 py-20 px-6 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//           Find Your <span className="text-teal-500">Perfect PG</span> in Seconds
//         </h1>
//         <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//           Your perfect PG is out there. Affordable, comfortable, and just around the corner.
//         </p>
//         <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300">
//           Find a PG
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 flex items-center justify-center"
      style={{
        backgroundImage: "url('/nightscape.jpg')",
      }}
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-white/20 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blackmb-4">
          Find Your <span className="text-teal-500">Perfect PG</span> in Seconds
        </h1>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Your perfect PG is out there. Affordable, comfortable, and just around the corner.
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300">
          Find a PG
        </button>
      </div>
    </section>
  );
};

export default Hero;



