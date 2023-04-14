import github from "../pics/github.png"
import linkedin from "../pics/linkedin.png"

function Footer() {
  return (
    <footer id="footer">
      <a
        className="footer-link"
        href="https://github.com/BenjaminKHLau"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} className="footer-img" alt="github" />
      </a>
      <a
        className="footer-link"
        href="https://www.linkedin.com/in/benjaminkhlau/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} className="footer-img" alt="linkedin" />
      </a>
    </footer>
  );
}

export default Footer;
