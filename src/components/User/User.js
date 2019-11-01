import React from 'react'
import './styles.css'

export default function User() {
  return (
    <header className="user">
      <div className="g-container">
        <div className="user__information">
          <div className="user__information__avatar" />
          <div className="user__information__wrapp">
            <p className="user__information__name">Вероника Ростова</p>
            <p className="user__information__profession">Менеджер по продажам</p>
            <p className="user__information__message">
              Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны
            </p>
          </div>
        </div>
        <div className="user__services">
          <p className="user__services__text">Услуги</p>
          <div className="user__services__wrapp">
            <div className="user__services__item">
              <div className="services__item_position services__item_background_green" />
              <p className="services__item__name">Ручное бронирование</p>
              <p className="services__item__count">11</p>
            </div>
            <div className="user__services__item">
              <div className="services__item_position services__item_background_blue" />
              <p className="services__item__name">Пакетные туры</p>
              <p className="services__item__count">3</p>
            </div>
            <div className="user__services__item">
              <div className="services__item_position services__item_background_width" />
              <p className="services__item__name">Отели</p>
              <p className="services__item__count">1</p>
            </div>
          </div>
          <div className="user__services__all-count">
            <p className="user__all-count__text">Всего</p>
            <p className="user__all-count__value">15</p>
          </div>
        </div>
      </div>
    </header>
  )
}
