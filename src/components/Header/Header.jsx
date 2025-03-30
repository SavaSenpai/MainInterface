import { Link } from 'react-router-dom';
import React from 'react';
import './Header.scss'; // Подключаем SCSS
import logo from './logo-black.png'; // Подключаем картинку (путь изменяй в зависимости от местоположения файла)

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-image" />
        <span className="header__logo-text">НДІБВ</span>
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li><Link to="/MainInterface" className="header__link">Головна</Link></li>
          <li><Link to="/DecisionMaking" className="header__link">Прийняття рішень</Link></li>
          <li><Link to="/Calculator" className="header__link">Калькулятори</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;