import React from "react";
import glamorous, { Div } from "glamorous";

import romasoft from "../../images/icons/Romasoft.svg";
import colors from "../../helpers/colors";

const IconDiv = glamorous.div(
  "col-md-auto d-flex justify-content-center align-items-center",
  {
    backgroundColor: colors.azulMedioClaro,
    borderRadius: "15px",
    height: "30px",
    margin: "15px 15px",
    width: "30px",
    "& a": {
      color: colors.branco
    }
  }
);

const PhoneDiv = glamorous.div(
  {
    fontSize: "1.2em"
  },
  {
    "@media(max-width: 767px)": {
      padding: "30px 0"
    }
  }
);

const Footer = () => (
  <Div marginTop="80px">
    <Div
      backgroundColor={colors.cinzaClaro}
      color={colors.cinzaEscuro}
      className="row"
    >
      <div className="container">
        <Div padding="50px 0" className="row d-flex align-items-center">
          <div className="col-sm-12 col-md d-flex justify-content-center justify-content-md-start">
            <img src={romasoft} alt="romasoft" height="50" />
          </div>
          <PhoneDiv className="col-sm-12 col-md text-center">
            <strong>Fale com a gente! (12) 3144-2848</strong>
          </PhoneDiv>
          <div className="col-sm-12 col-md justify-content-center justify-content-md-end">
            <div className="d-flex justify-content-center justify-content-md-end">
              RJURI nas redes sociais
            </div>
            <div className="row justify-content-center justify-content-md-end">
              <IconDiv>
                <a
                  href="https://www.facebook.com/romasofttecnologia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </IconDiv>
              <IconDiv>
                <a
                  href="https://twitter.com/romasofttecnol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </IconDiv>
              <IconDiv>
                <a
                  href="https://br.linkedin.com/company/romasoft-tecnologia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </IconDiv>
              <IconDiv>
                <a
                  href="https://www.youtube.com/user/romasofttecnologia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
              </IconDiv>
            </div>
          </div>
        </Div>
      </div>
    </Div>
    <Div
      backgroundColor={colors.cinzaEscuro}
      color={colors.branco}
      padding="10px"
      className="row d-flex justify-content-center"
    >
      <strong>
        <small>2018 Romasoft Tecnologia ©</small>
      </strong>
    </Div>
  </Div>
);

export default Footer;
