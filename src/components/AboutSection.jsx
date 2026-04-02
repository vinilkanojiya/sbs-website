import { Link } from "react-router-dom";
import operatorImg from "../assets/images/security-operator.jpg"; // your image

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* 🔹 LEFT CONTENT */}
        <div>

          {/* Heading */}
         <h2 className=" text-bg-gray-900 text-2xl md:text-3xl font-bold leading-snug">
                SBS Pvt. Ltd. delivers trusted Security, Facility Management, and Cash Logistics solutions across India.
        </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 leading-relaxed">
            As a growing India-based company, we focus on reliability, professionalism, and operational excellence to support businesses with efficient and scalable service solutions.
          </p>

          {/* Sub Paragraph */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            While our foundation is built on skilled manpower, technology strengthens our capabilities—helping us deliver smarter, faster, and more effective services.
          </p>

          {/* Button */}
          <Link
            to="/company"
            className="inline-block mt-6 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Know More
          </Link>

        </div>

        {/* 🔹 RIGHT IMAGE */}
        <div className="w-full h-[350px] md:h-[450px]">
          <img
            src={operatorImg}
            alt="Security operator monitoring systems"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;