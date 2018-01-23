import React from "react";
import glamorous, { Span } from "glamorous";

import RJuriLogo from "../../images/icons/rjuri-menu.svg";
import colors from "../../helpers/colors";

const Nav = glamorous.nav("row d-flex align-items-center", {
  background: `linear-gradient(${colors.azulClaro}, ${colors.azulMedioClaro})`,
  boxShadow: "0px 5px 10px #888",
  minHeight: "10%",
  padding: "20px 0",
  "& .navbar-toggler": {
    marginRight: "20px"
  },
  "& button i": {
    color: "#fff",
    fontSize: "1.5em"
  }
});

const IconDiv = glamorous.div(
  "col-md-auto d-flex justify-content-center align-items-center",
  {
    backgroundColor: colors.branco,
    borderRadius: "15px",
    color: colors.azulMedioClaro,
    height: "30px",
    margin: "0 5px",
    width: "30px",
    "& a": {
      color: colors.azulMedioClaro
    }
  },
  {
    "@media(max-width: 767px)": {
      margin: "0 2px"
    }
  }
);

const SocialMediaList = glamorous.li({
  "@media(max-width: 991px)": {
    margin: "2em 1em 0em 0.5em"
  }
});

const ULStackSM = glamorous.ul({
  "@media(max-width: 991px)": {
    float: "left",
    width: "55%"
  }
});

const ClientSectionStackSM = glamorous.div({
  color: colors.branco,
  cursor: "pointer",
  fontSize: "0.9em",
  "& a:hover, & a": {
    color: colors.branco,
    textDecoration: "none"
  },
  "@media(max-width: 991px)": {
    marginTop: "2.1em",
    width: "45%"
  }
});

const TopNavbar = () => (
  <Nav className="row navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <div className="col-auto d-flex justify-content-center">
        <img src={RJuriLogo} alt="rjuri-logo" height="50" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars" aria-hidden="true" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ULStackSM className="col-lg d-flex justify-content-lg-center navbar-nav">
          <SocialMediaList className="row nav-item d-flex justify-content-start">
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
          </SocialMediaList>
        </ULStackSM>
        <ClientSectionStackSM className="col-lg-auto d-flex justify-content-end align-items-center">
          <Span color={colors.branco} paddingRight="10px" fontSize="1.5em">
            <i className="fa fa-sign-in" aria-hidden="true" />
          </Span>
          <a
            href="http://suporte.romasofttecnologia.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Área do cliente</span>
          </a>
        </ClientSectionStackSM>
      </div>
    </div>
  </Nav>
);

export default TopNavbar;
