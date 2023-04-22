import React from "react";
import bike from "../img/icons/bike.png";
import shop01 from "../img/shop/01.jpg";
import shop02 from "../img/shop/02.jpg";
import shop03 from "../img/shop/03.jpg";
import shop04 from "../img/shop/04.jpg";
import shop06 from "../img/shop/06.jpg";
import shop07 from "../img/shop/07.jpg";
import shop08 from "../img/shop/08.jpg";
import shop09 from "../img/shop/09.jpg";

export default function Shop() {
  return (
    <div className="shop">
      <div className="shop__body">
        <div className="shop__column shop__column_b">
          <div className="shop__block block-shop">
            <div className="block-shop__row">
              <div className="block-shop__column">
                <a href="" className="block-shop__item block-shop__item_l item">
                  <span className="item__logo">
                    <img src={bike} alt="" />
                    <span>Арендовать сейчас</span>
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${shop01})` }}
                  >
                    <img src={shop01} alt="" />
                  </span>
                </a>
              </div>
              <div className="block-shop__column">
                <a href="" className="block-shop__item block-shop__item_l item">
                  <span className="item__logo">
                    <img src={bike} alt="" />
                    <span>Арендовать сейчас</span>
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${shop02})` }}
                  >
                    <img src={shop02} alt="" />
                  </span>
                </a>
              </div>
            </div>
            <a href="" className="block-shop__item item">
              <span className="item__logo">
                <img src={bike} alt="" />
                <span>Арендовать сейчас</span>
              </span>
              <span
                className="item__image ibg"
                style={{ backgroundImage: `url(${shop03})` }}
              >
                <img src={shop03} alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="shop__column">
          <a href="" className="block-shop__item block-shop__item_b item">
            <span className="item__logo">
              <img src={bike} alt="" />
              <span>Арендовать сейчас</span>
            </span>
            <span
              className="item__image ibg"
              style={{ backgroundImage: `url(${shop04})` }}
            >
              <img src={shop04} alt="" />
            </span>
          </a>
        </div>
        <div className="shop__column">
          <a href="" className="block-shop__item block-shop__item_b item">
            <span className="item__logo">
              <img src={bike} alt="" />
              <span>Арендовать сейчас</span>
            </span>
            <span
              className="item__image ibg"
              style={{ backgroundImage: `url(${shop06})` }}
            >
              <img src={shop06} alt="" />
            </span>
          </a>
        </div>
        <div className="shop__column shop__column_b">
          <div className="shop__block block-shop">
            <a href="" className="block-shop__item item">
              <span className="item__logo">
                <img src={bike} alt="" />
                <span>Арендовать сейчас</span>
              </span>
              <span
                className="item__image ibg"
                style={{ backgroundImage: `url(${shop07})` }}
              >
                <img src={shop07} alt="" />
              </span>
            </a>
            <div className="block-shop__row">
              <div className="block-shop__column">
                <a href="" className="block-shop__item block-shop__item_l item">
                  <span className="item__logo">
                    <img src={bike} alt="" />
                    <span>Арендовать сейчас</span>
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${shop08})` }}
                  >
                    <img src={shop08} alt="" />
                  </span>
                </a>
              </div>
              <div className="block-shop__column">
                <a href="" className="block-shop__item block-shop__item_l item">
                  <span className="item__logo">
                    <img src={bike} alt="" />
                    <span>Арендовать сейчас</span>
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${shop09})` }}
                  >
                    <img src={shop09} alt="" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shop__footer">
        <div className="container">
          <a href="" className="shop__btn">
            Арендовать велосипед
          </a>
        </div>
      </div>
    </div>
  );
}
