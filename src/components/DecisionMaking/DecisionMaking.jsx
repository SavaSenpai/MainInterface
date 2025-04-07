import React, { useState } from 'react';
import './DecisionMaking.scss';

// Для загрузки файлов
import { useDropzone } from 'react-dropzone';

const DecisionMaking = () => {
  const [tooltip, setTooltip] = useState(null); // Состояние для отображения тултипа
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

    classification: '',
    otherField1: '',
    otherField2: '',
    otherField3: '',

    solutionPhoto: null,
  });

  // Обработчик изменения данных формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState, // Сохраняем предыдущее состояние
      [name]: value, // Обновляем только нужное поле
    }));
  };

  // Обработчик загрузки файла
  const handleFileChange = (file, field) => {
    setFormData((prevState) => ({
      ...prevState, // Сохраняем предыдущее состояние
      [field]: file, // Обновляем поле с файлом
    }));
  };

  // Для загрузки фото повреждений
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleFileChange(acceptedFiles[0], 'damagePhoto'),
  });

  // Для загрузки фото решения
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
          <label className="form-label">
            Класифікація об’єктів
            <span
              className="tooltip-icon"
              onMouseEnter={() => setTooltip('classification')}
              onMouseLeave={() => setTooltip(null)}
            >
              🛈
            </span>
            {tooltip === 'classification' && (
              <div className="tooltip-box">
                Рекомендовано виконувати за критеріями залежно від мети такої класифікації: за
                призначенням, поверховістю, конструкцією стін, способом зведення, довговічністю,
                вогнетривкістю, капітальністю тощо
              </div>
            )}
          </label>
          <select
            name="classification"
            value={formData.classification}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Оберіть класифікацію</option>
            <option value="Призначення">Призначення</option>
            <option value="Поверховість">Поверховість</option>
            <option value="Конструкція стін">Конструкція стін</option>
            <option value="Спосіб зведення">Спосіб зведення</option>
            <option value="Довговічність">Довговічність</option>
            <option value="Вогнетривкість">Вогнетривкість</option>
            <option value="Капітальність">Капітальність</option>
          </select>
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
            <p className="dropzone-text">Прикріпіть фото</p>
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
        <p className="form-hint">
            Наприклад: "Пошкодження через вплив зовнішніх факторів" або "Аварійний стан через зношеність".
        </p>
{/* ____________________________________________________ */}

        {/* Пункт 2 */}
        <div className="form-group">
          <label className="form-label">
            Систематизація причин
            <span
              className="tooltip-icon"
              onMouseEnter={() => setTooltip('causes')}
              onMouseLeave={() => setTooltip(null)}
            >
              🛈
            </span>
            {tooltip === 'causes' && (
              <div className="tooltip-box">
                Типологія пошкоджень і руйнувань будівельних об'єктів має бути достатньою для
                визначення обсягів і причин аварії на конкретному об’єкті, а також для прив’язки
                перевірених організаційно-технологічних і технічних рішень, що сприяють оптимізації
                методів тимчасового укріплення.
              </div>
            )}
          </label>
          
          <select
            name="otherField1"
            value={formData.otherField1}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Оберіть тип</option>
            <option value="Тип1">Тип 1 - Механічні пошкодження</option>
            <option value="Тип2">Тип 2 - Корозійні процеси</option>
            <option value="Тип3">Тип 3 - Деформаційні зміни</option>
          </select>
        </div>

        {/* Пункт 4 */}
        <div className="form-group">
          <label className="form-label">
            6. Типові та індивідуальні організаційно-технологічні рішення
            <span
              className="tooltip-icon"
              onMouseEnter={() => setTooltip('strategy')}
              onMouseLeave={() => setTooltip(null)}
            >
              🛈
            </span>
            {tooltip === 'strategy' && (
              <div className="tooltip-box">
               Перелік має забезпечувати типологію рішень для організації 
               робіт на конкретному об’єкті з урахуванням варіативності випадків аварій 
              </div>
            )}
          </label>

          <select
            name="otherField3"
            value={formData.otherField3}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Оберіть</option>
            <option value="Тимчасова">Тимчасова</option>
            <option value="Постійна">Постійна</option>
          </select>

        {/* Пункт 3 */}
        <div className="form-group">
          <label className="form-label">
            Технічні засоби з тимчасового підкріплення та підсилення 
            <span
              className="tooltip-icon"
              onMouseEnter={() => setTooltip('accidents')}
              onMouseLeave={() => setTooltip(null)}
            >
              🛈
            </span>
            {tooltip === 'accidents' && (
              <div className="tooltip-box">
                Систематизація та перелік технічних засобів 
                з тимчасового підкріплення та підсилення повинні 
                забезпечити можливість реалізації організаційно-технологічних 
                рішень з укріплення конкретного об'єкта.
              </div>
            )}
          </label>
          <select
            name="otherField2"
            value={formData.otherField2}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Оберіть</option>
            <option value="Технічна">Технічна</option>
            <option value="Організаційна">Організаційна</option>
          </select>
        </div>


          <label className="form-label">Опис рішень</label>
          <textarea
            name="problemDescription"
            value={formData.problemDescription}
            onChange={handleInputChange}
            placeholder="Опишіть..."
            className="form-textarea"
          />
          <p className="form-hint">
            Наприклад: "Проблема була вирішена шляхом тимчасового зміцнення конструкцій...".
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">Фото рішення проблеми</label>
          <div {...getRootPropsSolution()} className="dropzone">
            <input {...getInputPropsSolution()} />
            <p className="dropzone-text"> Прикріпіть фото</p>
          </div>
          {formData.solutionPhoto && <p className="file-selected">File selected: {formData.solutionPhoto.name}</p>}
        </div>

        <button type="submit" className="submit-button">Відправити</button>
      </form>
    </section>
  );
};

export default DecisionMaking;
