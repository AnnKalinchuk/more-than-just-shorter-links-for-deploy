import React from "react";
import logo from "../../assets/images/logo.svg";
import "./header.scss";

const Header = ({ isActiveMenuBurger, setIsActiveMenuBurger }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__logo logo">
            <a href="#" className="logo__link">
              <img src={logo} className="logo__img" />
            </a>
          </div>
          <div className="header__menu menu">
            <nav className="menu__body">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Features
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Pricing
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Resources
                  </a>
                </li>
              </ul>
              <ul className="header__authorization authorization">
                <li className="authorization__login login">
                  <a href="#" className="login__link">
                    Login
                  </a>
                </li>
                <li className="authorization__signup signup">
                  <a href="#" className="signup__link">
                    Sign Up
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className={
              isActiveMenuBurger
                ? "menu__burger__icon active-menu-icon"
                : "menu__burger__icon "
            }
            onClick={() => setIsActiveMenuBurger(!isActiveMenuBurger)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
