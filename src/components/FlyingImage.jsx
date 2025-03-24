import React, { useState } from "react";
import './FlyingImage.css';
import myFlyingImage from '../img/Potugno.png'; // Убедись, что путь правильный
import sound from '../sounds/Litak.mp3';

const FlyingImage = () => {
  const [audio] = useState(new Audio(sound));

  const handleClick = () => {
    audio.play()
      .then(() => {
        console.log("Звук воспроизведен!");
      })
      .catch((error) => {
        console.error("Ошибка при воспроизведении звука:", error);
      });
  };

  return (
    <div className="flying-container">
      <img
        src={myFlyingImage}
        alt="Flying"
        className="flying-image"
        onClick={handleClick}
      />
    </div>
  );
};

export default FlyingImage;
