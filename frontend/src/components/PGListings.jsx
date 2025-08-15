import React from "react";
import { motion } from "framer-motion";
import PGCard from "./PGCard";

const PGListings = () => {
  // Dummy PG data
  const listings = [
    {
      name: "Sunshine Residency",
      location: "Mumbai",
      price: 8500,
      image: "https://imgs.search.brave.com/Sk-5RBh_1vrAl5Kd0U5rRxcnEoi593ijNxkCGn8VQvI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDIx/L1NlcC8yMy9QaG90/b19oNDAwX3c1NDAv/R1IyLTIzNjcwNy0x/MTE2MTIzXzQwMF81/NDAuanBn",
      amenities: ["WiFi", "Laundry", "Geyser", "AC"],
    },
    {
      name: "Green Leaf PG",
      location: "Delhi - Saket",
      price: 10000,
      image: "https://imgs.search.brave.com/r4Mj10Xoa0p-64C4p5Pmn2uGPzI70BspQC5PRFB3Znc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDI1/L0p1bC8zMS9QaG90/b19oNDAwX3c1NDAv/R1IyLTUwMjg3MS0y/NTQ0MjQ1XzQwMF81/NDAuanBlZw",
      amenities: ["WiFi", "TV", "Kitchen", "Housekeeping"],
    },
    {
      name: "Blue Horizon Stay",
      location: "Bangalore",
      price: 9500,
      image: "https://imgs.search.brave.com/FDBodDTQIBrNOIJDmVYKcE8gAsCb82XIa8a7-UHj_go/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8yMC8yMi8xNS9y/b29tLTMwOTU0ODNf/NjQwLmpwZw",
      amenities: ["WiFi", "Laundry", "CCTV Security"],
    },
  ];

  return (
    <section className="relative py-20 bg-yellow-50">
      {/* Decorative top divider */}
      <svg
        className="absolute top-0 left-0 w-full h-16 text-white"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
        fill="currentColor"
      >
        <path d="M0,54L1440,0L1440,54L0,54Z"></path>
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center font-poppins"
        >
          PG <span className="text-yellow-500">Listings</span>
        </motion.h2>

        {/* Accent underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-1 w-20 bg-yellow-500 mx-auto mt-3 mb-12 origin-left"
        ></motion.div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {listings.map((pg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <PGCard pg={pg} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PGListings;
