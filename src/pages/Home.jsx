import Navbar from "../components/Navbar"; 
import Hero from "../components/Hero";
import Features from "../components/Features.jsx";
import PGListings from "../components/PGListings.jsx";
import Filters from "../components/Filters.jsx";
import Reviews from "../components/Reviews.jsx";
import Footer from "../components/Footer.jsx";
import CTASection from "../components/CTASection.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <PGListings />
      <Filters />
      <Reviews />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
