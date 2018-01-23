import React from "react";
import glamorous, { Div } from "glamorous";
import { css } from "glamor";

import { staffQualities } from "./data";
import staff from "../../images/contato-funcionario.png";
import colors from "../../helpers/colors";

const BackgroundImageDiv = glamorous.div("row", {
  backgroundColor: colors.azulMedioClaro
});

const StaffImageDiv = glamorous.div({
  backgroundImage: `url(${staff})`,
  backgroundSize: "175%",
  backgroundPosition: "100% 100%",
  backgroundRepeat: "no-repeat"
});

const Title = glamorous.h2("text-center text-md-left", {
  color: colors.azulEscuro,
  // fontFamily: "Montserrat",
  fontSize: "1.8em",
  fontWeight: "bolder",
  letterSpacing: "4px"
});

const List = glamorous.div(
  {
    margin: "80px 0 0 0",
    padding: "20px 0 20px 0"
  },
  {
    "@media(max-width: 767px)": {
      textAlign: "center",
      marginBottom: "60px"
    }
  }
);

const ImageGradientBG = glamorous.div({
  "@media(min-width: 992px)": {
    background: `linear-gradient(to right, ${
      colors.branco095
    }, transparent 90%)`,
    borderRadius: "200px 0 0 200px",
    position: "absolute",
    top: "40%",
    left: "55%",
    height: "250px",
    width: "40%"
  },
  "@media(min-width: 1200px)": {
    top: "30%",
    left: "55%",
    height: "250px",
    width: "40%"
  }
});

const marginBox = css({
  padding: "80px 0 0 0",
  "@media(min-width: 768px)": {
    padding: "80px 0 100px 0"
  },
  "@media(min-width: 992px)": {
    padding: "80px 0 160px 0"
  }
});

const StaffQuality = () => (
  <BackgroundImageDiv>
    <div className="col-md-12">
      <div className="container h100">
        <div className="row h100">
          <div className={`col-md-7 order-1 ${marginBox}`}>
            <Title>E QUANDO VOCÊ PRECISAR DE AJUDA?</Title>
            <List>
              {staffQualities.map(quality => (
                <Div
                  padding="20px 0"
                  color={colors.azulEscuro}
                  fontSize="1.5em"
                  key={quality.id}
                  className="row d-flex align-items-center"
                >
                  <div className="col-md-2 text-center">
                    <img
                      src={quality.icon}
                      alt={`quality-${quality.id}`}
                      height="50"
                    />
                  </div>
                  <Div color={colors.branco} className="col">
                    <strong>{quality.text}</strong>
                  </Div>
                </Div>
              ))}
            </List>
          </div>
          <ImageGradientBG />
          <StaffImageDiv className="col-md-5 order-2" />
        </div>
      </div>
    </div>
  </BackgroundImageDiv>
);

export default StaffQuality;
