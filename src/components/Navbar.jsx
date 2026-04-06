import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo-without-BG.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutopen, setAboutOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);

  const location = useLocation();

  // 🔥 Top-level dropdown active
  const getDropdownClass = (path) =>
    `cursor-pointer ${
      location.pathname.startsWith(path)
        ? "text-orange-500 font-semibold"
        : "hover:text-blue-400"
    }`;

  // 🔥 Sub-parent (About, Security, etc.)
  const getSubParentClass = (path) =>
    `block px-4 py-2 ${
      location.pathname.startsWith(path)
        ? "text-orange-500 font-semibold bg-orange-50"
        : "hover:bg-gray-100"
    }`;

  // 🔥 Normal NavLink
  const getNavClass = ({ isActive }) =>
    `px-2 py-1 transition ${
      isActive
        ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
        : "text-gray-700 hover:text-blue-400"
    }`;

  // 🔥 Dropdown item (final level)
  const getDropdownItemClass = ({ isActive }) =>
    `block px-4 py-2 transition ${
      isActive
        ? "bg-orange-100 text-orange-600 font-semibold border-l-4 border-orange-500"
        : "hover:bg-gray-200"
    }`;

  return (
    <nav className="bg-white text-gray-900 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="SBS Logo" className="h-10 w-auto object-contain" />
        </NavLink>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-md font-medium items-center">

          <NavLink to="/" className={getNavClass}>Home</NavLink>

          {/* Company */}
          <div className="relative group">
            <span className={getDropdownClass("/company")}>
              Company ▾
            </span>

            <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
              <div className="bg-white text-black w-56 shadow-lg">

                {/* About */}
                <div className="relative group/security">
                  <div className={getSubParentClass("/company/about")}>
                    About SBS Group Enterprises ▸
                  </div>

                  <div className="absolute top-0 left-full hidden group-hover/security:block bg-gray-100 w-44">

                    <NavLink
                      to="/company/about/culture-and-values"
                      className={getDropdownItemClass}
                    >
                      Culture And Values
                    </NavLink>

                    <NavLink
                      to="/company/about/founder"
                      className={getDropdownItemClass}
                    >
                      Founder
                    </NavLink>

                  </div>
                </div>

                <NavLink to="/company/board-of-directors" className={getDropdownItemClass}>
                  Board Of Directors
                </NavLink>

                <NavLink to="/company/group-management-committee" className={getDropdownItemClass}>
                  Group Management Committee
                </NavLink>

                <NavLink to="/company/news-and-media" className={getDropdownItemClass}>
                  News & Media
                </NavLink>

                <NavLink
                  to="/company/training-and-development"
                  className={getDropdownItemClass}
                >
                  Training And Development
                </NavLink>

              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="relative group">
            <span className={getDropdownClass("/solutions")}>
              Solutions ▾
            </span>

            <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
              <div className="flex bg-white text-black shadow-lg">

                <div className="w-72">

                  <div className="relative group/security">
                    <div className={getSubParentClass("/solutions/security")}>
                      Security Solutions ▸
                    </div>

                    <div className="absolute top-0 left-full hidden group-hover/security:block bg-gray-100 w-40">

                      <NavLink
                        to="/solutions/security/india"
                        className={getDropdownItemClass}
                      >
                        India
                      </NavLink>

                      <NavLink
                        to="/solutions/security/international"
                        className={getDropdownItemClass}
                      >
                        International
                      </NavLink>

                    </div>
                  </div>

                  <NavLink to="/solutions/facility-management-solutions" className={getDropdownItemClass}>
                    Facility Management Solutions
                  </NavLink>

                  <NavLink to="/solutions/cash-logistics-solutions" className={getDropdownItemClass}>
                    Cash Logistics Solutions
                  </NavLink>

                </div>
              </div>
            </div>
          </div>

          <NavLink to="/investors" className={getNavClass}>Investors</NavLink>
          <NavLink to="/careers" className={getNavClass}>Careers</NavLink>
          <NavLink to="/contact" className={getNavClass}>Contact Us</NavLink>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4">

          <NavLink to="/" className="block">Home</NavLink>

          <NavLink to="/company/about/culture-and-values" className="block">
            Culture And Values
          </NavLink>

          <NavLink to="/solutions/security/india" className="block">
            Security India
          </NavLink>

          <NavLink to="/investors" className="block">Investors</NavLink>
          <NavLink to="/careers" className="block">Careers</NavLink>
          <NavLink to="/contact" className="block">Contact Us</NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;