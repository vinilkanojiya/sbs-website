import React from "react";

export default function CultureAndValues() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          About Us
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We are committed to building a strong organizational culture driven by
          trust, people focus, and service spirit. Our goal is to create an
          environment where individuals grow, perform, and contribute to
          excellence.
        </p>

        {/* Core Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-orange-500 p-6 rounded-2xl shadow hover:shadow-2xl transition">
            <h3 className="text-xl text-white font-semibold mb-3">Trust</h3>
            <p className="text-white">
              We believe trust is the foundation of a thriving organization.
              Every team member is expected to act with honesty, integrity, and
              accountability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">People Focus</h3>
            <p className="text-gray-600">
              We prioritize our people by providing opportunities for growth,
              learning, and career advancement for individuals of all
              backgrounds and capabilities.
            </p>
          </div>

          <div className="bg-green-600 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl text-white font-semibold mb-3">Service Spirit</h3>
            <p className="text-white">
              We strive to deliver excellence through a strong service mindset,
              ensuring quality, commitment, and value in everything we do.
            </p>
          </div>
        </div>

        {/* Trust Detail Section */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold mb-4">Being Trustworthy</h3>
          <p className="text-gray-600 mb-4">
            A member of our organization understands that trust is the most
            important aspect of a successful workplace. Being knowledgeable,
            responsible, and solution-oriented is key to building this trust.
          </p>
          <p className="text-gray-600">
            We uphold honesty and integrity in all our actions. Our team members
            are encouraged to be fair, transparent, and proactive in preventing
            unethical practices while inspiring others to do the same.
          </p>
        </div>
      </div>
    </section>
  );
}
