import { FaFacebook, FaLinkedin } from "react-icons/fa";
import homelogo from "../../assets/homelogo.avif";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-3 mb-4">
            <img src={homelogo} alt="Home Repair Logo" className="h-12 w-12" />
            <span className="text-xl font-bold">RepairNest</span>
          </div>
          <p className="text-sm text-gray-400">
            At RepairNest, we provide top-quality home repair and maintenance
            solutions to make your life easier. Your satisfaction is our
            priority.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-400 hover:text-white">
                Our Services
              </a>
            </li>
            <li>
              <a href="/faq" className="text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/sharif.943309"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-sharif-b25346327"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Email:{" "}
            <a href="mdsh8692@gmail.com" className="hover:text-white">
              mdsh8692@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-400">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-white">
              +8801580515003
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RepairNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
