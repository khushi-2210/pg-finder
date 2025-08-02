// import React from "react";

// const features = [
//   {
//     title: "Search Functionality",
//     desc: "Find PGs easily by entering location, city, or landmarks.",
//   },
//   {
//     title: "Filtering Options",
//     desc: "Refine your search by price, amenities like Wi-Fi, AC, food, and room type.",
//   },
//   {
//     title: "Detailed PG Listings",
//     desc: "View full details: photos, amenities, rules, and contact info.",
//   },
//   {
//     title: "User Reviews & Ratings",
//     desc: "Read and share reviews to make better choices.",
//   },
// ];

// const Features = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

const features = [
  {
    title: "Search Easily",
    description: "Look for PGs by city, area, or landmark in seconds.",
    icon: "🔍",
  },
  {
    title: "Advanced Filters",
    description: "Sort by price, amenities, room type, and more.",
    icon: "🎛️",
  },
  {
    title: "Verified Listings",
    description: "Detailed listings with photos, rules, and contact info.",
    icon: "🏡",
  },
  {
    title: "User Reviews",
    description: "Check honest ratings and feedback from past tenants.",
    icon: "⭐",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Features You'll Love
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-blue-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600 text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

