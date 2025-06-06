import {Col, Container, Navbar, Nav, NavLink, Row} from "react-bootstrap";
import React from "react";
import logo from '../assets/images/logo.svg'
import search from '../assets/images/search.svg'
import log_in from '../assets/images/log_in.svg'
import {FaBars, FaTimes} from "react-icons/fa";
import '../styles/header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false, // Состояние для управления видимостью меню
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  }

  render() {
    const {isMenuOpen} = this.state;
    console.log('Header rendered. isMenuOpen:', isMenuOpen, "Button className:",`header-toggler ${isMenuOpen ? 'active' : ''}`);

    return (
      <header className="header">
        <Navbar
          expand="lg"
          className="my-custom-navbar-header"
        >
          <Container fluid={false}>
            {/* --- Логотип (всегда виден) --- */}
            <Navbar.Brand
              href="/"
              className="header-brand"
            >
              <img
                src={logo}
                alt="лого"
                className="header-logo"
              />
            </Navbar.Brand>

            {/* --- Кнопка-переключатель (гамбургер) --- */}
            {/* Видна только на маленьких экранах, скрыта на lg и выше */}
            <button
              className={`header-toggler ${isMenuOpen ? 'active' : ''}`}
              type="button"
              onClick={this.toggleMenu}
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>

          {/* --- Десктопная навигация (всегда видна на lg и выше) --- */}
          {/* Скрыта на маленьких экранах */}
            <div className="header-nav-desktop d-none d-lg-flex">
              <Nav className="header-nav-main">
                <Nav.Link
                  href="#products"
                  className="header-nav-link"
                >Продукция</Nav.Link>
                <Nav.Link
                  href="#materials"
                  className="header-nav-link"
                >Материалы</Nav.Link>
                <Nav.Link
                  href="#about"
                  className="header-nav-link"
                >О нас</Nav.Link>
                <Nav.Link
                  href="#contacts"
                  className="header-nav-link"
                >Контакты</Nav.Link>

                <div className="d-flex align-items-center header-nav-iconGroup">
                  <Nav.Link
                    href="#search"
                    className="header-nav-iconLink"
                  >
                    <img
                      src={search}
                      alt="поиск"
                      className="header-icon"
                    />
                  </Nav.Link>
                  <Nav.Link
                    href="#login"
                    className="header-nav-iconLink"
                  >
                    <img
                      src={log_in}
                      alt="войти"
                      className="header-icon"
                    />
                  </Nav.Link>
                </div>
              </Nav>
            </div>

            {/* --- Мобильное коллапс-меню (скрыто на lg и выше, управляется isMenuOpen) --- */}
            <div className={`header-collapse-menu d-lg-none ${isMenuOpen ? 'show' : ''}`}>
              <Nav className="flex-column text-start header-nav-main-mobile w-100">
                <Nav.Link
                  href="#products"
                  className="header-nav-link"
                  onClick={this.toggleMenu}
                >Продукция</Nav.Link>
                <Nav.Link
                  href="#materials"
                  className="header-nav-link"
                  onClick={this.toggleMenu}
                >Материалы</Nav.Link>
                <Nav.Link
                  href="#about"
                  className="header-nav-link"
                  onClick={this.toggleMenu}
                >О нас</Nav.Link>
                <Nav.Link
                  href="#contacts"
                  className="header-nav-link"
                  onClick={this.toggleMenu}
                >Контакты</Nav.Link>

                <div className="d-flex align-items-center header-nav-iconGroup-mobile mt-3">
                  <Nav.Link
                    href="#search"
                    className="header-nav-iconLink"
                    onClick={this.toggleMenu}
                  >
                    <img
                      src={search}
                      alt="поиск"
                      className="header-icon"
                    />
                  </Nav.Link><Nav.Link
                  href="#login"
                  className="header-nav-iconLink"
                  onClick={this.toggleMenu}
                >
                  <img
                    src={log_in}
                    alt="войти"
                    className="header-icon"
                  />
                </Nav.Link>
                </div>
              </Nav>
            </div>
          </Container>
        </Navbar>
        <hr className="container-fluid" />
      </header>
    );
  }
}


export default Header