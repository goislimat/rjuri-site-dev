import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import glamorous, { Div } from "glamorous";
import { css } from "glamor";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import colors from "../../helpers/colors";

const sliderCSSEdit = css({
  "& .slick-next:before, & .slick-prev:before": {
    color: colors.branco
  }
});

const BigTestimonial = glamorous.div({
  "& .text": {
    transition: "all .5s",
    ":hover": {
      boxShadow: "inset 0 -80px 120px -80px #fff"
    }
  },
  "& button": {
    border: "1px solid #fff",
    fontSize: "0.8em",
    padding: "5px 20px",
    backgroundColor: "transparent",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bolder",
    marginTop: "20px",
    marginBottom: "20px",
    cursor: "pointer",
    "@media(min-width: 768px)": {
      marginBottom: 0
    }
  }
});

const ModalContent = glamorous.div(
  {
    backgroundColor: colors.branco,
    minHeight: "93%",
    textAlign: "left"
  },
  {
    "@media(min-width: 768px)": {
      textAlign: "justify"
    }
  }
);

const TestimonialBox = glamorous.div(
  {
    padding: "0 10px"
  },
  {
    "@media(min-width: 1200px)": {
      padding: "0 30px"
    }
  }
);

const ImageBox = glamorous.div(
  {
    borderRadius: "125px",
    backgroundSize: "cover",
    height: "200px",
    margin: "40px auto",
    width: "200px",
    border: "solid 2px #666",
    padding: "10px",
    backgroundClip: "content-box" /* support: IE9+ */
  },
  {
    "@media(min-width: 768px)": {
      height: "150px",
      width: "150px"
    },
    "@media(min-width: 992px)": {
      height: "180px",
      width: "180px"
    },
    "@media(min-width: 1200px)": {
      height: "150px",
      width: "150px"
    }
  },
  ({ image }) => ({
    backgroundImage: `url(${image})`
  })
);

const CloseButton = glamorous.button({
  backgroundColor: "transparent",
  border: "0",
  cursor: "pointer"
});

const overlay = css({
  position: "fixed",
  top: "0px",
  left: "0px",
  right: "0px",
  bottom: "0px",
  backgroundColor: "rgba(255, 255, 255, 0.5)"
});

const modal = css(
  {
    position: "absolute",
    top: "20px",
    left: "20px",
    right: "20px",
    bottom: "20px",
    border: "1px solid rgb(204, 204, 204)",
    background: "rgb(255, 255, 255)",
    overflow: "auto",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  },
  {
    "@media(min-width: 576px)": {},
    "@media(min-width: 768px)": {},
    "@media(min-width: 992px)": {
      top: "80px",
      left: "160px",
      right: "160px",
      bottom: "80px"
    },
    "@media(min-width: 1200px)": {
      top: "100px",
      left: "250px",
      right: "250px",
      bottom: "100px"
    }
  }
);

const options = {
  autoplay: true,
  autoplaySpeed: 8000,
  draggable: true,
  slidesToShow: 2,
  infinite: true,
  slidesToScroll: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
};

class TestimonialsCarousel extends React.Component {
  state = {
    showModal: 0
  };

  handleOpenModal = id => this.setState({ showModal: id });
  handleCloseModal = () => this.setState({ showModal: 0 });

  buildReactModal = testimonial => {
    const { id, text, author, from, image } = testimonial;
    const { showModal } = this.state;

    return (
      <Modal
        key={id}
        isOpen={id === showModal}
        contentLabel={`modal-${id}`}
        onRequestClose={this.handleCloseModal}
        className={`${modal}`}
        overlayClassName={`${overlay}`}
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <div className="text-right">
          <CloseButton onClick={this.handleCloseModal}>
            <i className="fa fa-times" aria-hidden="true" />
          </CloseButton>
        </div>
        <ModalContent className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 row justify-content-center">
            <div className="col-md-7 order-md-1">
              <h4>{author}</h4>
              <p>
                <small>{from}</small>
              </p>
              <p>{text}</p>
            </div>
            <div className="col-md-3 order-md-2">
              <ImageBox image={image} />
            </div>
          </div>
        </ModalContent>
      </Modal>
    );
  };

  renderTestimonialText = testimonial => {
    const { id, text } = testimonial;
    const length = 250;

    return (
      <Div minHeight="250px" className="d-flex align-items-center">
        {text.length > length ? (
          <BigTestimonial>
            <div className="text">{text.substring(0, length)}...</div>
            <Div paddingRight="50px" className="text-right">
              <button onClick={() => this.handleOpenModal(id)}>Mais</button>
            </Div>
          </BigTestimonial>
        ) : (
          <div>{text}</div>
        )}
      </Div>
    );
  };

  render() {
    const { carouselData } = this.props;
    return (
      <div>
        <Slider {...options} className={`${sliderCSSEdit}`}>
          {carouselData.map(testimonial => (
            <TestimonialBox key={testimonial.id} className="h100">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <ImageBox image={testimonial.image} />
                </div>

                <div className="col-md-8 col-sm-12">
                  <Div fontSize="2em">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                  </Div>

                  {this.renderTestimonialText(testimonial)}

                  <div className="font-italic">{testimonial.author}</div>
                  <div className="font-italic">{testimonial.from}</div>
                </div>
              </div>
            </TestimonialBox>
          ))}
        </Slider>
        {carouselData.map(testimonial => this.buildReactModal(testimonial))}
      </div>
    );
  }
}

TestimonialsCarousel.propTypes = {
  carouselData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      icon: PropTypes.node,
      title: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired
};

export default TestimonialsCarousel;
