import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TravelIndia</h3>
            <p className="text-gray-400 mb-4">
              Discover the incredible beauty and diversity of India with our
              carefully curated travel packages.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/destinations/rajasthan"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Rajasthan
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations/kerala"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kerala
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations/goa"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Goa
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations/himachal-pradesh"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Himachal Pradesh
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <FiMapPin />
                <span>123 Travel Street, Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <FiPhone />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <FiMail />
                <span>info@travelindia.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TravelIndia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
