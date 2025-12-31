// Skills.js
import React from "react";

const skills = [
  "React JS",
  "Node JS",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
  "HTML & CSS",
  "Git & GitHub",
  "Express JS",
  "Redux",
  "Bootstrap",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-amber-50 flex flex-col items-center py-12 px-4 scroll-mt-24"
    >
      <h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
        My Skills
      </h1>

      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-amber-200 text-gray-800 font-semibold px-5 py-3 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>

      <p className="mt-12 text-gray-500 text-center max-w-xl">
        These are some of the technologies and tools I work with regularly.
      </p>
    </section>
  );
};

export default Skills;
