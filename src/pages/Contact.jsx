import { useState } from "react";

const contactDetails = [
  {
    id: 1,
    title: "SBS Group Bharat – Head Office",
    address: "Indore, Madhya Pradesh",
    phone: "+91 XXXXX XXXXX",
    email: "info@sbsgroupbharat.com",
  },
  {
    id: 2,
    title: "Business Enquiries",
    email: "business@sbsgroupbharat.com",
  },
  {
    id: 3,
    title: "Career Enquiries",
    email: "careers@sbsgroupbharat.com",
  },
];

const selectOptions = [
  "Security Solutions",
  "Facility Management",
  "Cash Logistics",
  "Career Enquiry",
  "General Enquiry",
  "Other",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    select: "",
    message: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.agree) {
      setError("Please authorize to send notifications before submitting.");
      setLoading(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("access_key", "70554610-e37f-4f16-8535-dd7222ed0ba3");
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("select", formData.select);
      data.append("message", formData.message);
      data.append("date", new Date().toLocaleDateString("en-IN"));

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Success Screen
  if (submitted) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
        <div className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-lg p-10">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Message <span className="text-red-600">Sent!</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting SBS Group Bharat. We will get back to
            you shortly.
          </p>
          
          <a  href="/"
            className="bg-red-600 text-white px-8 py-3 font-bold rounded-lg hover:bg-red-700 transition inline-block"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16 md:py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Contact <span className="text-red-600">Us</span>
          </h1>
          <div className="w-12 h-1 bg-red-600 mx-auto mb-4" />
          <p className="text-gray-600">
            Get in touch with us for any enquiries or information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left - Contact Details */}
          <div className="flex flex-col gap-6">
            {contactDetails.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow p-6 border-l-4 border-red-600"
              >
                <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                {item.address && (
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-red-600 mt-0.5">📍</span>
                    <p className="text-gray-600 text-sm">{item.address}</p>
                  </div>
                )}
                {item.phone && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-600">📞</span>
                    <p className="text-gray-600 text-sm">{item.phone}</p>
                  </div>
                )}
                {item.email && (
                  <div className="flex items-center gap-2">
                    <span className="text-red-600">✉️</span>
                    <p className="text-gray-600 text-sm">{item.email}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Get In <span className="text-red-600">Touch</span>
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">
                  Email Id <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Email Id"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                />
              </div>

              {/* Select */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">
                  Select <span className="text-red-600">*</span>
                </label>
                <select
                  name="select"
                  value={formData.select}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 bg-white"
                >
                  <option value="">Select Enquiry Type</option>
                  {selectOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">
                  Phone No <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={10}
                  placeholder="Enter Phone No"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 resize-none"
                />
              </div>

              {/* Agree Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1"
                />
                <p className="text-sm text-gray-600">
                  I hereby authorize to send notifications on SMS / Messages /
                  Promotional / Informational messages{" "}
                  <span className="text-red-600">*</span>
                </p>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-600 text-sm font-semibold">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-white py-4 font-bold rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {/* Date */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">
                  Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={new Date().toLocaleDateString("en-IN")}
                  readOnly
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 text-gray-500"
                />
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;