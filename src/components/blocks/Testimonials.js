import React from "react";
import glamorous from "glamorous";

import TestimonialsCarousel from "./TestimonialsCarousel";
import { testimonials as testimonialsData } from "./data";
import colors from "../../helpers/colors";

const TestimonialGradient = glamorous.div("col-md-12", {
  backgroundColor: colors.azulEscuro,
  color: colors.branco,
  padding: "80px 0",
  "& .container": {
    maxWidth: "90%"
  }
});

const Title = glamorous.div(
  {
    fontSize: "1.4em",
    fontWeight: "bold",
    letterSpacing: "1px",
    marginBottom: "50px"
  },
  {
    "@media(max-width: 767px)": {
      textAlign: "center"
    }
  }
);

const Testimonials = () => (
  <div className="row">
    <TestimonialGradient>
      <Title className="col-md-12 d-flex justify-content-center">
        No final, o que importa são clientes realmente satisfeitos
      </Title>
      <div className="container">
        <TestimonialsCarousel carouselData={testimonialsData} />
      </div>
    </TestimonialGradient>
  </div>
);

export default Testimonials;
