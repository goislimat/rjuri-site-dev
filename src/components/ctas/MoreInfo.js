import React from "react";
import glamorous from "glamorous";
import { css } from "glamor";
import { Link } from "react-scroll";

import BackgroundImage from "../../images/cta1920.jpg";
import colors from "../../helpers/colors";

const BackgroundImageDiv = glamorous.div(
  "row d-flex justify-content-center align-items-end",
  {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: "50% 44%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "90%",
    padding: "80px 0"
  }
);

const CTATextDiv = glamorous.div(
  "col-md-10 col-lg-6 text-center",
  {
    color: colors.branco,
    // fontFamily: "Montserrat",
    fontSize: "120%",
    fontWeight: "bolder",
    letterSpacing: "3px",
    textShadow: "3px 4px 9px #555",
    textTransform: "uppercase",
    marginBottom: "-10%",
    position: "relative",
    animation: `2s ${css.keyframes({
      "0%": { left: "200px" },
      "99%": { left: "1px" },
      "100": { left: "0" }
    })}`
  },
  {
    "@media(min-width: 768px)": {
      fontSize: "170%",
      marginBottom: "-5%"
    },
    "@media(min-width: 992px)": {
      fontSize: "160%"
    },
    "@media(min-width: 1200px)": {
      fontSize: "240%"
    }
  }
);

const CTAButton = glamorous.button(
  {
    backgroundColor: colors.azulMedioClaro,
    border: "0",
    color: colors.branco,
    fontSize: "1.1em",
    fontWeight: "bold",
    padding: "20px 40px",
    textTransform: "uppercase",
    transition: "0.5s filter",
    ":hover": {
      cursor: "pointer",
      filter: "saturate(60%)"
    },
    ":focus": {
      outline: "0"
    }
  },
  {
    position: "relative",
    animation: `2s ${css.keyframes({
      "0%": { right: "500px" },
      "99%": { right: "1px" },
      "100": { right: "0" }
    })}`
  },
  {
    "@media(max-width: 700px)": {
      fontSize: "0.8em",
      padding: "15px 30px"
    }
  }
);

const MoreInfo = () => (
  <BackgroundImageDiv>
    <CTATextDiv>
      SOLUÇÃO INDISPENSÁVEL E PRÁTICA PARA GERENCIAR SEU ESCRITÓRIO OU
      DEPARTAMENTO JURÍDICO
    </CTATextDiv>
    <div className="col-md-12 row justify-content-center">
      <Link to="contact" spy smooth duration={1000}>
        <CTAButton>RECEBA MAIS INFORMAÇÕES</CTAButton>
      </Link>
    </div>
  </BackgroundImageDiv>
);

export default MoreInfo;
