import { useState } from 'react';
import './App.css';
import hexToRgb from './converter';

function App() {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Фоновый цвет по умолчанию

  const handleHexChange = (e) => {
    const hexValue = e.target.value;
    setHex(hexValue);

    // Проверяем длину ввода
    if (hexValue.length === 7) {
      // Проверяем, является ли ввод допустимым HEX цветом
      const isValidHex = /^#[0-9A-Fa-f]{6}$|^#[0-9A-Fa-f]{3}$/.test(hexValue);
      
      if (isValidHex) {
        // Меняем фон в соответствии с HEX значением
        setBackgroundColor(hexValue);

        // Конвертируем HEX в RGB и устанавливаем rgb состояние
        const rgbValue = hexToRgb(hexValue);
        if (rgbValue) {
          setRgb(`rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`);
        }
      } else {
        // Если HEX неверен, показываем сообщение об ошибке
        setRgb('Ошибка!');
      }
    } else {
      // Если длина ввода не 7 символов, убираем сообщение об ошибке и сохраняем цвет фона
      setRgb('');
      // Сбрасываем цвет фона, если поле ввода пустое
      setBackgroundColor('#ffffff');
    }
  };

  return (
    <div style={{ backgroundColor }} className="app-container">
      <input 
        type="text" 
        onChange={handleHexChange} 
        placeholder="#FF5733" 
        value={hex}
      />
      <div className="rgb">{rgb}</div>
    </div>
  );
}

export default App;
