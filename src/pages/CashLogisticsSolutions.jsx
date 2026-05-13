import { Link } from "react-router-dom";

const CashLogisticsSolutions = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16 md:py-8">
      <div className="max-w-2xl mx-auto text-center">

        {/* Icon */}
        <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Coming <span className="text-red-600">Soon</span>
        </h1>

        {/* Divider */}
        <div className="w-16 h-1 bg-red-600 mx-auto mb-6" />

        {/* Subheading */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Cash Logistics Solutions
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          We are working hard to bring you our comprehensive Cash Logistics
          Solutions page. Our secure and reliable cash management services
          will be available here very soon.
        </p>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-xl shadow p-4 border-t-4 border-red-600">
            <p className="text-2xl mb-2">💰</p>
            <p className="font-semibold text-gray-800 text-sm">
              Cash Management
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 border-t-4 border-red-600">
            <p className="text-2xl mb-2">🚐</p>
            <p className="font-semibold text-gray-800 text-sm">
              Secure Transportation
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 border-t-4 border-red-600">
            <p className="text-2xl mb-2">🏦</p>
            <p className="font-semibold text-gray-800 text-sm">
              ATM Services
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-red-600 text-white px-8 py-3 font-bold rounded-lg hover:bg-red-700 transition"
          >
            Contact Us
          </Link>
          <Link
            to="/"
            className="border-2 border-red-600 text-red-600 px-8 py-3 font-bold rounded-lg hover:bg-red-600 hover:text-white transition"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CashLogisticsSolutions;