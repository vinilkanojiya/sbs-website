import { Link } from "react-router-dom";
import operatorImg from "../assets/images/gaurd-half.jpeg"; // your image
import securityImg from "../assets/images/camera-scanner-gaurd-chest.png";
import securityOperatorImg from "../assets/images/security-operator.jpg";
import heroSecurityImg from "../assets/images/hero-security.jpg";
import droneGaurdImg from "../assets/images/drone-gaurd.jpg";

const SecuritySolutions = () => {
  const infrastructureItems = [
    {
      title: "Perimeter Security",
      points: [
        "Concertina and electric fencing",
        "Fiber-optic intrusion detection systems",
      ],
    },
    {
      title: "Fire Safety Systems",
      points: [
        "Fire detection and alarm networks",
        "Automated sprinkler systems",
      ],
    },
    {
      title: "Access Control",
      points: [
        "Boom barriers and flap barriers",
        "Facial recognition systems for controlled entry",
      ],
    },
    {
      title: "Surveillance",
      points: [
        "CCTV monitoring systems",
        "Body-worn cameras for field personnel",
      ],
    },
    {
      title: "Security Screening",
      points: [
        "Handheld and door frame metal detectors",
        "Baggage scanners and specialised detection systems",
      ],
    },
    {
      title: "Communication Systems",
      points: [
        "Digital walkie-talkies",
        "Public address systems",
      ],
    },
  ];

  const differentiators = [
    "India's leading security solutions provider",
    "ManTech security model combining manpower and technology",
    "AI surveillance, drone security and SaaS security platforms",
    "Large, trained workforce deployed across diverse sectors",
    "Strong compliance and SOP-driven operations",
    "Ability to deliver at scale across multiple locations",
  ];

  const frameworkPoints = [
    "Identification of assets and vulnerabilities",
    "Threat and risk assessment",
    "Design of customised security deployment",
    "Implementation supported by operational technologies",
    "Continuous monitoring and periodic review",
  ];

  const sixPillars = [
    { title: "Recruit", desc: "Rigorous selection of trained security professionals" },
    { title: "Train", desc: "Continuous skill development and certification programs" },
    { title: "Deploy", desc: "Strategic deployment based on client requirements" },
    { title: "Monitor", desc: "Real-time monitoring and performance tracking" },
    { title: "Review", desc: "Periodic audits and quality checks at every site" },
    { title: "Improve", desc: "Data-driven improvements for better service delivery" },
  ];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            SBS Security <span className="text-red-600">Solutions</span>
          </h1>
          <p className="text-red-600 font-semibold text-lg mb-8">
            No one covers Madhya Pradesh like us
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            {/* Image - order-2 on mobile, order-1 on desktop */}
            <div className="order-2 md:order-1">
              <img
                src={operatorImg}
                alt="Security Solution"
                className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Text - order-1 on mobile, order-2 on desktop */}
            <div className="order-1 md:order-2">
              <p className="text-gray-600 leading-relaxed mb-6">
                SBS Group Bharat protects businesses and institutions across
                Madhya Pradesh through a people-first security model supported
                by advanced operational systems. Our trained security
                professionals follow rigorous SOPs and operate across customer
                locations, delivering dependable protection supported by
                integrated monitoring and digital security platforms.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Security Solutions – SBS
              </h3>
              <ul className="flex flex-col gap-2">
                {differentiators.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SBS DIFFERENTIATION ===== */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Text - always first on mobile */}
          <div className="order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              SBS <span className="text-red-600">Differentiation</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SBS addresses security challenges through its <strong>ManTech
              approach</strong>, where trained security professionals are
              supported by integrated technology platforms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In this model, <strong>human vigilance remains central</strong>,
              while technology assists in monitoring, communication and
              coordination, enabling faster responses and stronger security
              outcomes.
            </p>
          </div>

          {/* Image - always second on mobile */}
          <div className="order-2">
            <img
              src={securityOperatorImg}
              alt="SBS Differentiation"
              className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ===== SECURITY SOLUTION FRAMEWORK ===== */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Image - order-2 on mobile, order-1 on desktop */}
          <div className="order-2 md:order-1">
            <img
              src={securityImg}
              alt="Security Solution Framework"
              className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text - order-1 on mobile, order-2 on desktop */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Security Solution <span className="text-red-600">Framework</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our security solutions begin with a structured risk assessment
              approach:
            </p>
            <ul className="flex flex-col gap-3">
              {frameworkPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SECURITY INFRASTRUCTURE ===== */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Security <span className="text-red-600">Infrastructure</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-4xl">
            Our security professionals operate within an integrated security
            framework that combines trained personnel, standard operating
            procedures and supporting technologies. From smart security systems
            and intelligent surveillance to IoT-enabled infrastructure, our
            solutions ensure business continuity, cost-efficiency, and peace of
            mind for clients.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureItems.map((item, index) => (
              <div key={index} className="border-l-4 border-red-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <ul className="flex flex-col gap-1">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                      <span className="text-gray-600 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DRONE SECURITY & DIGITAL SUPPORT ===== */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Image - order-2 on mobile, order-1 on desktop */}
          <div className="order-2 md:order-1">
            <img
              src={droneGaurdImg}
              alt="Drone Security"
              className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text - order-1 on mobile, order-2 on desktop */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Drone <span className="text-red-600">Security</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              SBS deploys drone-based aerial monitoring to support perimeter
              patrols, infrastructure inspection and large-area surveillance.
              These systems assist security teams in enhancing visibility and
              improving response coordination.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Digital <span className="text-red-600">Security Support</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To enable technology-led effectiveness for on-ground teams, SBS
              deploys digital platforms such as visitor management systems,
              patrol monitoring tools and digital incident reporting. These
              platforms improve operational transparency while enabling security
              personnel to maintain better coordination across sites.
            </p>
          </div>
        </div>
      </section>

      {/* ===== EVENT SECURITY ===== */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Event <span className="text-red-600">Security</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 max-w-4xl">
            SBS provides end-to-end event security solutions. Our trained
            personnel manage all aspects of security, from access control and
            crowd management to emergency response. Our approach to event
            security begins with conducting proactive risk assessments and
            contingency planning.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-4xl">
            ManTech solution excels in combining our trained manpower with
            technology such as AI-enabled CCTV monitoring and drone-based
            surveillance. Each deployment is customised to the scale and nature
            of the event, ensuring seamless and reliable security across venues.
          </p>
        </div>
      </section>

      {/* ===== WHAT MAKES US DIFFERENT ===== */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            What Makes Us <span className="text-red-600">Different</span>
          </h2>
          <p className="text-center text-gray-700 font-semibold mb-4">
            Our approach to Security Solutions – backed by technology
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 max-w-4xl mx-auto text-center">
            SBS Group Bharat provides security solutions that have seamlessly
            integrated man guards with technology to envisage ManTech Solutions
            that create strong security foundations for our customers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-4xl mx-auto text-center">
            SBS follows a 6-pillars approach to deliver best-in-class solutions
            delivery and every step of this process is backed by technology
            platforms.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {sixPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-6 border-t-4 border-red-600 hover:shadow-lg transition"
              >
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm mb-3">
                  {index + 1}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{pillar.title}</h4>
                <p className="text-gray-600 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-red-600 text-white px-8 py-4 font-bold hover:bg-red-700 transition rounded-lg"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecuritySolutions;