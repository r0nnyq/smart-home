const slider = document.getElementById('customRange');
const rangeValue = document.getElementById('rangeValue');

// Восстановление значения слайдера и текста после перезагрузки страницы
const savedValue = localStorage.getItem('sliderValue');
if (savedValue) {
    slider.value = savedValue;
    rangeValue.textContent = `${savedValue}%`;
    rangeValue.style.color = `rgb(${savedValue * 2}, ${100 - savedValue}, 200)`;
    rangeValue.style.textShadow = `0 0 8px rgb(${savedValue * 2}, ${100 - savedValue}, 200)`;
}

// Обновление процентов при движении ползунка
slider.addEventListener('input', function() {
    rangeValue.textContent = `${slider.value}%`;

    // Добавляем эффект свечения для текста
    rangeValue.style.color = `rgb(${slider.value * 2}, ${100 - slider.value}, 200)`;
    rangeValue.style.textShadow = `0 0 8px rgb(${slider.value * 2}, ${100 - slider.value}, 200)`;

    // Сохраняем значение слайдера в localStorage
    localStorage.setItem('sliderValue', slider.value);
});
