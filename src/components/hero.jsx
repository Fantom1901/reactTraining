import React from "react";
import Section2 from "./section2.jsx"
import Section1 from "./section1.jsx";
import paper from "../assets/images/paper.svg"
import {Container} from "react-bootstrap";

import '../styles/hero.scss'; // Основной файл стилей для Hero и общих правил

class Hero extends React.Component {
  render() {
    return (
      <section className="hero-block position-relative">
        <div className="hero-block__section-one z-0"> {/* Explicit z-0 for clarity */}
          <Section1 />
        </div>
        <div className="hero-block__section-two z-2"> {/* Explicit z-2 */}
          <Section2 />
        </div>

        <div className="hero-block__simple-image-wrapper z-1"> {/* Explicit z-1 */}
          <img
            className="hero-block__simple-image img-fluid" // img-fluid для адаптивности Bootstrap
            src={paper} // Использование импортированной переменной paper
            alt="Изображение Simple"
          />
        </div>
      </section>
    );
  }
}

export default Hero