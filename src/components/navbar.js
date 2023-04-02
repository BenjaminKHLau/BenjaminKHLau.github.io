import { NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import "./navbar.css";
import "./style.css"

function Nav() {

  return (
    <nav>
      <Link to="/" className="logoname">
        Benjamin Lau
      </Link>

      <Link
        to="/"
        spy={true}
        smooth={true}
        duration={500}
        className="navigation"
        activeClass="navigation-active"
      >
        Main
      </Link>

      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        className="navigation"
        activeClass="navigation-active"
      >
        About
      </Link>

      <Link
        to="resume"
        spy={true}
        smooth={true}
        duration={500}
        className="navigation"
        activeClass="navigation-active"
      >
        Resume
      </Link>

      <Link
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
        className="navigation"
        activeClass="navigation-active"
      >
        Skills
      </Link>

      {/* <NavLink to="/">Main</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/contact">Contact</NavLink> */}
    </nav>
  );
}

export default Nav;
