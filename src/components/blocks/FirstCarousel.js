import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Div, Img } from "glamorous";
import { css } from "glamor";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import colors from "../../helpers/colors";

const sliderCSSEdit = css({
  width: "90%",
  margin: "auto",
  "& .slick-next:before, & .slick-prev:before": {
    color: "#888"
  }
});

const options = {
  autoplay: true,
  draggable: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 577,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
};

const FirstCarousel = ({ carouselData }) => (
  <div>
    <Slider {...options} className={`${sliderCSSEdit}`}>
      {carouselData.map(carouselItem => (
        <Div padding="20px 30px" key={carouselItem.id} className="text-center">
          <Div height="120px" className="text-center">
            <Img
              display="inline !important"
              src={carouselItem.icon}
              alt={`${carouselItem.title}-img`}
            />
          </Div>
          <Div
            fontSize="1.1em"
            color={colors.azulMedioEscuro}
            fontWeight="bold"
            padding="30px 0"
          >
            {carouselItem.title}
          </Div>
          <div>{carouselItem.text}</div>
        </Div>
      ))}
    </Slider>
  </div>
);

FirstCarousel.propTypes = {
  carouselData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      icon: PropTypes.node,
      title: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired
};

export default FirstCarousel;
