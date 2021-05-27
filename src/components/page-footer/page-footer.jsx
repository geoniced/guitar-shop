import React from "react";
import logo from "../../assets/img/logo-footer.svg";
import {ReactComponent as IconFacebook} from "../../assets/img/icon-facebook.svg";
import {ReactComponent as IconInstagram} from "../../assets/img/icon-instagram.svg";
import {ReactComponent as IconTwitter} from "../../assets/img/icon-twitter.svg";
import {ReactComponent as IconPhone} from "../../assets/img/icon-phone.svg";
import {ReactComponent as IconClock} from "../../assets/img/icon-clock.svg";
import Logo from "../logo/logo";

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__wrapper container">
        <div className="page-footer__column page-footer__column--logo-with-socials">
          <Logo
            className="page-footer__logo"
            logo={logo}
          />

          <ul className="page-footer__socials socials">
            <li className="socials__item">
              <a href="" className="socials__link">
                <IconFacebook className="socials__icon" />
                <span className="visually-hidden">Фейсбук</span>
              </a>
            </li>
            <li className="socials__item">
              <a href="" className="socials__link">
                <IconInstagram className="socials__icon" />
                <span className="visually-hidden">Инстаграм</span>
              </a>
            </li>
            <li className="socials__item">
              <a href="" className="socials__link">
                <IconTwitter className="socials__icon" />
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
            г. Санкт-Петербург,<br />
            м. Невский проспект,<br />
            ул. Казанская 6.
          </address>
          <a href="tel:88125005050" className="page-footer__contacts-phone">
            <IconPhone className="page-footer__contacts-phone-icon" />
            <span className="page-footer__contacts-phone-text">8-812-500-50-50</span>
          </a>

          <p className="page-footer__contacts-schedule">
            Режим работы: <br />
            <span className="page-footer__contacts-schedule-time">
              <IconClock className="page-footer__contacts-schedule-time-icon"/>
              <span className="page-footer__contacts-schedule-time-text">с 11:00 до 20:00,</span>
            </span>
            без выходных.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
