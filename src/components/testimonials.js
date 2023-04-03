import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    // cssEase: "linear",
  };
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <h3>This is what his peers had to say about him!</h3>
      <Slider {...settings}>
        {/* <div className="t-container"> */}
        <div>
          <div className="t-name">1 name</div>
          <div className="t-t">1 t</div>
        </div>
        <div>
          <div className="t-name">2 name</div>
          <div className="t-t">2 t</div>
        </div>
        <div>
          <div className="t-name">3 name</div>
          <div className="t-t">3 t</div>
        </div>
        {/* </div> */}
      </Slider>
    </div>
  );
}

export default Testimonials;
