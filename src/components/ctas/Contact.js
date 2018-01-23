import React from "react";
import glamorous, { Div } from "glamorous";
import { Link } from "react-scroll";

import colors from "../../helpers/colors";

const TryDiv = glamorous.div(
  {
    backgroundColor: colors.azulEscuro,
    color: colors.branco,
    height: "250px",
    "& .call-text": {
      fontSize: "1.6em",
      fontWeight: "bolder",
      paddingBottom: "20px",
      "@media(min-width: 992px)": {
        paddingBottom: 0
      }
    }
  },
  {
    "@media(min-width: 992px)": {
      height: "150px"
    }
  }
);

const Button = glamorous.button({
  backgroundColor: colors.rosa,
  border: "0",
  color: colors.branco,
  fontSize: "0.9em",
  fontWeight: "bold",
  padding: "15px 45px",
  ":hover": {
    cursor: "pointer",
    filter: "saturate(60%)"
  },
  ":focus": {
    outline: "0"
  }
});

const Contact = () => (
  <TryDiv className="row d-flex align-items-center">
    <div className="container">
      <div className="row h100 d-flex justify-content-between">
        <div className="col-sm-12 col-md-auto text-center call-text">
          Que tal testar por 14 dias?
        </div>
        <Div className="col-sm-12 col-md-auto d-flex justify-content-center align-items-center">
          <Link to="contact" spy smooth duration={500}>
            <Button>EXPERIMENTAR GRÁTIS</Button>
          </Link>
        </Div>
      </div>
    </div>
  </TryDiv>
);

export default Contact;
