import Navbar from "../components/Navbar"; 
import Hero from "../components/Hero";
import PGListings from "../components/PGListings";
import Reviews from "../components/Reviews.jsx";
import Footer from "../components/Footer.jsx";
import CTASection from "../components/CTASection.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PGListings />
      <Reviews />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;


