const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-800 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} PG Finder. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
