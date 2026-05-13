import { useState } from "react";

const positions = [
  "Security Guard",
  "Security Supervisor",
  "Senior Security Supervisor",
  "Quick Response Team (QRT)",
  "Field Operations Officer",
  "Branch Manager",
  "Area Manager",
  "Operations Manager",
  "Facility Executive",
  "Facility Supervisor",
  "Cash Van Operator",
  "Cash Processing Executive",
  "HR Executive",
  "Admin Executive",
  "Sales Executive",
];

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    position: "",
    coverLetter: "",
    resume: null,
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.agree) {
      setError("Please agree to the terms before submitting.");
      setLoading(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("access_key", "70554610-e37f-4f16-8535-dd7222ed0ba3");
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("experience", formData.experience);
      data.append("position", formData.position);
      data.append("coverLetter", formData.coverLetter);
      if (formData.resume) {
        data.append("resume", formData.resume);
      }

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
            Application <span className="text-red-600">Submitted!</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for applying at SBS Group Bharat. We will review your
            application and get back to you soon.
          </p>
          <a>
            href="/"
            className="bg-red-600 text-white px-8 py-3 font-bold rounded-lg hover:bg-red-700 transition inline-block"
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16 md:py-10 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Join <span className="text-red-600">Our Team</span>
          </h1>
          <div className="w-12 h-1 bg-red-600 mx-auto mb-4" />
          <p className="text-gray-600">
            Fill in the form below and we will get back to you shortly.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-red-600 mb-6">
            Apply For This Position
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* First Name + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                Mobile Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                maxLength={10}
                placeholder="10 digit mobile number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
              />
            </div>

            {/* Position Dropdown */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                Position <span className="text-red-600">*</span>
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 bg-white"
              >
                <option value="">Select a Position</option>
                {positions.map((pos, index) => (
                  <option key={index} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                Experience <span className="text-red-600">*</span>
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 bg-white"
              >
                <option value="">Select Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="0-1 Years">0-1 Years</option>
                <option value="1-3 Years">1-3 Years</option>
                <option value="3-5 Years">3-5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
            </div>

            {/* Cover Letter */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                Cover Letter <span className="text-red-600">*</span>
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us about yourself..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 resize-none"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                Upload CV/Resume <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 bg-white"
              />
              <p className="text-xs text-gray-400 mt-1">
                Allowed Type(s): .pdf, .doc, .docx
              </p>
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
                By using this form you agree with the storage and handling of
                your data by this website.{" "}
                <span className="text-red-600">*</span>
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-600 text-sm font-semibold">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white py-4 font-bold rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Careers;