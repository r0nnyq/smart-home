const lightingColorPicker = document.getElementById('lighting-color-picker');
const selectedColorValueDisplay = document.getElementById('selected-color-value');
const resetColorButton = document.getElementById('reset-color-button');

// Исходное фоновое изображение
const defaultBackgroundImage = 'url("your-image.jpg")';

// Проверяем, есть ли сохраненный цвет в localStorage
const savedLightingColor = localStorage.getItem('selected-lighting-color');
if (savedLightingColor) {
    lightingColorPicker.value = savedLightingColor; // Устанавливаем цвет в поле выбора
    selectedColorValueDisplay.textContent = savedLightingColor; // Отображаем сохраненный цвет
    changeBodyBackgroundColor(savedLightingColor); // Применяем сохраненный эффект
}

// Функция для изменения цвета фона
function changeBodyBackgroundColor(colorValue) {
    // Применяем фильтр для изменения цвета фона
    const colorOverlay = `sepia(1) hue-rotate(${getHueRotation(colorValue)}deg)`; 
    document.body.style.filter = colorOverlay; // Применяем эффект ко всему body
}

// Преобразование цветового кода в угол поворота оттенка
function getHueRotation(colorValue) {
    const hexColor = colorValue.slice(1); // Убираем # из начала строки
    const rgb = parseInt(hexColor, 16); // Преобразуем HEX в RGB
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;

    // Уравнение для преобразования RGB в угол для hue-rotate
    const hue = (r * 0.299 + g * 0.587 + b * 0.114) * 0.5; 
    return hue; // Возвращаем угол в градусах
}

// Обновляем цвет в localStorage, когда изменяется выбор
lightingColorPicker.addEventListener('input', function () {
    const selectedColor = lightingColorPicker.value;
    selectedColorValueDisplay.textContent = selectedColor; // Обновляем отображаемое значение
    localStorage.setItem('selected-lighting-color', selectedColor); // Сохраняем выбранный цвет
    changeBodyBackgroundColor(selectedColor); // Изменяем цвет фона
});

// Функция сброса выбора
resetColorButton.addEventListener('click', function () {
    // Сброс фона и очистка фильтров
    lightingColorPicker.value = '#ff0000'; // Сбросить на начальный цвет
    selectedColorValueDisplay.textContent = '#ff0000'; // Обновить отображаемое значение
    localStorage.removeItem('selected-lighting-color'); // Удалить сохраненный цвет из localStorage
    document.body.style.filter = ''; // Убираем фильтр
    document.body.style.backgroundImage = defaultBackgroundImage; // Возвращаем оригинальное изображение
});
