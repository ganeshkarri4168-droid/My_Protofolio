// About.js
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-amber-50 flex flex-col items-center py-12 px-4 scroll-mt-24"
    >
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
        About Me
      </h1>

      {/* Main Content Container */}
      <div
        className="w-full max-w-6xl bg-white rounded-2xl shadow-md p-10 flex flex-col md:flex-row gap-10"
        style={{ backgroundColor: "#90c6caff" }}
      >
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-gray-700 text-lg mb-6">
            Hi, I’m <span className="font-semibold">Ganesh Karri</span>, a passionate{" "}
            <span className="font-semibold">MERN-Stack Developer</span> with
            experience in building <span className="font-semibold">mobile and web applications</span>.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Projects I’ve Developed:
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><b>School Management App</b> – Students, teachers, timetables.</li>
            <li><b>Milk Delivery App</b> – Orders & delivery tracking.</li>
            <li><b>To-Do App</b> – Task management.</li>
            <li><b>Portfolio Website</b> – Skills & projects.</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-4">
          <div className="bg-amber-100 rounded-xl p-6 shadow-inner">
            Turning ideas into real applications.
          </div>
          <div className="bg-amber-100 rounded-xl p-6 shadow-inner">
            Clean code & responsive UI focus.
          </div>
          <div className="bg-amber-100 rounded-xl p-6 shadow-inner">
            Always learning new technologies.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
