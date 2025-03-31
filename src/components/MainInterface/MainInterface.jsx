import React, { useState } from 'react';
import './MainInterface.scss';
import found from './found.png';
import notfound from './not-found.png';

export default function MainInterface() {
  const [buildingType, setBuildingType] = useState('');
  const [damages, setDamages] = useState([{ type: '', location: '' }]);
  const [result, setResult] = useState(null);

  const handleDamageChange = (index, field, value) => {
    const updated = [...damages];
    updated[index][field] = value;
    setDamages(updated);
  };

  const addDamage = () => {
    setDamages([...damages, { type: '', location: '' }]);
  };

  const getDecision = () => {
    const match = buildingType === 'П-46' && damages.some(d => d.type === 'тріщина');
    setResult({
      status: match ? 'Знайдено аналог' : 'Аналог не знайдено',
      solution: match ? 'Стійки PERI + обмеження доступу' : 'Ручне рішення фахівця',
      image: match ? found : notfound,
      description: match 
        ? 'Система автоматично підібрала рішення на основі бази даних.' 
        : 'Рішення потребує ручного аналізу фахівця.',
      solutionDetails: match 
        ? 'Для вирішення проблеми необхідно встановити стійки PERI та обмежити доступ до небезпечної зони.' 
        : 'Фахівець проаналізує ситуацію та підбере відповідне рішення.'
    });
  };

  const downloadReport = () => {
    if (!result) return;
    
    let reportText = `Звіт\n\nСерія будівлі: ${buildingType}\n`;
    damages.forEach((d, i) => {
      reportText += `Пошкодження ${i + 1}: ${d.type} — ${d.location}\n`;
    });
    reportText += `\nСтатус: ${result.status}\nРішення: ${result.solution}\n${result.solutionDetails}`;
    
    const blob = new Blob([reportText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'report.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="main-interface">
      <div className="container">
        <h2 className="title">Демоверсія вибору рішень</h2>
        
        <div className="block">
          <label className="label">Серія будівлі</label>
          <select className="select" onChange={e => setBuildingType(e.target.value)} value={buildingType}>
            <option value="">Оберіть серію</option>
            <option value="П-46">П-46</option>
            <option value="І-464">І-464</option>
            <option value="ІП-46С">ІП-46С</option>
            <option value="КП">КП</option>
            <option value="інше">Інше</option>
          </select>
        </div>

        {damages.map((d, index) => (
          <div key={index} className="block">
            <p className="label">Пошкодження №{index + 1}</p>
            <select className="select" value={d.type} onChange={e => handleDamageChange(index, 'type', e.target.value)}>
              <option value="">Тип пошкодження</option>
              <option value="тріщина">Тріщина</option>
              <option value="обвал">Обвал</option>
              <option value="деформація">Деформація</option>
              <option value="осідання">Осідання</option>
            </select>
            <select className="select" value={d.location} onChange={e => handleDamageChange(index, 'location', e.target.value)}>
              <option value="">Локація</option>
              <option value="фундамент">Фундамент</option>
              <option value="1 поверх">1 поверх</option>
              <option value="кут">Кут</option>
              <option value="верхній поверх">Верхній поверх</option>
            </select>
          </div>
        ))}

        <div className="button-group">
          <button className="button" onClick={addDamage}>Додати ще</button>
          <button className="button" onClick={getDecision}>Отримати рішення</button>
        </div>
        
        {result && (
          <div className="report">
            <div className="status-block">
              <img src={result.image} alt="Статус" className="status-image" />
              <p className="status-text"><strong>Статус:</strong> {result.status}</p>
            </div>
            <div className="report-content">
              <h3 className="report-title">Звіт</h3>
              <p className="solution-details"><strong>Серія будівлі:</strong> {buildingType}</p>
              {damages.map((d, i) => (
                <p className="solution-details" key={i}><strong>Пошкодження {i + 1}:</strong> {d.type} — {d.location}</p>
              ))}

              <p className="solution-details"><strong>Рішення:</strong> {result.solution}</p>
              <p className="solution-details">{result.solutionDetails}</p>
              <button className="button__download" onClick={downloadReport}>Скачати звіт</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}