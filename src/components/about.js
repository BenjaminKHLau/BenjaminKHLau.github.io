import kiwi from "../pics/about.jpg"


function About(){

    return(
        <div id="about">
            <h1>About</h1>
            <div className="about">Benjamin is a Software Engineer who is passionate about building the future. He also loves fluffy animals!</div>
            <img className="about-img" src={kiwi}/>
            <h2>Software Engineer & Animal Lover</h2>
            <div className="about-desc">Benjamin attended a coding bootcamp called App Academy. He has made many friends and learned how to think like a programmer. He now views the world through a whole new lens!</div>
        
            <div className="testimonials">
                <div className="t-name"></div>
                <div className="t-t"></div>
                <div className="t-name"></div>
                <div className="t-t"></div>
                <div className="t-name"></div>
                <div className="t-t"></div>

            </div>
        </div>
    )
}

export default About;