import "./Calculator.scss";
import AUTOCAD from './AUTOCAD.ico';
import МОНОМАХ from './МОНОМАХ.jpg';
import LIRA from './LIRA.ico';
import PLAXIS from './PLAXIS.ico';
import SAPFIR from './SAPFIR.ico';
import SCAD from './SCAD.ico';
import STAAD from './STAAD.ico';

const data = [
  { 
    id: 1, 
    title: "МОНОМАХ", 
    description: "Програма для розрахунку будівельних конструкцій", 
    img: МОНОМАХ, 
    link: "https://www.ndibv.org/kontakty/" 
  },
  { 
    id: 2, 
    title: "LIRA", 
    description: "Програма для розрахунку будівельних конструкцій", 
    img: LIRA, 
    link: "https://www.liraland.ua/lira/release-notes/2025/" 
  },
  { 
    id: 3, 
    title: "PLAXIS", 
    description: "Програмне забезпечення для аналізу ґрунтів", 
    img: PLAXIS, 
    link: "https://www.seequent.com/products-solutions/plaxis/" 
  },
  { 
    id: 4, 
    title: "SAPFIR", 
    description: "Інструмент для проєктування і розрахунку будівель", 
    img: SAPFIR , 
    link: "https://www.liraland.ua/sapfir/" 
  },
  { 
    id: 5, 
    title: "AUTOCAD", 
    description: "Програмне забезпечення для проєктування", 
    img: AUTOCAD, 
    link: "https://www.autodesk.com/products/autocad/overview" 
  },
  { 
    id: 6, 
    title: "SCAD", 
    description: "Програма для проєктування та аналізу конструкцій", 
    img: SCAD, 
    link: "https://scadsoft.com/ua" 
  },
  { 
    id: 7, 
    title: "STAAD", 
    description: "Потужний інструмент для структурного аналізу", 
    img: STAAD, 
    link: "https://www.bentley.com/software/staad/" 
  },
];

const Calculator = () => {
  return (
    <div className="calculator-container">
      {data.map((item) => (
        <div key={item.id} className="calculator-block">
          <img src={item.img} alt={`Изображение ${item.id}`} className="calculator-img"/>
          <h3 className="calculator-title">{item.title}</h3>
          <p className="calculator-description">{item.description}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="calculator-link">Докладніше</a>
        </div>
      ))}
    </div>
  );
};

export default Calculator;
