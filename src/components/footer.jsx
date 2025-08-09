import React from "react";
// import footerImg from "../assets/img/footer.png"; // Replace with your uploaded image path
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Logo and description */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Footer Logo"
              className="w-28 mb-4"
            />
            <p className="text-gray-400 text-sm max-w-sm text-center md:text-left">
              Your trusted partner for all property needs. Buy, sell, or rent —
              we’ve got you covered.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li><a href="/" className="hover:text-blue-400">Home</a></li>
                <li><a href="#aboutUs" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                <li><a href="#contactUs" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <ul className="space-y-1">
                <li>📞 +91 9421995521</li>
                <li>📧 info@example.com</li>
                <li>📍 Aurangabad, Maharashtra</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
