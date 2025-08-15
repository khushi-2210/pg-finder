const Footer = () => {
  return (
    <footer className="bg-yellow-50 text-gray-700 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-yellow-200 pb-8">
        {/* Resources */}
        <div>
          <h4 className="text-base font-semibold text-yellow-700 mb-3">Resources</h4>
          <ul className="space-y-1 text-sm leading-relaxed">
            <li><a href="#" className="hover:text-yellow-600 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-600 transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-yellow-600 transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-600 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-base font-semibold text-yellow-700 mb-3">Get in Touch</h4>
          <p className="text-sm mb-1">
            Email: <span className="text-gray-800">support@pgfinder.com</span>
          </p>
          <p className="text-sm mb-4">
            Phone: <span className="text-gray-800">+91 xxxxx xxxxx</span>
          </p>
          <div className="flex gap-3">
            <a href="#" className="hover:text-yellow-600 text-sm transition-colors">Instagram</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="hover:text-yellow-600 text-sm transition-colors">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} PGFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;