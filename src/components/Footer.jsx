import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">

        {/* About */}
        <div className="max-w-sm mx-auto md:mx-0">
          <h3 className="text-white font-semibold mb-4">
            About SBS Group
          </h3>

          <p className="text-sm whitespace-pre-line leading-relaxed">
{`Secure Business Services Pvt. Ltd.
provides Security, Facility
Management and Cash Logistics
solutions with a focus on
reliability, efficiency and growth.`}
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
            <li><Link to="/company/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/company/board" className="hover:text-yellow-400">Board</Link></li>
            <li><Link to="/company/management" className="hover:text-yellow-400">Management</Link></li>
            <li><Link to="/company/news" className="hover:text-yellow-400">News</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Solutions
          </h3>

          <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
            <li><Link to="/solutions/security/india" className="hover:text-yellow-400">Security India</Link></li>
            <li><Link to="/solutions/security/international" className="hover:text-yellow-400">Security International</Link></li>
            <li><Link to="/solutions/facility" className="hover:text-yellow-400">Facility</Link></li>
            <li><Link to="/solutions/logistics" className="hover:text-yellow-400">Logistics</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <div className="text-sm space-y-2 flex flex-col items-center md:items-start">
            <p>Secure Business Services Pvt. Ltd.</p>
            <p>India</p>
            <p>+91-XXXXXXXX</p>
            <p>info@sbs.com</p>
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