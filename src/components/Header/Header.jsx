import { Link } from 'react-router-dom';
import React from 'react';
import './Header.scss'; // Подключаем SCSS

function Header() {
  return (
    <header className="header">
      <h1>Демоверсія вибору рішень</h1>
      <nav>
        <Link to="/MainInterface" className="header__link">Main</Link>
        <Link to="/DecisionMaking" className="header__link">Decision Making</Link>
        <Link to="/Calculator" className="header__link">Calculator</Link>
      </nav>
    </header>
  );
}

export default Header;