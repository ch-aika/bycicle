import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../redux/slices/userReducer";

export default function Header() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  function openMenu() {
    document.querySelector(".icon-menu").classList.toggle("active");
    document.body.classList.toggle("lock");
    document.querySelector(".menu__body").classList.toggle("active");
  }

  return (
    <header className="header">
      <div className="header__row">
        <nav className="header__menu menu">
          <div className="menu__icon icon-menu" onClick={openMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu__body">
            <ul className="menu__list">
              <li>
                <Link to="/steal" className="menu__link">
                  Сообщить
                </Link>
              </li>
              {token && (
                <li>
                  <Link to="/officers" className="menu__link">
                    Сотрудники
                  </Link>
                </li>
              )}
              {!token && (
                <li>
                  <Link to="/" className="menu__link">
                    Главная
                  </Link>
                </li>
              )}
              {!token && (
                <li>
                  <Link to="/login" className="menu__link">
                    Логин
                  </Link>
                </li>
              )}
              {!token && (
                <li>
                  <Link to="/register" className="menu__link">
                    Регистрация
                  </Link>
                </li>
              )}
              {token && (
                <li>
                  <Link
                    to="/register"
                    onClick={() => dispatch(clearToken())}
                    className="menu__link"
                  >
                    Выйти
                  </Link>
                </li>
              )}
              {token && (
                <li>
                  <Link to="/cases" className="menu__link">
                    Сообщения о кражах
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
        <div className="header__logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
}
