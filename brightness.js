const customSlider = document.getElementById('custom-brightness');
const customValueDisplay = document.getElementById('custom-brightness-value');
const backgroundElement = document.querySelector('.background');

// Проверяем, есть ли сохраненное значение яркости в localStorage
const savedBrightness = localStorage.getItem('custom-brightness');
if (savedBrightness) {
    customSlider.value = savedBrightness; // Устанавливаем ползунок в сохраненное значение
    customValueDisplay.textContent = `${savedBrightness}%`; // Отображаем сохраненное значение
    changeBackgroundBrightness(savedBrightness); // Применяем сохраненный эффект яркости
}

// Функция для изменения яркости фона
function changeBackgroundBrightness(brightnessValue) {
    const brightness = brightnessValue / 100; // Нормализуем значение от 0 до 1
    // Устанавливаем минимальное значение brightness = 0.1, чтобы избежать черного фона
    const adjustedBrightness = Math.max(brightness, 0.1); 
    const filterValue = `brightness(${adjustedBrightness})`; // Формируем фильтр яркости
    backgroundElement.style.filter = filterValue; // Применяем фильтр к фоновому изображению
}

// Обновляем значение в localStorage, когда ползунок изменяется
customSlider.addEventListener('input', function () {
    const brightnessValue = customSlider.value;
    customValueDisplay.textContent = `${brightnessValue}%`; // Обновляем отображаемое значение
    localStorage.setItem('custom-brightness', brightnessValue); // Сохраняем значение в localStorage
    changeBackgroundBrightness(brightnessValue); // Изменяем яркость фона
});
