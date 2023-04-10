import js from "../pics/javascript.png";
import python from "../pics/python.png";
import react from "../pics/react.png";
import redux from "../pics/Redux.png";
import htmllogo from "../pics/html.png";
import csslogo from "../pics/css.png";
import flask from "../pics/flask.jpg"
import sqla from "../pics/sqla.png"

function Skills() {
  return (
    <div id="skills">
      <div className="skills-header">
        {/* Skills section is work in progress */}
        These are some of the technologies that Benjamin has learned so far
      </div>
      <div className="skills-container">
        <div className="skill-pic-name">
          <img src={js} className="skill-pics" />
          <div className="skill-name">JavaScript</div>
        </div>
        <div className="skill-pic-name">
          <img src={python} className="skill-pics" />
          <div className="skill-name">Python</div>
        </div>
        <div className="skill-pic-name">
          <img src={react} className="skill-pics" />
          <div className="skill-name">React.js</div>
        </div>
        <div className="skill-pic-name">
          <img src={redux} className="skill-pics" />
          <div className="skill-name">Redux.js</div>
        </div>
        <div className="skill-pic-name">
          <img src={htmllogo} className="skill-pics" />
          <div className="skill-name">HTML5</div>
        </div>
        <div className="skill-pic-name">
          <img src={csslogo} className="skill-pics" />
          <div className="skill-name">CSS3</div>
        </div>
        <div className="skill-pic-name">
          <img src={flask} className="skill-pics" />
          <div className="skill-name">Flask</div>
        </div>
        <div className="skill-pic-name">
          <img src={sqla} className="skill-pics" />
          <div className="skill-name">SQLAlchemy</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
