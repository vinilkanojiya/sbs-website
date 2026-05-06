import React from "react";
import arjunImg from "../assets/images/Arjun-image.png"; 
import ravindraImg from "../assets/images/Ravindra-image.png"; 

const pillars = [
  { id: 1, title: "Owner Mindset" },
  { id: 2, title: "Challenging Status – Quo" },
  { id: 3, title: "Frontline Obsession" },
];

export default function CultureAndValues() {
  return (
    <>
     {/* ===== CULTURE AND VALUES SECTION ===== */}
<section className="bg-gray-50 py-16 px-6 md:px-16">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
      Culture and <span className="text-red-600">Values</span>
    </h2>
    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
      We are committed to building a strong organizational culture driven
      by trust, people focus, and service spirit. Our goal is to create an
      environment where individuals grow, perform, and contribute to
      excellence.
    </p>

    {/* Main Grid - Values Left + Being Trustworthy Right */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* Left - Core Values Vertical */}
      <div className="flex flex-col gap-6">

        {/* Trust */}
        <div className="bg-red-600 p-6 rounded-2xl shadow hover:shadow-xl transition flex items-start gap-4">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">
            <span className="text-red-600 text-lg font-bold">01</span>
          </div>
          <div>
            <h3 className="text-xl text-white font-semibold mb-1">Trust</h3>
            <p className="text-red-100 text-sm leading-relaxed">
              We believe trust is the foundation of a thriving organization.
              Every team member is expected to act with honesty, integrity,
              and accountability.
            </p>
          </div>
        </div>

        {/* People Focus */}
        <div className="bg-red-200 p-6 rounded-2xl shadow hover:shadow-xl transition flex items-start gap-4">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">
            <span className="text-gray-800 text-lg font-bold">02</span>
          </div>
          <div>
            <h3 className="text-xl text-black font-semibold mb-1">
              People Focus
            </h3>
            <p className="text-black-300 text-sm leading-relaxed">
              We prioritize our people by providing opportunities for growth,
              learning, and career advancement for individuals of all
              backgrounds and capabilities.
            </p>
          </div>
        </div>

        {/* Service Spirit */}
        <div className="bg-rose-500 p-6 rounded-2xl shadow hover:shadow-xl transition flex items-start gap-4">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">
            <span className="text-rose-500 text-lg font-bold">03</span>
          </div>
          <div>
            <h3 className="text-xl text-white font-semibold mb-1">
              Service Spirit
            </h3>
            <p className="text-rose-100 text-sm leading-relaxed">
              We strive to deliver excellence through a strong service
              mindset, ensuring quality, commitment, and value in everything
              we do.
            </p>
          </div>
        </div>

      </div>

      {/* Right - Being Trustworthy */}
      <div className="bg-white p-8 rounded-2xl shadow h-full border-t-4 border-red-600">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Being <span className="text-red-600">Trustworthy</span>
        </h3>
        <div className="w-12 h-1 bg-red-600 mb-6" />
        <p className="text-gray-600 leading-relaxed mb-4">
          A member of our organization understands that trust is the most
          important aspect of a successful workplace. Being knowledgeable,
          responsible, and solution-oriented is key to building this trust.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          We uphold honesty and integrity in all our actions. Our team
          members are encouraged to be fair, transparent, and proactive in
          preventing unethical practices while inspiring others to do the
          same.
        </p>

        {/* Key Points */}
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <p className="text-gray-700 text-sm">Honesty in every action</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <p className="text-gray-700 text-sm">Transparency at all levels</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <p className="text-gray-700 text-sm">Accountability in results</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <p className="text-gray-700 text-sm">Ethics in workplace</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* ===== FOUNDER'S MENTALITY SECTION ===== */}
<section className="bg-white py-16 px-6 md:px-16">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="grid md:grid-cols-2 gap-12 items-start">

      {/* Left Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Founder's <span className="text-red-600">Mentality</span>
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          Since our inception, our employees have been our topmost priority
          as they are our brand ambassadors who regularly interact with our
          esteemed clients.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          Hence, it's our utmost priority to synergize each SBS employee
          with the culture of the SBS Group, which has three key pillars –
        </p>

        {/* Three Pillars */}
        <div className="flex flex-col gap-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="border-l-4 border-red-600 bg-red-50 px-4 py-3"
            >
              <p className="font-semibold text-gray-800">{pillar.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Founders Cards */}
      <div className="flex flex-col gap-6">

        {/* Founder 1 */}
        <div className="flex items-center gap-6 bg-gray-50 rounded-2xl p-6 shadow">
          {/* Placeholder Image */}
          <img
            src={arjunImg}
            alt="Arjun Karta"
            className="w-24 h-24 rounded-full object-cover shrink-0"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-900">Arjun Karta</h3>
            <p className="text-red-600 font-semibold text-sm mb-2">
              Co-Founder & Director
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              A visionary leader with a strong commitment to building a
              trusted and reliable security services organization across
              India.
            </p>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="flex items-center gap-6 bg-gray-50 rounded-2xl p-6 shadow">
          {/* Placeholder Image */}
          <img
  src={ravindraImg}
  alt="Ravindra Singh Parihar"
  className="w-24 h-24 rounded-full object-cover shrink-0"
/>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Ravindra Singh Parihar
            </h3>
            <p className="text-red-600 font-semibold text-sm mb-2">
              Co-Founder & Director
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              An experienced professional dedicated to operational
              excellence and delivering scalable security and facility
              management solutions.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
  );
}