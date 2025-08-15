import React from "react";
import { motion } from "framer-motion";

const PGCard = ({ pg, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-gray-600 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-800"
    >
      {/* Image area */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={pg.image}
          alt={pg.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-75"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute left-4 bottom-4">
          <span className="inline-block bg-yellow-400 text-black font-semibold px-3 py-1 rounded-lg shadow-md">
            ₹{pg.price}/month
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <div>
          <h3 className="text-lg md:text-xl font-bold">{pg.name}</h3>
          <p className="text-sm text-gray-400 mt-1">{pg.location}</p>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2">
          {pg.amenities?.map((a, i) => (
            <span
              key={i}
              className="text-xs bg-gray-800 text-gray-200 px-3 py-1 rounded-full border border-gray-700 shadow-sm"
            >
              {a}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between gap-4">
          <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow">
            View Details
          </button>
          <div className="text-sm font-medium">
            {/* <span className="text-green-400 font-bold">₹{pg.price}</span> */}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default PGCard;
