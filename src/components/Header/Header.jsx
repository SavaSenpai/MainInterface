import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Header.scss';
import logo from './logo-black.png';
import MenuIcon from './Menu.svg';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Переключаем состояние модального окна
  };

  // Функция для закрытия модального окна после клика на пункт меню
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/MainInterface" className="header__logo">
          <img src={logo} alt="Logo" className="header__logo-image" />
          <span className="header__logo-text">НДІБВ</span>
        </Link>

        {/* Кнопка меню для мобильных устройств */}
        <button
          className="header__menu-button"
          onClick={toggleModal}
        >
          <img src={MenuIcon} alt="Menu" />
        </button>
        
        {/* Обычное меню для десктопной версии */}
        <nav className="header__nav">
          <ul className="header__menu">
            <li><Link to="/MainInterface" className="header__link">Головна</Link></li>
            <li><Link to="/information" className="header__link">Інформація</Link></li>
            <li><Link to="/Calculator" className="header__link">Розрахункове ПЗ</Link></li>
            <li><Link to="/DecisionMaking" className="header__link">Прийняття рішень</Link></li>
          </ul>
        </nav>
      </div>

      {/* Модальное меню для мобильных устройств */}
      <div className={`header__modal ${isModalOpen ? 'header__modal--open' : ''}`} onClick={toggleModal}>
        <div className="header__menu-mobile" onClick={(e) => e.stopPropagation()}>
          <ul>
            <li><Link to="/MainInterface" className="header__link-mobile" onClick={closeModal}>Головна</Link></li>
            <li><Link to="/information" className="header__link-mobile" onClick={closeModal}>Інформація</Link></li>
            <li><Link to="/Calculator" className="header__link-mobile" onClick={closeModal}>Розрахункове ПЗ</Link></li>
            <li><Link to="/DecisionMaking" className="header__link-mobile" onClick={closeModal}>Прийняття рішень</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
