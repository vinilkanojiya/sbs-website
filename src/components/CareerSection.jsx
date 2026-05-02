import { Link } from "react-router-dom";
import careerImg from "../assets/images/We-Are-Hiring.jpg";

const CareerSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid - Image + Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div className="w-full h-[350px] md:h-[450px]">
            <img
              src={careerImg}
              alt="Career opportunities"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Career <span className="text-red-600">Opportunities</span>
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              At SBS Group Bharat, we believe that our people are our greatest
              strength. We focus on building a skilled and professional
              workforce that drives growth and excellence.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Join us and be part of a dynamic environment where learning,
              teamwork, and innovation are valued every day. We welcome both
              freshers and experienced professionals to grow with us. We Are Hiring on below positions:
            </p>

            {/* We Are Hiring Tags */}
            <div className="mt-6">
              <p className="text-gray-800 font-semibold mb-3">
              
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  🎓 Freshers
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  💼 Experienced
                </span>
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                  🛡️ Field Operations (FO)
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                <p className="text-2xl font-bold text-red-600">50+</p>
                <p className="text-gray-500 text-sm mt-1">Open Positions</p>
              </div>
              <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                <p className="text-2xl font-bold text-red-600">3</p>
                <p className="text-gray-500 text-sm mt-1">Departments</p>
              </div>
              <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                <p className="text-2xl font-bold text-red-600">FO</p>
                <p className="text-gray-500 text-sm mt-1">Field Operations</p>
              </div>
            </div>

            <Link
              to="/careers"
              className="inline-block mt-8 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
            >
              View All Openings
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerSection;