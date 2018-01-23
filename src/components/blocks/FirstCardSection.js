import React from "react";
import { css } from "glamor";
import glamorous, { Div } from "glamorous";

import { FirstCardsData as CardsData } from "./data";
import colors from "../../helpers/colors";

const textCenterSM = css({
  "@media(max-width: 767px)": {
    textAlign: "center"
  }
});

const Title = glamorous.h2(
  `col d-flex justify-content-center align-items-center ${textCenterSM}`,
  {
    backgroundColor: colors.azulMedioClaro,
    color: colors.branco,
    // fontFamily: "Montserrat",
    fontSize: "1.1em",
    fontWeight: "bolder",
    height: "100%",
    letterSpacing: "1px",
    textTransform: "uppercase"
  },
  {
    "@media(min-width: 992px)": {
      fontSize: "1.4em"
    }
  }
);

const Card = glamorous.div("col-md-12", {
  fontSize: "1.2em",
  marginBottom: "80px",
  padding: "20px",
  transition: "0.5s all"
});

const CardTitle = glamorous.div(
  {
    fontSize: "1.5em",
    fontWeight: "bold",
    paddingBottom: "10px",
    marginTop: "20px"
  },
  {
    "@media(min-width: 576px)": {},
    "@media(min-width: 768px)": {
      marginTop: 0
    },
    "@media(min-width: 992px)": {},
    "@media(min-width: 1200px)": {}
  },
  ({ color }) => ({
    color
  })
);

const animationType = i =>
  i % 2 === 0 ? "fadeInLeftShort" : "fadeInRightShort";

const getClassname = (i, image = false) => {
  if (i % 2 === 0) {
    if (image) {
      return "col-md-5 col-lg-3 d-flex justify-content-center align-items-center order-1";
    }
    return "col-md-7 order-2";
  }
  if (image) {
    return "col-md-5 col-lg-3 d-flex justify-content-center align-items-center order-sm-1 order-md-2";
  }
  return "col-md-7 offset-lg-2 order-sm-2 order-md-1 text-right";
};

const FirstCardSection = () => (
  <div>
    <Div height="120px" className="row">
      <Title>Mas afinal, quais são as rotinas diferenciadas do RJURI?</Title>
    </Div>
    <Div paddingTop="80px" className="container">
      <div className="row d-flex justify-content-center">
        {CardsData.map((card, i) => (
          <Card key={card.id} className="animatedParent animateOnce">
            <div className={`row animated ${animationType(i)}`}>
              <div className={getClassname(i, true)}>
                <Div height="200px">
                  <img src={card.icon} alt={`${card.title}-img`} width="200" />
                </Div>
              </div>
              <div className={getClassname(i)}>
                <CardTitle color={card.color} className={textCenterSM}>
                  {card.title}
                </CardTitle>
                <div className={textCenterSM}>{card.text}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Div>
  </div>
);

export default FirstCardSection;
