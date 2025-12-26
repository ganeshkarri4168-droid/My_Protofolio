import profile from "../Assets/Profile.jpeg";

const styles = {
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "100px 8%",
    background: "linear-gradient(135deg, #f0f9ff, #ffffff)",
    flexWrap: "wrap"
  },

  left: {
    maxWidth: "600px"
  },

  name: {
    fontSize: "2.8rem",
    marginBottom: "10px"
  },

  title: {
    fontSize: "1.5rem",
    color: "#2563eb",
    marginBottom: "15px"
  },

  description: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: "1.8",
    marginBottom: "20px"
  },

  points: {
    marginBottom: "25px",
    color: "#444"
  },

  buttonGroup: {
    display: "flex",
    gap: "20px"
  },

  primaryBtn: {
    padding: "12px 26px",
    backgroundColor: "#2563eb",
    color: "#fff",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold"
  },

  secondaryBtn: {
    padding: "12px 26px",
    border: "2px solid #2563eb",
    color: "#2563eb",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold"
  },

  right: {
    textAlign: "center"
  },

  profileImage: {
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
  }
};

export default function Hero() {
  return (
    <section style={styles.hero}>
      
      {/* LEFT CONTENT */}
      <div style={styles.left}>
        <h1 style={styles.name}>Ganesh Karri</h1>
        <h3 style={styles.title}>Junior Full Stack Developer</h3>

        <p style={styles.description}>
          I am a passionate Full Stack Developer currently working at 
          <b> EchargeTech Pvt. Ltd.</b>, where I build modern, scalable web 
          and mobile applications using React, React Native, Node.js, 
          Express, and MongoDB.
        </p>

        <ul style={styles.points}>
          <li>✔ Building responsive Web & Mobile applications</li>
          <li>✔ Developing REST APIs with Node.js & Express</li>
          <li>✔ Database design using MongoDB</li>
          <li>✔ Clean UI with modern design principles</li>
        </ul>

        <div style={styles.buttonGroup}>
          <a href="#contact" style={styles.primaryBtn}>Contact Me</a>
          <a href="#projects" style={styles.secondaryBtn}>View Projects</a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div style={styles.right}>
        <img src={profile} alt="Ganesh Karri" style={styles.profileImage} />
      </div>

    </section>
  );
}
