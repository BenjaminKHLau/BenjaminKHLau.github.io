import kiwi from "../pics/about.jpg";


function About() {

  return (
    <div id="about">
      <h1>Hello! I am currently refactoring my portfolio from scratch! I believe that this is a good opportunity to sharpen my skills and rely less on premade templates! Thank you for your patience. Last updated April 9, 2023</h1>
      <h1>About Me</h1>
      <div className="about">
        Benjamin is a Software Engineer who is passionate about building the
        future. He also loves fluffy animals!
      </div>
      <img className="about-img" src={kiwi} />
      <h2>Software Engineer & Animal Lover</h2>
      <div className="about-desc">
        Benjamin attended a coding bootcamp called App Academy. He has made many
        friends and learned how to think like a programmer. He now views the
        world through a whole new lens!
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
  );
}

export default About;
