import React, { useState } from 'react';
import './App.css';
import hexToRgb from './converter';

function App() {
  const [hex, setHex] = useState<string>('');
  const [rgb, setRgb] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff'); // Default background color

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hexValue = e.target.value; // Now TypeScript understands this is an input element
    setHex(hexValue);

    // Check input length
    if (hexValue.length === 7) {
      // Check if input is a valid HEX color
      const isValidHex = /^#[0-9A-Fa-f]{6}$|^#[0-9A-Fa-f]{3}$/.test(hexValue);

      if (isValidHex) {
        // Update background color directly from HEX value
        setBackgroundColor(hexValue);

        // Convert HEX to RGB and set rgb state
        const rgbValue = hexToRgb(hexValue);
        if (rgbValue) {
          setRgb(`rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`);
        }
      } else {
        // If HEX is invalid, show error message and maintain background color
        setRgb('Неверный HEX цвет');
        setBackgroundColor('#ffffff');
      }
    } else {
      // If input length is not 7 characters, clear error message and maintain background color
      setRgb('');
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
