// import React from 'react';
// import './App.css';
// import MainInterface from './components/MainInterface';
// import FlyingImage from './components/FlyingImage';

// // Импортируем изображения
// import myImage from './img/FlagofUkraine.png';
// import myImageFooter from './img/Flag.png';

// function App() {
//   return (
//     <div>
//       {/* Компонент FlyingImage сверху */}
//       <FlyingImage />

//       {/* Хедер с изображением */}
//       <header className="header">
//         <img src={myImage} alt="Описание картинки" className="top-image" />
//       </header>

//       {/* Основной интерфейс */}
//       <MainInterface />

//       {/* Футер с изображением */}
//       <footer className="footer">
//         <img src={myImageFooter} alt="Описание картинки" className="footer-image" />
//       </footer>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import MainInterface from './components/MainInterface';
import FlyingImage from './components/FlyingImage';

// Импортируем изображения
import myImage from './img/FlagofUkraine.png';
import myImageFooter from './img/Flag.png';

function App() {
  // Функция для отображения скрытых элементов
  const handleConstructionClick = () => {
    const elements = document.getElementById('additional-elements');
    elements.classList.toggle('show');  // Переключаем класс
  };

  return (
    <div>
      {/* Эмодзи для отображения дополнительных элементов */}
      <div
        className="construction-icon"
        onClick={handleConstructionClick}
        style={{ fontSize: '40px', cursor: 'pointer' }}
      >
        🏗
      </div>

      {/* MainInterface всегда отображается */}
      <MainInterface />

      {/* Контейнер для скрытых элементов */}
      <div id="additional-elements">
        {/* Компонент FlyingImage */}
        <FlyingImage />

        {/* Хедер с изображением */}
        <header className="header">
          <img src={myImage} alt="Описание картинки" className="top-image" />
        </header>

        {/* Футер с изображением */}
        <footer className="footer">
          <img src={myImageFooter} alt="Описание картинки" className="footer-image" />
        </footer>
      </div>
    </div>
  );
}

export default App;
