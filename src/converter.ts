function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    // Убираем символ '#' из начала строки
    hex = hex.replace(/^#/, '');

    // Проверяем, что длина строки верная
    if (hex.length !== 6) {
        return null; // Неправильный формат HEX
    }

    // Преобразуем в RGB
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
}

export default hexToRgb;
