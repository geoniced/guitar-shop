import logo from "../../assets/img/logo-footer.svg";

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__wrapper container">
        <div className="page-footer__column page-footer__column--logo-with-socials">
          <a href="#" className="page-footer__logo logo">
            <img src={logo} alt="Логотип Guitar Shop" className="logo__image" width="67" height="70" />
          </a>

          <ul className="page-footer__socials socials">
            <li className="socials__item">
              <a href="" className="socials__link">
                <span className="visually-hidden">Фейсбук</span>
              </a>
            </li>
            <li className="socials__item">
              <a href="" className="socials__link">
                <span className="visually-hidden">Инстаграм</span>
              </a>
            </li>
            <li className="socials__item">
              <a href="" className="socials__link">
                <span className="visually-hidden">Твиттер</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="page-footer__column page-footer__column--about">
          <h2 className="page-footer__section-title">О нас</h2>
          <p className="page-footer__about-text">Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>
          <p className="page-footer__about-text">Все инструменты проверены, отстроены и доведены до идеала! </p>
        </div>

        <div className="page-footer__column page-footer__column--catalog">
          <h2 className="page-footer__section-title">Каталог</h2>
          <ul className="page-footer__catalog-guitars">
            <li className="page-footer__catalog-guitars-item">
              <a href="#" className="page-footer__catalog-guitars-link">Акустические гитары</a>
            </li>
            <li className="page-footer__catalog-guitars-item">
              <a href="#" className="page-footer__catalog-guitars-link">Классические гитары</a>
            </li>
            <li className="page-footer__catalog-guitars-item">
              <a href="#" className="page-footer__catalog-guitars-link">Электрогитары</a>
            </li>
            <li className="page-footer__catalog-guitars-item">
              <a href="#" className="page-footer__catalog-guitars-link">Бас-гитары</a>
            </li>
            <li className="page-footer__catalog-guitars-item">
              <a href="#" className="page-footer__catalog-guitars-link">Укулеле</a>
            </li>
          </ul>
        </div>

        <div className="page-footer__column page-footer__column--info">
          <h2 className="page-footer__section-title">Информация</h2>

          <ul className="page-footer__info">
            <li className="page-footer__info-item">
              <a href="#" className="page-footer__info-link">Где купить?</a>
            </li>
            <li className="page-footer__info-item">
              <a href="#" className="page-footer__info-link">Блог</a>
            </li>
            <li className="page-footer__info-item">
              <a href="#" className="page-footer__info-link">Вопрос - ответ</a>
            </li>
            <li className="page-footer__info-item">
              <a href="#" className="page-footer__info-link">Возврат</a>
            </li>
            <li className="page-footer__info-item">
              <a href="#" className="page-footer__info-link">Сервис-центры</a>
            </li>
          </ul>
        </div>

        <div className="page-footer__column page-footer__column--contacts">
          <h2 className="page-footer__section-title">Контакты</h2>
          <address className="page-footer__contacts-address">
            г. Санкт-Петербург,
            м. Невский проспект, ул. Казанская 6.
          </address>
          <a href="tel:88125005050" className="page-footer__contacts-phone">8-812-500-50-50</a>

          <p className="page-footer__contacts-schedule">
            Режим работы:
            с 11:00 до 20:00,
            без выходных.
          </p>
        </div>
      </div>
    </footer>
  )
};

export default PageFooter;
