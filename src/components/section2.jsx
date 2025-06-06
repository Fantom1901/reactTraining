import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "../styles/section2.scss"
import bc1image from "../assets/images/BC_1.svg"
import bc2image from "../assets/images/BC_2.svg"
import bc3image from "../assets/images/BC_3.svg"
import fv8image from "../assets/images/Folder_v8.svg"

const images = {
  BC_1: bc1image,
  BC_2: bc2image,
  BC_3: bc3image,
  FV8: fv8image,
}

class Section2 extends React.Component {
  render() {
    return (
      <div className="section-bg">
        <Container>

          <Row className="learning-results-block">
            <Col xs={4}>
              <div className="learning-results-block__item">
                <hr className="learning-results-block__separator" />
                <Row>
                  <div className="col-6 learning-results-block__image-wrapper">
                    <img
                      className="img-fluid learning-results-block__image"
                      src={images.BC_1}
                      alt="Бизнес изображение 1"
                    />
                  </div>

                  <div className="col-6 learning-results-block__content">
                    <Row>
                      <h3 className="col-12 learning-results-block__title">V.1</h3>
                      <p className="col-12 learning-results-block__description">Результат вашего обучения</p>
                    </Row>
                  </div>
                </Row>
              </div>
            </Col>

            <Col xs={4}>
              <div className="learning-results-block__item">
                <hr className="learning-results-block__separator" />
                <Row>
                  <div className="col-6 learning-results-block__image-wrapper">
                    <img
                      className="img-fluid learning-results-block__image"
                      src={images.BC_2}
                      alt="Бизнес изображение 2"
                    />
                  </div>

                  <div className="col-6 learning-results-block__content">
                    <Row>
                      <h3 className="col-12 learning-results-block__title">V.2</h3>
                      <p className="col-12 learning-results-block__description">Результат вашего обучения</p>
                    </Row>
                  </div>
                </Row>
              </div>
            </Col>

            <Col xs={4}>
              <div className="learning-results-block__item">
                <hr className="learning-results-block__separator" />
                <Row>
                  <div className="col-6 learning-results-block__image-wrapper">
                    <img
                      className="img-fluid learning-results-block__image"
                      src={images.BC_3}
                      alt="Бизнес изображение 3"
                    />
                  </div>

                  <div className="col-6 learning-results-block__content">
                    <Row>
                      <h3 className="col-12 learning-results-block__title">V.3</h3>
                      <p className="col-12 learning-results-block__description">Результат вашего обучения</p>
                    </Row>
                  </div>
                </Row>

              </div>
            </Col>
          </Row>

          <Row className="whiteness-feature-block">
            <Col xs={7}>
              <div className="whiteness-feature-block__image-wrapper">
                <img
                  className="img-fluid align-content-center whiteness-feature-block__image"
                  src={images.FV8}
                  alt="Папка"
                />
              </div>
            </Col>

            <Col
              xl={5}
              className="d-flex whiteness-feature-block__content">
            <div className="align-content-center">
              <div className="col-12">
                <h2 className="whiteness-feature-block__title">Максимальная белизна</h2>
              </div>
              <div className="col-12 whiteness-feature-block__description">
                <p className="whiteness-feature-block__description__upper">
                  Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят белые минеральные вещества: мел, тальк, каолин и др. Эта операция называется наполнением.
                </p>
              </div>
              <div className="col-12 whiteness-feature-block__description">
                <p className="whiteness-feature-block__description__lower">
                  Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}


export default Section2