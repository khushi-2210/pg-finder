import PGCard from "./PGCard";

const dummyPGs = [
  {
    name: "Cozy PG in Saket",
    location: "Delhi - Saket",
    price: 7500,
    amenities: ["Wi-Fi", "AC", "Food", "Laundry"],
    image: "https://imgs.search.brave.com/Sk-5RBh_1vrAl5Kd0U5rRxcnEoi593ijNxkCGn8VQvI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDIx/L1NlcC8yMy9QaG90/b19oNDAwX3c1NDAv/R1IyLTIzNjcwNy0x/MTE2MTIzXzQwMF81/NDAuanBn",
  },
  {
    name: "Luxury PG",
    location: "Bangalore - Indiranagar",
    price: 12000,
    amenities: ["Wi-Fi", "Geyser", "Single Room"],
    image: "https://imgs.search.brave.com/r4Mj10Xoa0p-64C4p5Pmn2uGPzI70BspQC5PRFB3Znc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDI1/L0p1bC8zMS9QaG90/b19oNDAwX3c1NDAv/R1IyLTUwMjg3MS0y/NTQ0MjQ1XzQwMF81/NDAuanBlZw",
  },
   {
    id: 3,
    name: "City View PG",
    location: "Mumbai",
    price: 9000,
    amenities: ["Food", "AC", "Wi-Fi"],
    image: "https://imgs.search.brave.com/FDBodDTQIBrNOIJDmVYKcE8gAsCb82XIa8a7-UHj_go/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8yMC8yMi8xNS9y/b29tLTMwOTU0ODNf/NjQwLmpwZw",
  }
];

const PGListings = () => {
  return (
    <section className="bg-teal-50 py-20 px-6 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center m-2 mt-0">
          PG Listings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyPGs.map((pg, idx) => (
            <PGCard key={idx} pg={pg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PGListings;