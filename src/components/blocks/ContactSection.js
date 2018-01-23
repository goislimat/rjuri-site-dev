import React from "react";
import glamorous from "glamorous";

import ContactForm from "../forms/Contact";
import colors from "../../helpers/colors";

const Presentation = glamorous.div(
  {
    color: colors.cinzaEscuro,
    fontSize: "2.4em",
    marginTop: "80px",
    marginLeft: 0,
    padding: 0,
    "& span": {
      color: colors.azulEscuro
    }
  },
  {
    "@media(min-width: 992px)": {
      border: "1px solid #ccc",
      fontSize: "2.3em",
      marginLeft: "-30px",
      padding: "7px",
      paddingLeft: "50px"
    },
    "@media(min-width: 1200px)": {
      fontSize: "2.4em",
      padding: "20px",
      paddingLeft: "50px"
    }
  }
);

const ContactSection = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-5 order-1 order-md-2">
        <Presentation>
          <strong>
            Ainda possui dúvida da importância do <span>RJURI</span> em seu
            escritório?
          </strong>
        </Presentation>
      </div>
      <div className="col-sm-12 col-md-7 order-2 order-md-1">
        <ContactForm />
      </div>
    </div>
  </div>
);

export default ContactSection;
