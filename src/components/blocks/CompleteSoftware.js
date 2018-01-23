import React from "react";
import glamorous, { Div } from "glamorous";

import { secondCarouselData as softwareFuncs } from "./data";
import colors from "../../helpers/colors";

const BackgroundGradient = glamorous.div("col-md-12 h100", {
  background: `linear-gradient(${colors.branco01}, ${colors.branco095})`
});

const CallSection = glamorous.div(
  "col-md-6 col-lg-4 d-flex align-items-center h100",
  {
    fontSize: "3em",
    color: colors.azulEscuro,
    paddingTop: "80px"
  },
  {
    "@media(min-width: 768px)": {
      fontSize: "3.5em"
    },
    "@media(min-width: 992px)": {
      fontSize: "3em",
      paddingTop: 0
    },
    "@media(min-width: 1200px)": {
      fontSize: "3.5em"
    }
  }
);

const CompleteSoftware = () => (
  <Div minHeight="60%" className="row">
    <BackgroundGradient>
      <div className="container h100">
        <div className="row d-flex justify-content-center align-items-center">
          <CallSection>
            <p>
              UM<br />SOFTWARE<br />
              <strong>COMPLETO</strong>
            </p>
          </CallSection>
          <Div padding="80px 0 50px 0" className="col-lg-8 row">
            {softwareFuncs.map(funcs => (
              <Div
                key={funcs.id}
                paddingBottom="30px"
                className="col-md-4 col-lg-6 text-center text-sm-left"
              >
                <div className="col-lg-3">
                  <img src={funcs.icon} alt={`${funcs.title}-img`} width="50" />
                </div>
                <div className="col-lg">
                  <Div color={colors.azulMedioClaro} padding="10px 0">
                    <strong>{funcs.title}</strong>
                  </Div>
                  <div>
                    <strong>{funcs.text}</strong>
                  </div>
                </div>
              </Div>
            ))}
          </Div>
        </div>
      </div>
    </BackgroundGradient>
  </Div>
);

export default CompleteSoftware;
