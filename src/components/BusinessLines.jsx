
// Import all images at top of file
import securityImg from "../assets/images/security-room.jpg"
import facilityImg from "../assets/images/hero-facility.jpg"
import cashImg from "../assets/images/hero-logistics.jpg"

const businessLines = [
  {
    id: 1,
    title: "SECURITY SOLUTIONS",
    image: securityImg,
    description:
      "We are committed to providing reliable and professional Security Solutions to businesses and individuals. Our trained security personnel ensure a safe and secure environment for your workplace and assets.",
    link: "/security",
  },
  {
    id: 2,
    title: "FACILITY MANAGEMENT",
    image: facilityImg,
    description:
      "We offer comprehensive Facility Management Services tailored to meet the needs of modern businesses. Our team ensures your workplace remains clean, functional and well-maintained at all times.",
    link: "/facility",
  },
  {
    id: 3,
    title: "CASH LOGISTICS",
    image: cashImg,
    description:
      "We provide secure and reliable Cash Logistics Solutions to help businesses manage their cash flow efficiently. Our services ensure safe transportation and handling of cash with complete accountability.",
    link: "/cash-logistics",
  },
];


const BusinessLines = () => {
  return (
    <section className="py-16 px-4 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Our <span className="text-red-600">Business Lines</span>
      </h2>

        {/* Subheading */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        We are a emerging security services company dedicated to providing
        trusted solutions in Security, Facility Management and Cash Logistics
        with a strong focus on quality, reliability and customer satisfaction.
        </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {businessLines.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group min-h-[400px] cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover absolute inset-0"
            />

            {/* Default Bottom Label */}
            <div className="absolute bottom-0 left-0 right-0 bg-red-600 py-3 z-10 group-hover:opacity-0 transition-opacity duration-300">
              <span className="text-white font-semibold tracking-widest text-sm">
                {item.title}
              </span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-red-600 bg-opacity-85 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <p className="text-white text-lg mb-6 text-center">
                {item.description}
              </p>
              <a
                href={item.link}
                className="border-2 border-white text-white px-8 py-2 font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Know More
              </a>

              {/* Bottom Label on Hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-red-700 py-3">
                <span className="text-white font-semibold tracking-widest text-sm">
                  {item.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessLines;