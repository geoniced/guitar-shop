import React from "react";
import {Link} from "react-router-dom";
import electroGuitar1 from "../../assets/img/electro-1.png";
import electroGuitar2 from "../../assets/img/electro-2.png";
import electroGuitar3 from "../../assets/img/electro-3.png";
import electroGuitar4 from "../../assets/img/electro-4.png";
import ukulele1 from "../../assets/img/ukulele-1.png";
import ukulele2 from "../../assets/img/ukulele-2.png";
import {ReactComponent as IconStar} from "../../assets/img/icon-star-whole.svg";
import {ReactComponent as IconStarHalf} from "../../assets/img/icon-star-half.svg";
import {ReactComponent as IconStarEmpty} from "../../assets/img/icon-star-empty.svg";
import {ReactComponent as IconArrowRight} from "../../assets/img/icon-arrow-right.svg";
import {ReactComponent as IconPriceLineSeparator} from "../../assets/img/icon-price-line-separator.svg";
import {ReactComponent as IconArrowUp} from "../../assets/img/icon-arrow-up.svg";
import {ReactComponent as IconArrowDown} from "../../assets/img/icon-arrow-down.svg";
import {ReactComponent as IconCheckbox} from "../../assets/img/icon-checkbox-box.svg";
import {AppRoute} from "../../const";


const GuitarCatalogPage = () => {
  return (
    <main className="page-content">
      <div className="page-content__wrapper container">
        <h1 className="page-content__title">Каталог гитар</h1>

        <ul className="page-content__breadcrumbs breadcrumbs">
          <li className="breadcrumbs__item">
            <Link to={AppRoute.ROOT} className="breadcrumbs__link">Главная</Link>
          </li>
          <li className="breadcrumbs__item breadcrumbs__item--arrow">
            <IconArrowRight className="breadcrumbs__arrow" />
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link breadcrumbs__link--current">Каталог</a>
          </li>
        </ul>

        <div className="page-content__catalog-wrapper">
          <section className="page-content__guitar-filters guitar-filters">
            <h2 className="guitar-filters__title">Фильтр</h2>

            <form action="#" className="guitar-filters__form">
              <fieldset className="guitar-filters__fieldset">
                <legend className="guitar-filters__legend">Цена, ₽</legend>

                <div className="guitar-filters__price-wrapper">
                  <label htmlFor="filters-price-from" className="visually-hidden">От</label>
                  <input className="guitar-filters__numeric-input" type="number" name="filters-price-from" id="filters-price-from" placeholder="1 000" />

                  <IconPriceLineSeparator className="guitar-filters__price-separator" />

                  <label htmlFor="filters-price-to" className="visually-hidden">До</label>
                  <input className="guitar-filters__numeric-input" type="number" name="filters-price-to" id="filters-price-to" placeholder="30 000" />
                </div>
              </fieldset>

              <fieldset className="guitar-filters__fieldset">
                <legend className="guitar-filters__legend">Тип гитар</legend>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-type-acoustic" id="filters-type-acoustic" />
                <label htmlFor="filters-type-acoustic" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  Акустические гитары
                </label>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-type-electro" id="filters-type-electro" defaultChecked />
                <label htmlFor="filters-type-electro" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  Электрогитары
                </label>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-type-ukulele" id="filters-type-ukulele" defaultChecked />
                <label htmlFor="filters-type-ukulele" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  Укулеле
                </label>
              </fieldset>

              <fieldset className="guitar-filters__fieldset">
                <legend className="guitar-filters__legend">Количество струн</legend>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-strings-4" id="filters-strings-4" defaultChecked />
                <label htmlFor="filters-strings-4" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  4
                </label>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-strings-6" id="filters-strings-6" defaultChecked />
                <label htmlFor="filters-strings-6" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  6
                </label>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-strings-7" id="filters-strings-7" />
                <label htmlFor="filters-strings-7" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  7
                </label>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-strings-12" id="filters-strings-12" disabled />
                <label htmlFor="filters-strings-12" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  12
                </label>
              </fieldset>

              <button className="guitar-filters__show button" type="submit">Показать</button>
            </form>
          </section>

          <section className="page-content__guitar-catalog guitar-catalog">
            <h2 className="visually-hidden">Список гитар</h2>
            <div className="guitar-catalog__sorting sorting">
              <p className="sorting__text">
                Сортировать:
              </p>

              <ul className="sorting__sort-types">
                <li className="sorting__sort-type-item">
                  <a href="#" className="sorting__sort-type-text sorting__sort-type-text--price sorting__sort-type-text--active">по цене</a>
                </li>
                <li className="sorting__sort-type-item">
                  <a href="#" className="sorting__sort-type-text sorting__sort-type-text--popularity">по популярности</a>
                </li>
              </ul>

              <ul className="sorting__sort-orders">
                <li className="sorting__sort-order-item">
                  <a href="#" className="sorting__sort-order-button">
                    <IconArrowUp className="sorting__sort-order-icon" />
                    <span className="visually-hidden">От меньшего к большему</span>
                  </a>
                </li>
                <li className="sorting__sort-order-item">
                  <a href="#" className="sorting__sort-order-button">
                    <IconArrowDown className="sorting__sort-order-icon" />
                    <span className="visually-hidden">От большего к меньшему</span>
                  </a>
                </li>
              </ul>
            </div>

            <ul className="guitar-catalog__guitars">
              <li className="guitar-catalog__guitar-item">
                <article className="guitar-catalog__guitar guitar-card">
                  <div className="guitar-card__title-with-price-wrapper">
                    <h3 className="guitar-card__title">Честер Bass</h3>
                    <p className="guitar-card__price">17 500 ₽</p>
                  </div>

                  <img src={electroGuitar1} alt="Электрогитара Честер Bass" className="guitar-card__image" width="68" height="190" />

                  <div className="guitar-card__review-stars-wrapper">
                    <ul className="guitar-card__stars">
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStarHalf /></li>
                    </ul>
                    <p className="guitar-card__reviews-count">15</p>
                  </div>

                  <div className="guitar-card__buttons-wrapper">
                    <a href="#" className="guitar-card__more button">Подробнее</a>
                    <a href="#" className="guitar-card__buy button button--orange">Купить</a>
                  </div>

                </article>
              </li>

              <li className="guitar-catalog__guitar-item">
                <article className="guitar-catalog__guitar guitar-card">
                  <div className="guitar-card__title-with-price-wrapper">
                    <h3 className="guitar-card__title">СURT Z300</h3>
                    <p className="guitar-card__price">29 500 ₽</p>
                  </div>

                  <img src={electroGuitar2} alt="Электрогитара СURT Z300" className="guitar-card__image" width="68" height="190" />

                  <div className="guitar-card__review-stars-wrapper">
                    <ul className="guitar-card__stars">
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStarEmpty /></li>
                    </ul>
                    <p className="guitar-card__reviews-count">9</p>
                  </div>

                  <div className="guitar-card__buttons-wrapper">
                    <a href="#" className="guitar-card__more button">Подробнее</a>
                    <a href="#" className="guitar-card__buy button button--orange">Купить</a>
                  </div>

                </article>
              </li>

              <li className="guitar-catalog__guitar-item">
                <article className="guitar-catalog__guitar guitar-card">
                  <div className="guitar-card__title-with-price-wrapper">
                    <h3 className="guitar-card__title">Roman LX</h3>
                    <p className="guitar-card__price">6 800 ₽</p>
                  </div>

                  <img src={ukulele1} alt="Укулеле Roman LX" className="guitar-card__image" width="68" height="190" />

                  <div className="guitar-card__review-stars-wrapper">
                    <ul className="guitar-card__stars">
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStarEmpty /></li>
                    </ul>
                    <p className="guitar-card__reviews-count">21</p>
                  </div>

                  <div className="guitar-card__buttons-wrapper">
                    <a href="#" className="guitar-card__more button">Подробнее</a>
                    <a href="#" className="guitar-card__buy button button--orange">Купить</a>
                  </div>

                </article>
              </li>

              <li className="guitar-catalog__guitar-item">
                <article className="guitar-catalog__guitar guitar-card">
                  <div className="guitar-card__title-with-price-wrapper">
                    <h3 className="guitar-card__title">СURT T300</h3>
                    <p className="guitar-card__price">30 000 ₽</p>
                  </div>

                  <img src={electroGuitar3} alt="Электрогитара СURT T300" className="guitar-card__image" width="68" height="190" />

                  <div className="guitar-card__review-stars-wrapper">
                    <ul className="guitar-card__stars">
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStarHalf/></li>
                    </ul>
                    <p className="guitar-card__reviews-count">15</p>
                  </div>

                  <div className="guitar-card__buttons-wrapper">
                    <a href="#" className="guitar-card__more button">Подробнее</a>
                    <a href="#" className="guitar-card__buy button button--orange">Купить</a>
                  </div>

                </article>
              </li>

              <li className="guitar-catalog__guitar-item">
                <article className="guitar-catalog__guitar guitar-card">
                  <div className="guitar-card__title-with-price-wrapper">
                    <h3 className="guitar-card__title">Dania Super</h3>
                    <p className="guitar-card__price">3 500 ₽</p>
                  </div>

                  <img src={ukulele2} alt="Укулеле Dania Super" className="guitar-card__image" width="68" height="190" />

                  <div className="guitar-card__review-stars-wrapper">
                    <ul className="guitar-card__stars">
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStarEmpty /></li>
                    </ul>
                    <p className="guitar-card__reviews-count">5</p>
                  </div>

                  <div className="guitar-card__buttons-wrapper">
                    <a href="#" className="guitar-card__more button">Подробнее</a>
                    <a href="#" className="guitar-card__buy button button--orange">Купить</a>
                  </div>

                </article>
              </li>

              <li className="guitar-catalog__guitar-item">
                <article className="guitar-catalog__guitar guitar-card">
                  <div className="guitar-card__title-with-price-wrapper">
                    <h3 className="guitar-card__title">Честер WX</h3>
                    <p className="guitar-card__price">15 300 ₽</p>
                  </div>

                  <img src={electroGuitar1} alt="Электрогитара Честер WX" className="guitar-card__image" width="68" height="190" />

                  <div className="guitar-card__review-stars-wrapper">
                    <ul className="guitar-card__stars">
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStarHalf /></li>
                    </ul>
                    <p className="guitar-card__reviews-count">17</p>
                  </div>

                  <div className="guitar-card__buttons-wrapper">
                    <a href="#" className="guitar-card__more button">Подробнее</a>
                    <a href="#" className="guitar-card__buy button button--orange">Купить</a>
                  </div>

                </article>
              </li>

              <li className="guitar-catalog__guitar-item">
                <article className="guitar-catalog__guitar guitar-card">
                  <div className="guitar-card__title-with-price-wrapper">
                    <h3 className="guitar-card__title">Dania VX</h3>
                    <p className="guitar-card__price">2 200 ₽</p>
                  </div>

                  <img src={ukulele1} alt="Укулеле Dania VX" className="guitar-card__image" width="68" height="190" />

                  <div className="guitar-card__review-stars-wrapper">
                    <ul className="guitar-card__stars">
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStarEmpty /></li>
                    </ul>
                    <p className="guitar-card__reviews-count">5</p>
                  </div>

                  <div className="guitar-card__buttons-wrapper">
                    <a href="#" className="guitar-card__more button">Подробнее</a>
                    <a href="#" className="guitar-card__buy button button--orange">Купить</a>
                  </div>

                </article>
              </li>

              <li className="guitar-catalog__guitar-item">
                <article className="guitar-catalog__guitar guitar-card">
                  <div className="guitar-card__title-with-price-wrapper">
                    <h3 className="guitar-card__title">Честер Plus</h3>
                    <p className="guitar-card__price">30 000 ₽</p>
                  </div>

                  <img src={electroGuitar4} alt="Электрогитара Честер Plus" className="guitar-card__image" width="68" height="190" />

                  <div className="guitar-card__review-stars-wrapper">
                    <ul className="guitar-card__stars">
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                    </ul>
                    <p className="guitar-card__reviews-count">27</p>
                  </div>

                  <div className="guitar-card__buttons-wrapper">
                    <a href="#" className="guitar-card__more button">Подробнее</a>
                    <a href="#" className="guitar-card__buy button button--orange">Купить</a>
                  </div>

                </article>
              </li>

              <li className="guitar-catalog__guitar-item">
                <article className="guitar-catalog__guitar guitar-card">
                  <div className="guitar-card__title-with-price-wrapper">
                    <h3 className="guitar-card__title">Виолана 300</h3>
                    <p className="guitar-card__price">1 700 ₽</p>
                  </div>

                  <img src={ukulele2} alt="Укулеле Виолана 300" className="guitar-card__image" width="68" height="190" />

                  <div className="guitar-card__review-stars-wrapper">
                    <ul className="guitar-card__stars">
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStar /></li>
                      <li className="guitar-card__stars-item"><IconStarEmpty /></li>
                    </ul>
                    <p className="guitar-card__reviews-count">3</p>
                  </div>

                  <div className="guitar-card__buttons-wrapper">
                    <a href="#" className="guitar-card__more button">Подробнее</a>
                    <a href="#" className="guitar-card__buy button button--orange">Купить</a>
                  </div>

                </article>
              </li>
            </ul>

            <ul className="guitar-catalog__pagination pagination">
              <li className="pagination__item">
                <a className="pagination__link pagination__link--active">1</a>
              </li>
              <li className="pagination__item">
                <a href="#" className="pagination__link">2</a>
              </li>
              <li className="pagination__item">
                <a className="pagination__link pagination__link--dots">...</a>
              </li>
              <li className="pagination__item">
                <a href="#" className="pagination__link">7</a>
              </li>
              <li className="pagination__item">
                <a href="#" className="pagination__link pagination__link--next">Далее</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
};

export default GuitarCatalogPage;
