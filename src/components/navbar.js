import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./navbar.css";
import "./style.css";

function Nav() {
  // // to change burger classes
  // const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  // const [menu_class, setMenuClass] = useState("menu hidden");
  // const [isMenuClicked, setIsMenuClicked] = useState(false);

  // // toggle burger menu change
  // const updateMenu = () => {
  //   if (!isMenuClicked) {
  //     setBurgerClass("burger-bar clicked");
  //     setMenuClass("menu visible");
  //   } else {
  //     setBurgerClass("burger-bar unclicked");
  //     setMenuClass("menu hidden");
  //   }
  //   setIsMenuClicked(!isMenuClicked);
  // };

  return (
    <nav>
      <Link to="/" className="logoname">
        Benjamin
      </Link>
      {/* <div className="dropdown">
        <div className="dropbtn" onClick={updateMenu}>Dropdown</div>
        <div className="dropdown-content"> */}
      {/* <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="navigation"
            activeClass="navigation-active"
          >
            Main
          </Link> */}

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
        to="testimonials"
        spy={true}
        smooth={true}
        duration={500}
        className="navigation"
        activeClass="navigation-active"
      >
        Testimonials
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


      {/* <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="navigation"
            activeClass="navigation-active"
          >
            Contact
          </Link> */}
      {/* </div>
      </div> */}

      {/* <NavLink to="/">Main</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/contact">Contact</NavLink> */}
    </nav>
  );
}

export default Nav;
