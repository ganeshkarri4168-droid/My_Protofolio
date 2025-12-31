// Projects.js
import React from "react";
import CodingImage from "../Assets/coding.jpg";

const projects = [
  {
    name: "School Management App",
    description:
      "Manage students, teachers, timetables, and homework efficiently.",
    tech: ["React JS", "Node JS", "MongoDB", "Tailwind CSS"],
  },
  {
    name: "Milk Delivery App",
    description:
      "Mobile and web app to manage milk orders and deliveries.",
    tech: ["React Native", "Node JS", "Express JS", "MongoDB"],
  },
  {
    name: "Portfolio & To-Do App",
    description:
      "Personal portfolio website and productivity To-Do app.",
    tech: ["React JS", "Tailwind CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-amber-50 flex flex-col items-center py-12 px-4 scroll-mt-24"
    >
      <h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
        My Projects
      </h1>

      <div className="w-full max-w-6xl flex flex-col space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6"
          >
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">
                {project.name}
              </h2>
              <p className="text-gray-700 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-amber-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src={CodingImage}
                alt={project.name}
                className="rounded-xl w-full h-56 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
