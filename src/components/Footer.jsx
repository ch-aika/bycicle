import React from "react";
import social01 from "../img/icons/social/01.png";
import social02 from "../img/icons/social/02.png";
import social03 from "../img/icons/social/03.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__column">
            <div className="footer__address">
              <p>AOD Россия</p>
              <p>Невский проспект, 10</p>
              <p>Россия, Санкт-Петербург - info@domain.com</p>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__social social">
              <a href="" className="social__link">
                <img src={social01} alt="" />
              </a>
              <a href="" className="social__link">
                <img src={social02} alt="" />
              </a>
              <a href="" className="social__link">
                <img src={social03} alt="" />
              </a>
            </div>
          </div>
          <div className="footer__column">
            <a href="" className="footer__dev dev">
              <span className="dev__text">Разработано: Name Surname</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
