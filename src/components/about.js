import kiwi from "../pics/about.jpg";

function About() {
  return (
    <div id="about">

      <div className="about-container">
      <h1 className="wip">
        Hello! I am currently refactoring my portfolio from scratch! I believe
        that this is a good opportunity to sharpen my skills and rely less on
        premade templates! Thank you for your patience. Last updated April 14,
        2023
      </h1>
        <div className="about-img-container">
          <img className="about-img" src={kiwi} />
          <div className="about-inner">
            <h1>About Me</h1>
            <h2>Software Engineer & Animal Lover</h2>
            {/* <div className="about">
              Benjamin is a Software Engineer who is passionate about building
              the future. He also loves fluffy animals!
            </div> */}
            <div className="about-desc">
              Benjamin is a Texas-based Full Stack Software Engineer with
              previous experience in HVAC and general maintenance. When he's not
              busy writing code, he can often be found playing volleyball or
              practicing mixed martial arts. In addition to his active hobbies,
              he has a soft spot for cute fluffy animals and enjoys spending
              time caring for them. Benjamin graduated from a rigorous coding
              bootcamp called App Academy, where he honed his skills in Full
              Stack Web Development. His previous experience in HVAC and general
              maintenance has given him a strong foundation in troubleshooting,
              problem-solving, and attention to detail, which he now applies to
              his work as a programmer. With his well-rounded set of skills and
              interests, Benjamin views the world through a whole new lens!
            </div>
            <div className="about-a">
              City:
              <div className="about-b">Plano, Texas, USA</div>
            </div>
            <div className="about-a">
              Email Me:
              <div className="about-b">BenjaminKHLau@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
