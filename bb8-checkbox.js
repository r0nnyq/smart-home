// Получаем ссылку на чекбокс
const checkbox = document.getElementById('bb8-checkbox');

// Проверяем состояние в LocalStorage при загрузке страницы
window.addEventListener('load', () => {
    const isChecked = localStorage.getItem('bb8-checkbox-checked') === 'true';
    checkbox.checked = isChecked; // Устанавливаем состояние из LocalStorage
});

// Слушаем изменения состояния чекбокса
checkbox.addEventListener('change', () => {
    localStorage.setItem('bb8-checkbox-checked', checkbox.checked);
});
