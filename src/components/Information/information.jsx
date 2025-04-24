import React from 'react';
import './information.scss';

import pdfFile1 from './Робоча_версія_вимог_1.pdf';
import pdfFile2 from './Робоча_версія_вимог_2.pdf';
import pdfFile3 from './Робоча_версія_вимог_3.pdf';
import pdfFile4 from './Робоча_версія_вимог_4.pdf';
import pdfFile5 from './Робоча_версія_вимог_5.pdf';
import pdfFile6 from './Робоча_версія_вимог_6.pdf';
import pdfFile7 from './Робоча_версія_вимог_7.pdf';
import pdfFile8 from './Робоча_версія_вимог_8.pdf';
import pdfFile9 from './Робоча_версія_вимог_9.pdf';
import pdfFile10 from './Робоча_версія_вимог_10.pdf';

const documents = [
  {
    title: 'Класифікація будівель за будівельними та конструктивними системами',
    file: pdfFile1,
  },
  {
    title: 'Класифікація пошкоджень із урахуванням навантажень та впливів',
    file: pdfFile2,
  },
  {
    title: 'Базова модель будівлі або її частин без пошкоджень',
    file: pdfFile3,
  },
  {
    title: 'Модель будівлі або її частин з врахуванням пошкоджень',
    file: pdfFile4,
  },
  {
    title: 'Систематизація типових рішень тимчасового укріплення',
    file: pdfFile5,
  },
  {
    title: 'Алгоритми моделювання організаційно-технологічних рішень',
    file: pdfFile6,
  },
  {
    title: 'Джерела наповнення бази даних',
    file: pdfFile7,
  },
  {
    title: 'Використання даних у прийнятті рішень',
    file: pdfFile8,
  },
  {
    title: 'Верифікація результатів прийняття рішень',
    file: pdfFile9,
  },
  {
    title: 'Самонавчання інформаційної системи',
    file: pdfFile10,
  },
];

const InformationPage = () => {
  return (
    <div className="info-page">
      <h1 className="info-page__title">Загальні вимоги до структури баз даних</h1>
      <ul className="info-page__list">
        {documents.map((doc, index) => (
          <li key={index} className="info-page__item">
            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="info-page__link"
            >
              {index + 1}) {doc.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InformationPage;