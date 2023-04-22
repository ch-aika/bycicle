import React from "react";
import bgmain from "../img/bg_main.jpg";
import titlle01 from "../img/icons/title/01.png";
import logos01 from "../img/logos/01.png";
import brands01 from "../img/brands/01.jpg";
import titlle02 from "../img/icons/title/02.png";
import brands02 from "../img/brands/02.jpg";
import logos02 from "../img/logos/02.png";
import brands04 from "../img/brands/04.jpg";
import titlle03 from "../img/icons/title/03.png";
import brands03 from "../img/brands/03.jpg";
import logos03 from "../img/logos/03.png";
import brands05 from "../img/brands/05.jpg";
import titlle04 from "../img/icons/title/04.png";
import brands06 from "../img/brands/06.jpg";
import brands07 from "../img/brands/07.jpg";
import twitter from "../img/icons/twitter.png";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Shop from "../components/Shop";

export default function Main() {
  return (
    <div className="wrapper">
      <main className="page">
        <Header />
        <div className="main-screen">
          <div
            className="main-screen__bg ibg"
            style={{ backgroundImage: `url(${bgmain})` }}
          >
            <img src={bgmain} alt="" />
          </div>
        </div>
        <div className="content">
          <section className="generation">
            <div className="container">
              <div className="generation__block block">
                <div className="block__icon">
                  <img src={titlle01} alt="" />
                </div>
                <h1 className="block__title">Аренда винтажных велосипедов</h1>
                <div className="block__text">
                  в AOD вы можете арендовать любой велосипед на свой вкус и
                  цвет! У нас обширное количество выбора. Мы славимся своим
                  качеством и репутацией. Наши велосипеды проходят тчательную
                  проверку перед их арендой, все велосипеды в идеальном
                  состоянии!
                </div>
              </div>
            </div>
          </section>
          <section className="brands">
            <div className="brands__row">
              <div className="brands__column brands__column_b">
                <a href="" className="brands__item item">
                  <span className="item__logo">
                    <img src={logos01} alt="" />
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${brands01})` }}
                  >
                    <img src={brands01} alt="" />
                  </span>
                </a>
              </div>
              <div className="brands__column">
                <div className="brands__content block">
                  <div className="block__icon">
                    <img src={titlle02} alt="" />
                  </div>
                  <h2 className="block__title">велосипед Oliva</h2>
                  <div className="block__text block__text_j">
                    Славится своим дизайном, подходит как и для вечерней поездки
                    по городу, так и для участия в заездах на длинные дистанции.
                  </div>
                </div>
                <div
                  className="brands__image ibg"
                  style={{ backgroundImage: `url(${brands02})` }}
                >
                  <img src={brands02} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="brands brands_rev">
            <div className="brands__row">
              <div className="brands__column brands__column_b">
                <a href="" className="brands__item item">
                  <span className="item__logo">
                    <img src={logos02} alt="" />
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${brands04})` }}
                  >
                    <img src={brands04} alt="" />
                  </span>
                </a>
              </div>
              <div className="brands__column">
                <div className="brands__content block">
                  <div className="block__icon">
                    <img src={titlle03} alt="" />
                  </div>
                  <h2 className="block__title">велосипед Boriosa</h2>
                  <div className="block__text block__text_j">
                    Этот велосипед - определение слова стиль. нельзя не обратить
                    внимание на эти изящные детали, рама велосипеда сделана из
                    100% хромолибдена, велосипед подойдет для повседневного
                    использования!
                  </div>
                </div>
                <div
                  className="brands__image ibg"
                  style={{ backgroundImage: `url(${brands03})` }}
                >
                  <img src={brands03} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="brands brands_last">
            <div className="brands__row">
              <div className="brands__column">
                <a href="" className="brands__item item">
                  <span className="item__logo">
                    <img src={logos03} alt="" />
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${brands05})` }}
                  >
                    <img src={brands05} alt="" />
                  </span>
                </a>
              </div>
              <div className="brands__column">
                <div className="brands__content block">
                  <div className="block__icon">
                    <img src={titlle04} alt="" />
                  </div>
                  <h2 className="block__title">велосипед - M. Hulot</h2>
                  <div className="block__text block__text_j">
                    Велосипед 1989 года, выполнен из нержавеющей стали,
                    сохранился в идеальном состоянии! С этим велосипедом вы
                    можете отправиться на вечернюю поездку по городу. Велосипед
                    выполнен максимально в городском стиле, подойдет для
                    красивой фотосессии.
                  </div>
                </div>
                <div
                  className="brands__image ibg"
                  style={{ backgroundImage: `url(${brands06})` }}
                >
                  <img src={brands06} alt="" />
                </div>
              </div>
              <div className="brands__column">
                <a href="" className="brands__item item">
                  <span className="item__logo">
                    <img src={logos03} alt="" />
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${brands07})` }}
                  >
                    <img src={brands07} alt="" />
                  </span>
                </a>
              </div>
            </div>
          </section>
          <section className="slider">
            <div className="container">
              <div className="slider__body">
                <div className="slider__item">
                  <div className="slider__icon">
                    <img src={twitter} alt="" />
                  </div>
                  <h3 className="slider__title">
                    Виталий Алексеев @aod <span>/ 35 min</span>
                  </h3>
                  <div className="slider__text">
                    Все наши сотрудники качественно следят за исправностью
                    велосипеда, поддерживают их в рабочем состоянии, заменяют
                    необходимые детали!
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Shop />
          <Subscribe />
          <Footer />
        </div>
      </main>
    </div>
  );
}
