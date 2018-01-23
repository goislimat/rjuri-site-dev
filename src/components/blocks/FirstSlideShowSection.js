import React from "react";
import glamorous, { Div } from "glamorous";

import { firstCarouselData as carouselData } from "./data";
import colors from "../../helpers/colors";

import Carousel from "./FirstCarousel";

const Title = glamorous.h2(
  "text-center",
  {
    color: colors.azulMedioEscuro,
    fontSize: "1.5em",
    fontWeight: "bold",
    letterSpacing: "1px"
  },
  {
    "@media(max-width: 767px)": {
      fontSize: "1.2em"
    }
  }
);

const Divider = glamorous.div(
  "col-11 col-md-7 d-flex justify-content-center align-items-center",
  {
    height: "2px",
    backgroundColor: colors.cinzaClaro,
    margin: "80px 0"
  }
);

const Bar = glamorous.div("col-2", {
  height: "10px",
  ".active": {
    backgroundColor: colors.azulClaro
  }
});

const Presentation = glamorous.div(
  "col-md-7 text-center",
  {
    fontSize: "1.2em"
  },
  {
    "@media(max-width: 767px)": {
      fontSize: "1em"
    }
  }
);

const renderDivider = (active = false) => (
  <div className="row justify-content-center">
    <Divider>{active && <Bar className="active" />}</Divider>
  </div>
);

const FirstSlideShowSection = () => (
  <Div padding="80px 0" className="container">
    <Title>Uma maneira realmente PRÁTICA de gerenciar seu escritório</Title>
    {renderDivider()}
    <div className="row justify-content-center">
      <Presentation>
        O RJURI é um software jurídico que alia modernidade com praticidade. Com
        uma interface amigável e intuitiva você não terá a menor dificuldade em
        utilizar os recursos desta indispensável ferramenta.
      </Presentation>
    </div>
    {renderDivider(true)}
    <Carousel carouselData={carouselData} />
  </Div>
);

export default FirstSlideShowSection;
