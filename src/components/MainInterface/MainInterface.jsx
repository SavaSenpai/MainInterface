import React, { useState } from 'react';
import './MainInterface.scss';

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
      solution: match ? 'Стійки PERI + обмеження доступу' : 'Ручне рішення фахівця'
    });
  };

  const downloadReport = () => {
    const lines = [
      `Серія будівлі: ${buildingType}`,
      ...damages.map((d, i) => `Пошкодження ${i + 1}: ${d.type} — ${d.location}`),
      `Статус: ${result?.status || '-'}`,
      `Рішення: ${result?.solution || '-'}`
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'zvit.txt';
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
<div className="main-interface">
  <div className="p-6 max-w-xl mx-auto space-y-4">
    <h2 className="NameZagolov">Демоверсія вибору рішень</h2>
    
    <div className="damage-block">
      <label className="BlockLable">Серія будівлі</label>
      <select className="custom-select " onChange={e => setBuildingType(e.target.value)} value={buildingType}>
        <option value="">Оберіть серію</option>
        <option value="П-46">П-46</option>
        <option value="І-464">І-464</option>
        <option value="ІП-46С">ІП-46С</option>
        <option value="КП">КП</option>
        <option value="інше">Інше</option>
      </select>
    </div>

    {damages.map((d, index) => (
  <div key={index} className="damage-block">
    <p className="BlockLable">Пошкодження №{index + 1}</p>
    <select className="custom-select" value={d.type} onChange={e => handleDamageChange(index, 'type', e.target.value)}>
      <option value="">Тип пошкодження</option>
      <option value="тріщина">Тріщина</option>
      <option value="обвал">Обвал</option>
      <option value="деформація">Деформація</option>
      <option value="осідання">Осідання</option>
    </select>
    
    <select className="custom-select" value={d.location} onChange={e => handleDamageChange(index, 'location', e.target.value)}>
      <option value="">Локація</option>
      <option value="фундамент">Фундамент</option>
      <option value="1 поверх">1 поверх</option>
      <option value="кут">Кут</option>
      <option value="верхній поверх">Верхній поверх</option>
    </select>
  </div>
))}
<div className="button-container">
      <button className="button btn-1 btn-sep icon-info" onClick={addDamage}>Додати ще</button>
      <div className="flex gap-2">
        <button className="button btn-1 btn-sep icon-info" onClick={getDecision}>Отримати рішення</button>
        <button className="button btn-1 btn-sep icon-info" onClick={downloadReport}>Завантажити звіт</button>
      </div>
      </div>
      {result && (
        <div className="p-4 mt-4 bg-green-100 rounded">
          <p><strong>Статус:</strong> {result.status}</p>
          <p><strong>Рішення:</strong> {result.solution}</p>
        </div>
      )}
    </div>
    </div>
  );
}

