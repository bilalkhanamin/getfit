import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from "../images/testimonials/1.svg";
import person2 from "../images/testimonials/2.svg";
import person3 from "../images/testimonials/3.svg";
import Testimony from "../images/testimonials/testimonials.svg";

function Testimonials() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
    // vertical: true,
    // verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    }
  };

  return (
    <div className="testimonials">
        <div className="heading">
          <p>testimonials</p>
          <h1>what they say</h1>
        </div>
      <div className="container">
        <div className="testify_cont">
          <Slider {...settings}>
            <div className="testify">
              <img src={person1} alt="" />
              <span>lara </span>
              <h6>Gym member</h6>
              <p>
                "A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country A
                small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country."
              </p>
            </div>
            <div className="testify">
              <img src={person2} alt="" />
              <span>marry</span>
              <h6>Gym member</h6>
              <p>
                "A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country A
                small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country."
              </p>
            </div>
            <div className="testify">
              <img src={person3} alt="" />
              <span>john</span>
              <h6>Gym member</h6>
              <p>
               "A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country A
                small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country."
              </p>
            </div>
          </Slider>
        </div>
          <img src={Testimony} alt="" className="testimony" />
      </div>
    </div>
  );
}

export default Testimonials;
