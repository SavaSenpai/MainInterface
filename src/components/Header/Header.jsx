import { Link } from 'react-router-dom';
import React from 'react';
import './Header.scss'; // Подключаем SCSS
import logo from './logo-black.png';

function Header() {
  return (
    <header className="header">
      <Link to="/MainInterface" className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-image" />
        <span className="header__logo-text">НДІБВ</span>
      </Link>
      <nav className="header__nav">
        <ul className="header__menu">
          <li><Link to="/MainInterface" className="header__link">Головна</Link></li>
          <li><Link to="/DecisionMaking" className="header__link">Прийняття рішень</Link></li>
          <li><Link to="/Calculator" className="header__link">Розрахункове ПЗ</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;