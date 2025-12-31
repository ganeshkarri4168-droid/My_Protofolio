import React from "react";
import companyImage from "../Assets/company.jpg";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-amber-50 flex flex-col items-center px-4 scroll-mt-28"
    >
      {/* Scroll anchor spacer */}
      <div className="pt-32"></div>

      <h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
        Experience
      </h1>

      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left */}
        <div className="md:w-1/2 p-10 flex flex-col space-y-6">
          <h2 className="text-3xl font-bold">EchargeTech</h2>
          <p className="text-gray-600 font-medium">
            Full-Stack Developer | 2024
          </p>

          <p className="text-gray-700">
            1 year experience building scalable applications.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>School Management App</li>
            <li>Milk Delivery App</li>
            <li>Portfolio & To-Do App</li>
          </ul>
        </div>

        {/* Right */}
        <div className="md:w-1/2 bg-amber-100 flex items-center justify-center p-6">
          <img
            src={companyImage}
            alt="EchargeTech"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
