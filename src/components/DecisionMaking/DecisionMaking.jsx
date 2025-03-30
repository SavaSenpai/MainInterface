import React, { useState } from 'react';
import './DecisionMaking.scss';

// Для загрузки файлов
import { useDropzone } from 'react-dropzone';

const DecisionMaking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    position: '',
    email: '',
    damageType: '',
    customDamageType: '',
    buildingSeries: '',
    customBuildingSeries: '',
    damagePhoto: null,
    problemDescription: '',
    solutionDescription: '',
    solutionPhoto: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (file, field) => {
    setFormData({
      ...formData,
      [field]: file,
    });
  };

  // Для загрузки фото
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleFileChange(acceptedFiles[0], 'damagePhoto'),
  });

  const { getRootProps: getRootPropsSolution, getInputProps: getInputPropsSolution } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleFileChange(acceptedFiles[0], 'solutionPhoto'),
  });

  return (
    <section className="decision-making-section">
      <h1 className="decision-making-title">Прийняття рішень</h1>
      <form className="decision-making-form">
        <div className="form-group">
          <label className="form-label">1. Ім'я Прізвище:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Ім'я Прізвище"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Посада:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            placeholder="Посада"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">2. Тип пошкодження</label>
          <select
            name="damageType"
            value={formData.damageType}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Тип пошкодження</option>
            <option value="Тріщина">Тріщина</option>
            <option value="Обвал">Обвал</option>
            <option value="Деформація">Деформація</option>
            <option value="Осідання">Осідання</option>
          </select>
          <div className="form-group">
            <label className="form-label">Свій варіант:</label>
            <input
              type="text"
              name="customDamageType"
              value={formData.customDamageType}
              onChange={handleInputChange}
              placeholder="Опишіть тип пошкодження"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">3. Оберіть серію будівлі</label>
          <select
            name="buildingSeries"
            value={formData.buildingSeries}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Серія будівлі</option>
            <option value="П-46">П-46</option>
            <option value="І-464">І-464</option>
            <option value="ІП-46С">ІП-46С</option>
            <option value="КП">КП</option>
          </select>
          <div className="form-group">
            <label className="form-label">Свій варіант:</label>
            <input
              type="text"
              name="customBuildingSeries"
              value={formData.customBuildingSeries}
              onChange={handleInputChange}
              placeholder="Тип/Серія будівлі"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">4. Фото пошкодження</label>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p className="dropzone-text">Прикріпіть фото пошкодження</p>
          </div>
          {formData.damagePhoto && <p className="file-selected">File selected: {formData.damagePhoto.name}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">5. Опис проблеми</label>
          <textarea
            name="problemDescription"
            value={formData.problemDescription}
            onChange={handleInputChange}
            placeholder="Опишіть проблему"
            className="form-textarea"
          />
        </div>

        <div className="form-group">
          <label className="form-label">6. Рішення проблеми</label>
          <textarea
            name="solutionDescription"
            value={formData.solutionDescription}
            onChange={handleInputChange}
            placeholder="Опишіть вирішення проблемы"
            className="form-textarea"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Фото рішення проблеми</label>
          <div {...getRootPropsSolution()} className="dropzone">
            <input {...getInputPropsSolution()} />
            <p className="dropzone-text"> Прикріпіть фото рішення проблеми</p>
          </div>
          {formData.solutionPhoto && <p className="file-selected">File selected: {formData.solutionPhoto.name}</p>}
        </div>

        <button type="submit" className="submit-button">Відправити</button>
      </form>
    </section>
  );
};

export default DecisionMaking;
