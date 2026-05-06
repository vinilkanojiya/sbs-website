import { Link } from "react-router-dom";
import arjunImg from "../assets/images/arjun-image.png";
import ravindraImg from "../assets/images/ravindra-image.png";

const Founder = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Our <span className="text-red-600">Founders</span>
          </h1>
          <div className="w-12 h-1 bg-red-600 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Arjun Karta and Ravindra Singh Parihar are the co-founders of SBS
            Group Bharat — visionary leaders committed to building a trusted
            and reliable security services organization across Madhya Pradesh.
          </p>
        </div>
      </section>

      {/* ===== ABOUT FOUNDERS ===== */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-red-600">The Founders</span>
          </h2>

          {/* ===== FOUNDER 1 - ARJUN KARTA ===== */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

            {/* Left - Image */}
            <div className="flex justify-center">
              <img
                src={arjunImg}
                alt="Arjun Karta"
                className="w-full max-w-sm h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Right - Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Mr. Arjun Karta
              </h3>
              <p className="text-red-600 font-semibold mb-3">
                Co-Founder & Director
              </p>
              <div className="w-10 h-1 bg-red-600 mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Mr. Arjun Karta is the Co-Founder and Director of SBS Group
                Bharat. A first-generation entrepreneur with a strong vision
                to establish a trusted security services company across Madhya
                Pradesh and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                With a deep understanding of the security industry, Mr. Karta
                has been instrumental in building a professional and disciplined
                workforce. His leadership focuses on delivering reliable,
                people-first security solutions to businesses and institutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Under his guidance, SBS Group Bharat has established itself as
                an emerging leader in Security Solutions, Facility Management,
                and Cash Logistics services, with a strong commitment to quality
                and operational excellence.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 my-12" />

          {/* ===== FOUNDER 2 - RAVINDRA SINGH PARIHAR ===== */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left - Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Mr. Ravindra Singh Parihar
              </h3>
              <p className="text-red-600 font-semibold mb-3">
                Co-Founder & Director
              </p>
              <div className="w-10 h-1 bg-red-600 mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Mr. Ravindra Singh Parihar is the Co-Founder and Director of
                SBS Group Bharat. A seasoned professional with extensive
                experience in operations and service delivery, he brings strong
                leadership and strategic thinking to the organization.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mr. Parihar has been a driving force behind building the
                operational framework of SBS Group Bharat. His hands-on
                approach and attention to detail ensure that every client
                receives the highest standard of service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                His dedication to workforce development and client satisfaction
                has helped SBS Group Bharat build a reputation for reliability,
                professionalism, and trust across all its service verticals.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <img
                src={ravindraImg}
                alt="Ravindra Singh Parihar"
                className="w-full max-w-sm h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Founder;