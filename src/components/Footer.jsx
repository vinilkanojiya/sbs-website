import { Link } from "react-router-dom";
import { useState } from "react";

// ===== COPY BUTTON COMPONENT =====
const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-gray-400 hover:text-yellow-400 transition ml-1"
      title="Copy"
    >
      {copied ? (
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
};

// ===== FOOTER COMPONENT =====
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-center md:text-left">

        {/* About */}
        <div className="max-w-sm mx-auto md:mx-0 lg:col-span-1">
          <h3 className="text-white font-semibold mb-4">
            About SBS Group
          </h3>
          <p className="text-sm leading-relaxed">
            Secure Business Services Pvt. Ltd. provides Security, Facility
            Management and Cash Logistics solutions with a focus on
            reliability, efficiency and growth.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
            <li>
              <Link to="/company/about/culture-and-values" className="hover:text-yellow-400 transition">
                Culture And Values
              </Link>
            </li>
            <li>
              <Link to="/company/about/founder" className="hover:text-yellow-400 transition">
                Founder
              </Link>
            </li>
            <li>
              <Link to="/company/about/training-and-development" className="hover:text-yellow-400 transition">
                Training And Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Solutions
          </h3>
          <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
            <li>
              <Link to="/solutions/security" className="hover:text-yellow-400 transition">
                Security Solutions
              </Link>
            </li>
            <li>
              <Link to="/solutions/facility" className="hover:text-yellow-400 transition">
                Facility Management
              </Link>
            </li>
            <li>
              <Link to="/solutions/logistics" className="hover:text-yellow-400 transition">
                Cash Logistics
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-yellow-400 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>
          <div className="text-sm space-y-3 flex flex-col items-center md:items-start">

            {/* Address */}
            <div className="flex items-start gap-2">
              <span>📍</span>
              <p>Indore, Madhya Pradesh</p>
              <CopyButton text="Indore, Madhya Pradesh" />
            </div>

            {/* Phone 1 */}
            <div className="flex items-center gap-2">
              <span>📞</span>
              
                <a href="tel:+919977232777"
                className="hover:text-yellow-400 transition"
              >
                +91 99772 32777
              </a>
              <CopyButton text="+91 99772 32777" />
            </div>

            {/* Phone 2 */}
            <div className="flex items-center gap-2">
              <span>📞</span>
              
                <a href="tel:+918602511596"
                className="hover:text-yellow-400 transition"
              >
                +91 86025 11596
              </a>
              <CopyButton text="+91 86025 11596" />
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <span>✉️</span>
              
                <a href="mailto:sbsgroupbharat@gmail.com"
                className="hover:text-yellow-400 transition"
              >
                sbsgroupbharat@gmail.com
              </a>
              <CopyButton text="sbsgroupbharat@gmail.com" />
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2026 Secure Business Services Pvt. Ltd. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;