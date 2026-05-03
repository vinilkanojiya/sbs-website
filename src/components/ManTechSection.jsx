import securityImg from "../assets/images/security-operator.jpg";
import {Link} from "react-router-dom";

const ManTechSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ManTech <span className="text-red-600">LEADERSHIP</span>
          </h2>

          {/* Paragraph 1 */}
          <p className="text-gray-600 leading-relaxed mb-4">
            SBS Group Bharat is building a modern security approach through its
            ManTech model, which integrates human vigilance with digital
            precision. Here, technology complements the strength of our trained
            workforce. The approach is not to replace manpower but to empower
            security professionals with tools that enhance vigilance,
            coordination, and response effectiveness.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-600 leading-relaxed mb-8">
            Our comprehensive solution begins with the identification of assets,
            threats, and vulnerabilities, followed by impact assessment, risk
            evaluation, and the implementation of a customized solution with
            periodic monitoring. This approach delivers cost-effective solutions
            that ensure proactive threat detection, faster response times, and
            real-time operational visibility across client locations.
          </p>

          {/* CTA Button */}
          <Link to = "/solutions/security">
            <button className="inline-block mt-8 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold">
              WANT TO KNOW MORE
            </button>
          </Link>
        </div>

        {/* Right Image with Red Border Effect */}
        <div className="relative">
          {/* Red Border Box */}
          <div className="absolute top-6 right-0 w-[85%] h-[90%] border-4 border-red-600 z-0" />

          {/* Image */}
          <div className="relative z-10 mr-8">
            <img
              src={securityImg}
              alt="ManTech Leadership"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ManTechSection;