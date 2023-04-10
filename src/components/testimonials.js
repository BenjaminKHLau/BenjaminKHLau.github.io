import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tom from "../pics/tombluher.jpg";
import matthew from "../pics/matthewfong.jpg";
import ed from "../pics/edwardfelipe.jpg";

function Testimonials() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
  };
  return (
    <div id="testimonials">
      <h2>Testimonials</h2>
      <h3>What his peers had to say about him!</h3>
      <Slider {...settings}>
        <div className="t-container">
          <div className="t-box">
            <img src={ed} className="t-img" />
            <div className="t-name">Edward Felipe III</div>
            <div className="t-t">
              <div className="t-space">
                I am writing this recommendation for my friend Ben, who I
                studied with at App Academy. Throughout the program, Ben
                consistently impressed me with his dedication and determination
                to succeed. Despite facing challenges along the way, Ben never
                gave up on his goal of becoming a software engineer and was
                always eager to learn and improve.
              </div>
              <div className="t-space">
                One of the things I appreciated most about Ben was his
                willingness to reach out for help when needed. He had a great
                attitude and never hesitated to ask for assistance when he
                encountered a difficult topic. This showed not only his humility
                but also his desire to truly understand the material and become
                a better software engineer.
              </div>
              <div className="t-space">
                Ben has a strong foundation in software engineering,
                particularly in full-stack development. He is proficient in
                several programming languages and is always seeking to expand
                his knowledge and skills. His drive and determination are second
                to none, and he has a passion for software engineering that is
                contagious.
              </div>
              <div className="t-space">
                I have no doubt that Ben would be an asset to any software
                engineering team. His determination, technical abilities, and
                friendly personality make him an excellent candidate for any
                role. I highly recommend him for any software engineering
                position, and I am confident that he will continue to grow and
                make a positive impact in the industry.
              </div>
            </div>
          </div>
        </div>
        <div className="t-container">
          <div className="t-box">
            <img src={matthew} className="t-img" />
            <div className="t-name">Matthew Fong</div>
            <div className="t-t">
              Benjamin is an exceptional developer that possesses all the skills
              one would want in a software engineer. I had the pleasure of
              working with Benjamin and we often studied together during our
              duration at App Academy. Benjamin would always amaze me with his
              creative but effective approach to problem-solving and
              implementing designs for full-stack applications. Benjamin
              embraced any challenges thrown at him and was always able to
              create a plan and execute it. His positive attitude towards
              working and learning helped encourage and support all our cohort
              mates, which made it a very enjoyable and productive environment
              for everyone. I recommend Benjamin for any team he is seeking to
              join.
            </div>
          </div>
        </div>
        <div className="t-container">
          <div className="t-box">
            <img src={tom} className="t-img" />
            <div className="t-name">Tom Bluher</div>
            <div className="t-t">
              Working with Ben was a great experience that I won't soon forget.
              From the beginning he was motivated and focused on the task at
              hand, while keeping the conversation light hearted and friendly.
              He was able to set clear objectives and prioritize workflows that
              required attention throughout the day. While pair programming
              together, it became clear how deep his understanding of software
              development principles and Object Oriented Programing really goes.
              It was pleasure working with Ben and I couldn't recommend him
              highly enough!
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonials;
