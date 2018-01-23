import React from "react";
import glamorous, { Div } from "glamorous";

import { secondCardsData as cardData } from "./data";
import colors from "../../helpers/colors";

const Card = glamorous.div(
  {
    border: "1px solid #ccc",
    margin: "0 30px",
    transition: "0.5s all",
    ":hover": {
      boxShadow: "0 0 30px #aaa"
    }
  },
  {
    "@media(min-width: 768px)": {
      margin: "0 100px"
    },
    "@media(min-width: 992px)": {
      margin: "0 20px"
    },
    "@media(min-width: 1200px)": {
      margin: "0 30px"
    }
  }
);

const CardTitle = glamorous.div(
  "d-flex justify-content-center align-items-center",
  {
    color: colors.branco,
    fontWeight: "bolder",
    fontSize: "1.2em",
    padding: "20px 30px",
    marginTop: "-50px",
    minHeight: "100px"
  },
  ({ backgroundColor }) => ({
    backgroundColor
  })
);

const CardText = glamorous.div(
  "d-flex justify-content-center align-items-center",
  {
    padding: "25px 10px"
  },
  {
    "@media(min-width: 768px)": {
      padding: "40px 80px"
    },
    "@media(min-width: 992px)": {
      padding: "0 40px",
      minHeight: "400px"
    }
  }
);

const Divider = glamorous.div(
  "col-8",
  {
    height: "1px",
    backgroundColor: "#ccc"
  },
  props => ({
    ...props
  })
);

const CardHolder = glamorous.div(
  {
    "& .card:nth-child(n+2)": {
      marginTop: "130px"
    }
  },
  {
    "@media(min-width: 992px)": {
      "& .card:nth-child(n+2)": {
        marginTop: 0
      }
    }
  }
);

const SecondCardSection = () => (
  <Div padding="130px 0 80px 0" className="container">
    <CardHolder className="row d-flex justify-content-center">
      {cardData.map(card => (
        <Card key={card.id} className="col-lg-3 text-center card">
          <CardTitle backgroundColor={card.color}>{card.title}</CardTitle>
          <Div padding="40px 0">
            <img src={card.icon} alt={`${card.title}-img`} height="150" />
          </Div>
          <div className="row d-flex justify-content-center">
            <Divider />
          </div>
          <CardText>{card.text}</CardText>
          <div className="row d-flex justify-content-center">
            <Divider marginBottom="60px" />
          </div>
        </Card>
      ))}
    </CardHolder>
  </Div>
);

export default SecondCardSection;
