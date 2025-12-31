import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-amber-50 flex flex-col items-center py-12 px-4"
    >
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
        Contact Me
      </h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-700">
            You can reach me via email, phone, or connect with me on GitHub and LinkedIn.
          </p>
          <div className="space-y-3">
            <p className="text-gray-800 font-medium">
              📧 Email:{" "}
              <a
                href="mailto:ganeshkarri4168@gmail.com"
                className="text-amber-600 hover:underline"
              >
                ganeshkarri4168@gmail.com
              </a>
            </p>
            <p className="text-gray-800 font-medium">📞 Phone: 9346671055</p>
            <p className="text-gray-800 font-medium">
              🐱 GitHub:{" "}
              <a
                href="https://github.com/ganeshk-git"
                target="_blank"
                className="text-amber-600 hover:underline"
                rel="noopener noreferrer"
              >
                github.com/ganeshk-git
              </a>
            </p>
            <p className="text-gray-800 font-medium">
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/ganesh-karri"
                target="_blank"
                className="text-amber-600 hover:underline"
                rel="noopener noreferrer"
              >
                ganesh-karri
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Compact Contact Form */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3 text-sm">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-300 text-sm"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-300 text-sm"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-300 text-sm"
            />
   <div className="flex justify-center">
  <button
    type="submit"
    className="bg-amber-400 text-gray-900 font-semibold py-2 px-1 rounded-[30px] hover:bg-amber-500 transition-colors duration-300 text-sm w-32"
  >
    Send
  </button>
</div>



          </form>
        </div>
      </div>
    </section>
  );
}
