// src/components/Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-200   pt-16 pb-8 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
            Cloud Enclosure
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Premium glass shower enclosures with leak-proof installation, toughened
            Saint-Gobain glass and SS304 hardware — engineered for modern homes.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fa-brands fa-facebook text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fa-brands fa-youtube text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fa-brands fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About Us</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-gray-800">Services</Link></li>
            <li><Link to="/projects" className="text-gray-600 hover:text-gray-800">Projects</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Enclosures</h4>
          <ul className="space-y-3">
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Sliding Enclosures</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">L-Shape Enclosures</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Swing Door Enclosures</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Single Panel Enclosures</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Partition Glass</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h4>
          <ul className="space-y-4 text-gray-600">
            <li>
              <strong className="text-gray-800">Phone:</strong> +91 98765 43210
            </li>
            <li>
              <strong className="text-gray-800">Email:</strong> info@cloudenclosure.com
            </li>
            <li>
              <strong className="text-gray-800">Location:</strong><br />
              Mysuru, Karnataka, India
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-14 pt-8 border-t border-gray-300 text-center text-gray-600">
        © {new Date().getFullYear()} Cloud Enclosure. All rights reserved.
      </div>
    </footer>
  );
}
