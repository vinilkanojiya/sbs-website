import { Link } from "react-router-dom";

const TrainingAndDevelopment = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16 md:py-8">
      <div className="max-w-3xl mx-auto text-center">

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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
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
          Training & Development
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-10">
          We are building a comprehensive Training and Development page to
          showcase our structured learning programs, specialised training
          modules and continuous development initiatives for our security
          and facility management professionals.
        </p>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl shadow p-5 border-t-4 border-red-600">
            <p className="text-3xl mb-3">🎓</p>
            <p className="font-semibold text-gray-800 text-sm">
              Induction Training
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 border-t-4 border-red-600">
            <p className="text-3xl mb-3">🛡️</p>
            <p className="font-semibold text-gray-800 text-sm">
              Specialised Security Training
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 border-t-4 border-red-600">
            <p className="text-3xl mb-3">📱</p>
            <p className="font-semibold text-gray-800 text-sm">
              Digital Learning
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 border-t-4 border-red-600">
            <p className="text-3xl mb-3">📈</p>
            <p className="font-semibold text-gray-800 text-sm">
              Continuous Development
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

export default TrainingAndDevelopment;