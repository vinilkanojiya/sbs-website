import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo-without-BG.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutopen, setAboutOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-900 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="SBS Logo"
              className="h-10 w-auto object-contain"
            />

            {/* Hide on mobile, show on md+
            <span className="hidden md:inline text-2xl font-bold leading-none">
              SBS
            </span> */}
          </Link>

        {/* 🔥 Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-md font-medium items-center" >

          <Link to="/" className="hover:text-blue-400">Home</Link>

          {/* Company */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-blue-400">
              Company ▾
            </span>

            <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
              <div className="bg-white text-black w-56 shadow-lg">
                {/* <Link to="/company/about" className="block px-4 py-2 hover:bg-gray-100">About SBS Group Enterprises</Link> */}
                {/*  */}
                     <div className="relative group/security">
                    <div className="block px-4 py-2 hover:bg-gray-100">
                      About SBS Group Enterprises ▸
                    </div>

                    <div className="absolute top-0 left-full hidden group-hover/security:block bg-gray-100 w-40">
                      <Link to="/company/about/culture-and-values" className="block px-4 py-2 hover:bg-gray-200">Culture And Values</Link>
                      <Link to="/company/about/founder" className="block px-4 py-2 hover:bg-gray-200">Founder</Link>
                    </div>
                  </div>
                {/*  */}
                <Link to="/company/board" className="block px-4 py-2 hover:bg-gray-100">Board Of Directors</Link>
                <Link to="/company/management" className="block px-4 py-2 hover:bg-gray-100">Group Management Committee</Link>
                <Link to="/company/news" className="block px-4 py-2 hover:bg-gray-100">News & Media</Link>
                 <Link to="/company/training-and-development" className="block px-4 py-2 hover:bg-gray-100">Training And Development </Link>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-blue-400">
              Solutions ▾
            </span>

            <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
              <div className="flex bg-white text-black shadow-lg">

                <div className="w-72">
                  <div className="relative group/security">
                    <div className="block px-4 py-2 hover:bg-gray-100">
                      Security Solutions ▸
                    </div>

                    <div className="absolute top-0 left-full hidden group-hover/security:block bg-gray-100 w-40">
                      <Link to="/solutions/security/india" className="block px-4 py-2 hover:bg-gray-200">India</Link>
                      <Link to="/solutions/security/international" className="block px-4 py-2 hover:bg-gray-200">International</Link>
                    </div>
                  </div>

                  <Link to="/solutions/facility" className="block px-4 py-2 hover:bg-gray-100">Facility Management Solutions</Link>
                  <Link to="/solutions/logistics" className="block px-4 py-2 hover:bg-gray-100">Cash Logistics Solutions</Link>
                </div>

              </div>
            </div>
          </div>

          <Link to="/investors" className="hover:text-blue-400">Investors</Link>
          <Link to="/careers" className="hover:text-blue-400">Careers</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4">

          <Link to="/" className="block">Home</Link>

          {/* Company */}
          <div>
            <button onClick={() => setCompanyOpen(!companyOpen)}>
              Company ▾
            </button>

            {companyOpen && (
              <div className="ml-4 mt-2 space-y-2">

                {/* About */}
                <div>
                  <button onClick={() => setAboutOpen(!aboutopen)}>
                    About SBS Group Enterprises ▾
                  </button>

                  {aboutopen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link to="/company/about/culture-and-values" className="block">Culture And Values</Link>
                      <Link to="/company/about/founder" className="block">Founder</Link>
                    </div>
                  )}
                </div>
                {/* <Link to="/company/about" className="block">About SBS Group Enterprises ▾</Link> */}

                <Link to="/company/board" className="block">Board Of Directors</Link>
                <Link to="/company/management" className="block">Group Management Committee</Link>
                <Link to="/company/news" className="block">News & Media</Link>
                <Link to="/company/news" className="block">Training And Development </Link>
              </div>
            )}
          </div>

          {/* Solutions */}
          <div>
            <button onClick={() => setSolutionOpen(!solutionOpen)}>
              Solutions ▾
            </button>

            {solutionOpen && (
              <div className="ml-4 mt-2 space-y-2">

                {/* Security */}
                <div>
                  <button onClick={() => setSecurityOpen(!securityOpen)}>
                    Security ▾
                  </button>

                  {securityOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link to="/solutions/security/india" className="block">India</Link>
                      <Link to="/solutions/security/international" className="block">International</Link>
                    </div>
                  )}
                </div>

                <Link to="/solutions/facility" className="block">Facility</Link>
                <Link to="/solutions/logistics" className="block">Logistics</Link>
              </div>
            )}
          </div>

          <Link to="/investors" className="block">Investors</Link>
          <Link to="/careers" className="block">Careers</Link>
          <Link to="/contact" className="block">Contact Us</Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;