import electroGuitar1 from "../../assets/img/electro-1.png";
import electroGuitar2 from "../../assets/img/electro-2.png";
import electroGuitar3 from "../../assets/img/electro-3.png";
import electroGuitar4 from "../../assets/img/electro-4.png";
import ukulele1 from "../../assets/img/ukulele-1.png";
import ukulele2 from "../../assets/img/ukulele-2.png";
import {ReactComponent as IconStar} from "../../assets/img/icon-star-whole.svg";
import {ReactComponent as IconStarHalf} from "../../assets/img/icon-star-half.svg";
import {ReactComponent as IconStarEmpty} from "../../assets/img/icon-star-empty.svg";


const PageContent = () => {
  return (
    <main className="page-content">
      <h1 className="page-content__title">Каталог гитар</h1>

      <ul className="page-content__breadcrumbs">
        <li className="page-content__breadcrumbs__item">
          <a href="#" className="page-content__breadcrumbs__link">Главная</a>
        </li>
        <li className="page-content__breadcrumbs__item">
          <a className="page-content__breadcrumbs__link page-content__breadcrumbs__link--current">Каталог</a>
        </li>
      </ul>

      <section className="page-content__guitar-filters guitar-filters">
        <h2 className="guitar-filters__title">Фильтр</h2>

        <form action="#" className="guitar-filters__form">
          <fieldset className="guitar-filters__fieldset">
            <legend className="guitar-filters__legend">Цена, ₽</legend>

            <label htmlFor="filters-price-from" className="visually-hidden">От</label>
            <input className="guitar-filters__numeric-input" type="number" name="filters-price-from" id="filters-price-from" placeholder="1 000" />

            <label htmlFor="filters-price-to" className="visually-hidden">До</label>
            <input className="guitar-filters__numeric-input" type="number" name="filters-price-to" id="filters-price-to" placeholder="30 000" />
          </fieldset>

          <fieldset className="guitar-filters__fieldset">
            <legend className="guitar-filters__legend">Тип гитар</legend>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-type-acoustic" id="filters-type-acoustic" />
            <label htmlFor="filters-type-acoustic" className="guitar-filters__checkbox-label">Акустические гитары</label>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-type-electro" id="filters-type-electro" defaultChecked />
            <label htmlFor="filters-type-electro" className="guitar-filters__checkbox-label">Электрогитары</label>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-type-ukulele" id="filters-type-ukulele" defaultChecked />
            <label htmlFor="filters-type-ukulele" className="guitar-filters__checkbox-label">Укулеле</label>
          </fieldset>

          <fieldset className="guitar-filters__fieldset">
            <legend className="guitar-filters__legend">Количество струн</legend>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-strings-4" id="filters-strings-4" defaultChecked />
            <label htmlFor="filters-strings-4" className="guitar-filters__checkbox-label">4</label>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-strings-6" id="filters-strings-6" defaultChecked />
            <label htmlFor="filters-strings-6" className="guitar-filters__checkbox-label">6</label>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-strings-7" id="filters-strings-7" />
            <label htmlFor="filters-strings-7" className="guitar-filters__checkbox-label">7</label>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-strings-12" id="filters-strings-12" disabled />
            <label htmlFor="filters-strings-12" className="guitar-filters__checkbox-label">12</label>
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
              <a href="#" className="sorting__sort-type-text sorting__sort-type-text--price">по цене</a>
            </li>
            <li className="sorting__sort-type-item">
              <a href="#" className="sorting__sort-type-text sorting__sort-type-text--popularity">по по популярности</a>
            </li>
          </ul>

          <ul className="sorting__sort-orders">
            <li className="sorting__sort-order-item">
              <a href="#" className="sort-order-button">От меньшего к большему</a>
            </li>
            <li className="sorting__sort-order-item">
              <a href="#" className="sort-order-button">От большего к меньшему</a>
            </li>
          </ul>
        </div>

        <ul className="guitar-catalog__guitars">
          <li className="guitar-catalog__guitar-item">
            <article className="guitar-catalog__guitar guitar-card">
              <h3 className="guitar-card__title">Честер Bass</h3>
              <p className="guitar-card__price">17 500 ₽</p>
              <img src={electroGuitar1} alt="Электрогитара Честер Bass" className="guitar-card__image" width="68" height="190" />

              <ul className="guitar-card__stars">
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStarHalf /></li>
              </ul>
              <p className="guitar-card__reviews-count">15</p>

              <a href="#" className="guitar-card__more">Подробнее</a>
              <a href="#" className="guitar-card__buy">Купить</a>

            </article>
          </li>

          <li className="guitar-catalog__guitar-item">
            <article className="guitar-catalog__guitar guitar-card">
              <h3 className="guitar-card__title">СURT Z300</h3>
              <p className="guitar-card__price">29 500 ₽</p>
              <img src={electroGuitar2} alt="Электрогитара СURT Z300" className="guitar-card__image" width="68" height="190" />

              <ul className="guitar-card__stars">
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStarEmpty /></li>
              </ul>
              <p className="guitar-card__reviews-count">9</p>

              <a href="#" className="guitar-card__more">Подробнее</a>
              <a href="#" className="guitar-card__buy">Купить</a>

            </article>
          </li>

          <li className="guitar-catalog__guitar-item">
            <article className="guitar-catalog__guitar guitar-card">
              <h3 className="guitar-card__title">Roman LX</h3>
              <p className="guitar-card__price">6 800 ₽</p>
              <img src={ukulele1} alt="Укулеле Roman LX" className="guitar-card__image" width="68" height="190" />

              <ul className="guitar-card__stars">
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStarEmpty /></li>
              </ul>
              <p className="guitar-card__reviews-count">21</p>

              <a href="#" className="guitar-card__more">Подробнее</a>
              <a href="#" className="guitar-card__buy">Купить</a>

            </article>
          </li>

          <li className="guitar-catalog__guitar-item">
            <article className="guitar-catalog__guitar guitar-card">
              <h3 className="guitar-card__title">СURT T300</h3>
              <p className="guitar-card__price">30 000 ₽</p>
              <img src={electroGuitar3} alt="Электрогитара СURT T300" className="guitar-card__image" width="68" height="190" />

              <ul className="guitar-card__stars">
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStarHalf/></li>
              </ul>
              <p className="guitar-card__reviews-count">15</p>

              <a href="#" className="guitar-card__more">Подробнее</a>
              <a href="#" className="guitar-card__buy">Купить</a>

            </article>
          </li>

          <li className="guitar-catalog__guitar-item">
            <article className="guitar-catalog__guitar guitar-card">
              <h3 className="guitar-card__title">Dania Super</h3>
              <p className="guitar-card__price">3 500 ₽</p>
              <img src={ukulele2} alt="Укулеле Dania Super" className="guitar-card__image" width="68" height="190" />

              <ul className="guitar-card__stars">
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStarEmpty /></li>
              </ul>
              <p className="guitar-card__reviews-count">5</p>

              <a href="#" className="guitar-card__more">Подробнее</a>
              <a href="#" className="guitar-card__buy">Купить</a>

            </article>
          </li>

          <li className="guitar-catalog__guitar-item">
            <article className="guitar-catalog__guitar guitar-card">
              <h3 className="guitar-card__title">Честер WX</h3>
              <p className="guitar-card__price">15 300 ₽</p>
              <img src={electroGuitar1} alt="Электрогитара Честер WX" className="guitar-card__image" width="68" height="190" />

              <ul className="guitar-card__stars">
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStarHalf /></li>
              </ul>
              <p className="guitar-card__reviews-count">17</p>

              <a href="#" className="guitar-card__more">Подробнее</a>
              <a href="#" className="guitar-card__buy">Купить</a>

            </article>
          </li>

          <li className="guitar-catalog__guitar-item">
            <article className="guitar-catalog__guitar guitar-card">
              <h3 className="guitar-card__title">Dania VX</h3>
              <p className="guitar-card__price">2 200 ₽</p>
              <img src={ukulele1} alt="Укулеле Dania VX" className="guitar-card__image" width="68" height="190" />

              <ul className="guitar-card__stars">
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStarEmpty /></li>
              </ul>
              <p className="guitar-card__reviews-count">5</p>

              <a href="#" className="guitar-card__more">Подробнее</a>
              <a href="#" className="guitar-card__buy">Купить</a>

            </article>
          </li>

          <li className="guitar-catalog__guitar-item">
            <article className="guitar-catalog__guitar guitar-card">
              <h3 className="guitar-card__title">Честер Plus</h3>
              <p className="guitar-card__price">30 000 ₽</p>
              <img src={electroGuitar4} alt="Электрогитара Честер Plus" className="guitar-card__image" width="68" height="190" />

              <ul className="guitar-card__stars">
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
              </ul>
              <p className="guitar-card__reviews-count">27</p>

              <a href="#" className="guitar-card__more">Подробнее</a>
              <a href="#" className="guitar-card__buy">Купить</a>

            </article>
          </li>

          <li className="guitar-catalog__guitar-item">
            <article className="guitar-catalog__guitar guitar-card">
              <h3 className="guitar-card__title">Виолана 300</h3>
              <p className="guitar-card__price">1 700 ₽</p>
              <img src={ukulele2} alt="Укулеле Виолана 300" className="guitar-card__image" width="68" height="190" />

              <ul className="guitar-card__stars">
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStar /></li>
                <li className="guitar-card__stars-item"><IconStarEmpty /></li>
              </ul>
              <p className="guitar-card__reviews-count">3</p>

              <a href="#" className="guitar-card__more">Подробнее</a>
              <a href="#" className="guitar-card__buy">Купить</a>

            </article>
          </li>
        </ul>

        <ul className="guitar-catalog__pagination pagination">
          <li className="pagination__item pagination__item--active">
            <a className="pagination__link">1</a>
          </li>
          <li className="pagination__item">
            <a href="#" className="pagination__link">2</a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link">...</a>
          </li>
          <li className="pagination__item">
            <a href="#" className="pagination__link">7</a>
          </li>
          <li className="pagination__item">
            <a href="#" className="pagination__link">Далее</a>
          </li>
        </ul>
      </section>
    </main>
  )
};

export default PageContent;
