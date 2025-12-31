import React from "react";
import profile from "../Assets/Profile.jpg";

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${profile})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <div className="hero-content" style={{ maxWidth: "700px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          GANESH KARRI: MERN STACK DEVELOPER
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
          Experienced in MongoDB, Express, React, and Node.js, I build dynamic
          and scalable web applications. Explore my profile to learn more about
          my expertise in full-stack development, database management, and
          collaborative problem-solving.
        </p>
      </div>
    </section>
  );
};

export default Hero;
