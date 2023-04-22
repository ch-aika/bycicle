import logo from "../img/logo.png";
import React from "react";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="subscribe__body">
          <div className="subscribe__logo">
            <img src={logo} alt="" />
          </div>
          <div className="subscribe__label">Оставайтесь на седле!</div>
          <form action="#" className="subscribe__form">
            <div className="subscribe__input">
              <input
                autoComplete="off"
                type="text"
                name="form[]"
                data-value="enter your email..."
                className="input req email"
              />
            </div>
            <div className="subscribe__button">
              <button type="submit" className="subscribe_btn">
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
