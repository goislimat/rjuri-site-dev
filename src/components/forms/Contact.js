import React from "react";
import glamorous, { H2 } from "glamorous";
import { Element } from "react-scroll";

import colors from "../../helpers/colors";

const FormHolder = glamorous.div(
  {
    backgroundColor: colors.azulEscuro,
    color: colors.branco,
    padding: "50px",
    marginTop: "-20%",
    boxShadow: "0 0 30px #aaa"
  },
  {
    "@media(max-width: 767px)": {
      margin: "80px 0 50px 0",
      padding: "20px"
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
  },
  ":disabled": {
    cursor: "text",
    filter: "saturate(60%)"
  }
});

const MarginSMDiv = glamorous.div({
  "@media(max-width: 767px)": {
    marginTop: "20px"
  }
});

class ContactForm extends React.Component {
  state = {
    data: {
      nome: "",
      telefone: "",
      email: "",
      mensagem: ""
    },
    enableButton: false,
    errors: {}
  };

  validate = () => {
    const { data: { nome, telefone, email, mensagem } } = this.state;

    const errors = {};

    if (!nome || !telefone || !email || !mensagem) {
      errors.some = "Algum erro";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "E-mail inválido";
    }

    this.setState({ errors, enableButton: Object.keys(errors).length === 0 });
    return errors;
  };

  handleChange = e => {
    e.persist();

    this.setState(
      prevState => ({
        data: {
          ...prevState.data,
          [e.target.name]: e.target.value
        }
      }),
      this.validate
    );
  };

  render() {
    const {
      data: { nome, telefone, email, mensagem },
      enableButton,
      errors
    } = this.state;

    return (
      <Element name="contact">
        <FormHolder>
          <H2 marginBottom="50px">
            <strong>SOLICITAR CONTATO</strong>
          </H2>
          <form
            action="https://formspree.io/comercial@romasofttecnologia.com.br"
            method="POST"
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col-md-8">
                  <input
                    name="nome"
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    value={nome}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <MarginSMDiv className="col-md">
                  <input
                    name="telefone"
                    type="text"
                    className="form-control"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={e => this.handleChange(e)}
                  />
                </MarginSMDiv>
              </div>
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="E-mail"
                value={email}
                onChange={e => this.handleChange(e)}
              />
              {errors.email && <small>{errors.email}</small>}
            </div>
            <div className="form-group">
              <textarea
                name="mensagem"
                type="text"
                rows="5"
                className="form-control"
                placeholder="Mensagem"
                value={mensagem}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <small>Todos os campos são obrigatórios</small>
            </div>
            <div className="text-center">
              <Button disabled={!enableButton}>
                SOLICITAR CONTATO DE UM CONSULTOR
              </Button>
            </div>
          </form>
        </FormHolder>
      </Element>
    );
  }
}

export default ContactForm;
