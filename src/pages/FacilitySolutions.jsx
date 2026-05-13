import { useState } from "react";
import { Link } from "react-router-dom";
import facilityImg from "../assets/images/hero-facility.jpg";

// // Industries array mein image add karo
// { id: 1, title: "HEALTHCARE", image: healthcareImg }

// import facilityImg from "../assets/images/hero-facility.jpg";

// Industries images import karo
// import healthcareImg from "../assets/images/healthcare.jpg";
// import educationImg from "../assets/images/education.jpg";
// import manufacturingImg from "../assets/images/manufacturing.jpg";
// import residentialImg from "../assets/images/residential.jpg";
// import itesImg from "../assets/images/ites.jpg";
// import retailImg from "../assets/images/retail.jpg";
// import pharmaImg from "../assets/images/pharma.jpg";
// import dataCentresImg from "../assets/images/data-centres.jpg";




// Alag alag images solutions ke liye
// import cleaningImg from "../assets/images/cleaning.jpg";
// import technicalImg from "../assets/images/technical.jpg";

// const solutions = [
//   {
//     id: 1,
//     title: "Cleaning And Housekeeping",
//     image: cleaningImg,  // ← replace karo
//     ...
//   },
//   {
//     id: 2,
//     title: "Technical Solutions",
//     image: technicalImg,  // ← replace karo
//     ...
//   },
// ]
const solutions = [
  {
    id: 1,
    title: "Cleaning And Housekeeping",
    image: facilityImg,
    points: [
      "Smart Surface Disinfection Program",
      "Life Shield – Anti Microbial Program",
      "Floor Care Program",
      "UV Airborne Infection Control",
    ],
  },
  {
    id: 2,
    title: "Technical Solutions",
    image: facilityImg,
    points: [
      "Mechanical and Electrical – Skilled and Licensed Supervisors and Technicians",
      "Management and Cost Optimization",
      "Water Treatment Systems",
      "AMC Management",
      "Building Management System (BMS)",
      "Operation and Maintenance",
      "Plumbing and Carpentry Energy",
      "HVAC",
      "Fire and Safety Systems",
      "Critical Environment Management",
    ],
    twoCol: true,
  },
  {
    id: 3,
    title: "Soft Solutions",
    image: facilityImg,
    points: [
      "Computerized Maintenance Management System",
      "Office Support",
      "Event Management",
      "Gardening and Landscaping Solutions",
    ],
  },
  {
    id: 4,
    title: "Pest Control",
    image: facilityImg,
    points: [
      "CRAWL – X For Cockroach, Red And Black",
      "Ants RAT- X For Rats, Mice And Bandicoots",
      "MUSCA – X For Mosquitos And Flies",
      "TERMIN – X For Termite Services",
      "AVES X – For Bird Proofing Services",
      "Aerial Disinfection Program For Disinfection Services",
    ],
  },
  {
    id: 5,
    title: "Business Support Solutions",
    image: facilityImg,
    points: [
      "Front Desk",
      "Help Desk",
      "Mail Room",
      "Transportation",
      "Help Desk Concierge",
      "Pantry Services",
      "Staffing Solutions",
    ],
    twoCol: true,
  },
];

const industries = [
  { id: 1, title: "HEALTHCARE" },
  { id: 2, title: "EDUCATION" },
  { id: 3, title: "MANUFACTURING" },
  { id: 4, title: "RESIDENTIAL" },
  { id: 5, title: "ITES" },
  { id: 6, title: "RETAIL" },
  { id: 7, title: "PHARMA" },
  { id: 8, title: "DATA CENTRES" },
];

// const industries = [
//   { id: 1, title: "HEALTHCARE", image: healthcareImg },
//   { id: 2, title: "EDUCATION", image: educationImg },
//   { id: 3, title: "MANUFACTURING", image: manufacturingImg },
//   { id: 4, title: "RESIDENTIAL", image: residentialImg },
//   { id: 5, title: "ITES", image: itesImg },
//   { id: 6, title: "RETAIL", image: retailImg },
//   { id: 7, title: "PHARMA", image: pharmaImg },
//   { id: 8, title: "DATA CENTRES", image: dataCentresImg },
// ];

const differentiators = [
  "IoT-enabled maintenance and predictive asset management",
  "Robotic cleaning and smart facility operations",
  "Technology-driven monitoring and automation tools",
  "Strict SOP guidelines and compliance",
  "World-class products and energy-efficient machinery",
  "Experienced management team and robust processes",
];

const FacilitySolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Left - Heading + Differentiators */}
          <div className="order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Facility Management
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              Solutions
            </h1>
            <p className="text-red-600 font-semibold mb-4">
              #1 Facility Management Solutions Provider in Madhya Pradesh
            </p>
            <ul className="flex flex-col gap-3">
              {differentiators.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Text */}
          <div className="order-2">
            <p className="text-gray-600 leading-relaxed mb-4">
              SBS Group Bharat provides comprehensive facility management
              solutions across industries including healthcare, manufacturing,
              commercial and residential infrastructure.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Solutions are delivered through a combination of trained
              personnel, standardised processes, and technology-enabled systems,
              ensuring efficiency, safety and compliance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Technology supports operations through{" "}
              <strong>
                monitoring systems, automation tools and data-driven processes
              </strong>
              , improving service quality and operational efficiency.
            </p>
            <p className="text-gray-600 leading-relaxed">
              SBS is an emerging FM business supported by best-in-class
              technology solutions, strict SOP guidelines and compliance,
              world-class products, led by an experienced management team,
              robust processes, and the use of energy-efficient and modern
              machinery. Our clients range from healthcare and hospitality to
              IT/ITeS and industrial establishments.
            </p>
          </div>
        </div>
      </section>

      {/* ===== OUR SOLUTIONS TAB SECTION ===== */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Our <span className="text-red-600">Solutions</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Left - Tab List */}
            <div className="flex flex-col gap-2">
              {solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left px-6 py-4 font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {solution.title}
                </button>
              ))}
            </div>

            {/* Right - Tab Content */}
            <div className="md:col-span-2">
              {/* Image */}
              <img
                src={solutions[activeTab].image}
                alt={solutions[activeTab].title}
                className="w-full h-[250px] object-cover rounded-lg mb-6"
              />

              {/* Points */}
              <div
                className={`grid gap-3 ${
                  solutions[activeTab].twoCol
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {solutions[activeTab].points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES WE SERVE ===== */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Industries <span className="text-red-600">We Serve</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="relative overflow-hidden group cursor-pointer h-[200px] bg-gray-300 rounded-lg"
              >
                {/* Placeholder Image */}
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Image</span>
                </div>

                {/* <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    /> */}

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 py-2 text-center">
                  <span className="text-white font-semibold text-xs tracking-widest">
                    {industry.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-12 px-6 bg-white text-center">
        <Link
          to="/contact"
          className="bg-red-600 text-white px-8 py-4 font-bold hover:bg-red-700 transition rounded-lg"
        >
          CONTACT US
        </Link>
      </section>
    </>
  );
};

export default FacilitySolutions;