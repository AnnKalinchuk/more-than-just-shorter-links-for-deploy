import React from "react";
import "./Menu.scss";

const Menu = ({ activeStatus, setActive }) => {
  return (
    <div
      className={
        activeStatus
          ? "menu__burger__wrapper active-menu"
          : "menu__burger__wrapper"
      }
      onClick={() => setActive(false)}
    >
      <nav className="menu__burger__body" onClick={(e) => e.stopPropagation()}>
        <ul className="menu__burger__list">
          <li className="menu__burger__item">
            <a
              href="/more-than-just-shorter-links-for-deploy/"
              className="menu__burger__link"
            >
              Features
            </a>
          </li>
          <li className="menu__burger__item">
            <a
              href="/more-than-just-shorter-links-for-deploy/"
              className="menu__burger__link"
            >
              Pricing
            </a>
          </li>
          <li className="menu__burger__item">
            <a
              href="/more-than-just-shorter-links-for-deploy/"
              className="menu__burger__link"
            >
              Resources
            </a>
          </li>
        </ul>
        <div className="horizontal__line"></div>
        <ul className="menu__burger__auhtorization burger__auhtorization">
          <li className="menu__burger__auhtorization__login login">
            <a
              href="/more-than-just-shorter-links-for-deploy/"
              className="burger__login__link"
            >
              Login
            </a>
          </li>
          <li className="menu__burger__auhtorization__signup signup">
            <a
              href="/more-than-just-shorter-links-for-deploy/"
              className="burger__signup__link"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
