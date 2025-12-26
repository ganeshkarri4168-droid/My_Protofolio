const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "36px 40px",
    background: "linear-gradient(90deg, #2563eb, #38bdf8)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: {
    flex: 1,
    textAlign: "center",
    fontSize: "1.5rem",
    color: "white",
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "100px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500"
  }
};

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div></div>

      <div style={styles.logo}>Ganesh Karri</div>

      <div style={styles.links}>
        <a href="#about" style={styles.link}>About</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#experience" style={styles.link}>Experience</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </nav>
  );
}
