import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Btn_secondary from "./btn_secondary.jsx";
import "../styles/section1.scss"


class Section1 extends React.Component {
  render() {
    return (
      <section className="simple-paper">
        <Container className="simple-paper-block">
          <Row>
            <Col
              xxl={5}
              xl={5}
              lg={7}
              md={7}
              sm={7}

            >
              <Row>
                <Col
                  className="simple-paper-block__title-wrapper"
                  xl={12}
                >
                  <h1>Простые вещи.<br/>
                    Из бумаги</h1>
                </Col>
                <Col
                  className="simple-paper-block__description-wrapper"
                  xl={12}
                >
                  <p className="simple-paper-block__description">Бума‌га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками.</p>
                </Col>
                <Col
                  className="simple-paper-block__button-wrapper"
                  xl={12}
                >
                  <Btn_secondary text="Каталог"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}


export default Section1