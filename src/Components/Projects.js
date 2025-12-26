import project from "../Assets/school-project.jpg";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project">
        <img src={project} alt="School App" />
        <div>
          <h3>School Management System</h3>
          <p>
            React, React Native, Node.js, MongoDB based
            Admin Panel and Student Portal.
          </p>
        </div>
      </div>
    </section>
  );
}
