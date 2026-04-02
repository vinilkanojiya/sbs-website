import { Link } from "react-router-dom";
import careerImg from "../assets/images/We-Are-Hiring.jpg";

const CareerSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* 🔹 LEFT IMAGE */}
        <div className="w-full h-[350px] md:h-[450px]">
          <img
            src={careerImg}
            alt="Career opportunities"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* 🔹 RIGHT CONTENT */}
        <div>

          {/* Heading */}
          <h2 className="text-bg-gray-100 text-2xl md:text-3xl font-bold rounded-md">
            Career Opportunities
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-700 leading-relaxed">
            At Secure Business Services Pvt. Ltd., we believe that our people
            are our greatest strength. We focus on building a skilled and
            professional workforce that drives growth and excellence.
          </p>

          {/* Sub Paragraph */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            Join us and be part of a dynamic environment where learning,
            teamwork, and innovation are valued every day.
          </p>

          {/* CTA Button (Outline Style) */}
          <Link
            to="/careers"
            className="inline-block mt-6 bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 hover:text-white transition"
          >
            Join Now
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CareerSection;