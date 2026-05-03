import { Link } from "react-router-dom";
import logo from "../assets/images/logo-without-BG.png";

const CtaBanner = () => {
  return (
    <section className="bg-red-600 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Left - Logo Box */}
        <div className="bg-white rounded-lg px-6 py-4 flex items-center shrink-0">
          <img
            src={logo}
            alt="SBS Group Bharat"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Middle - Text */}
        <p className="text-white font-semibold text-base lg:text-lg text-center flex-1 px-4">
          An Emerging Leader in Security, Facility Management and Cash Logistics
        </p>

        {/* Right - CTA Button */}
        <Link
          to="/contact"
          className="border-2 border-white text-white px-6 py-3 font-bold rounded-lg tracking-wider hover:bg-white hover:text-red-600 transition duration-300 whitespace-nowrap shrink-0"
        >
          GET IN TOUCH
        </Link>

      </div>
    </section>
  );
};

export default CtaBanner;