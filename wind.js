// Получаем элемент select
const acModeSelect = document.getElementById('acMode');

// При загрузке страницы, проверяем сохраненный режим
window.onload = function() {
    const savedMode = localStorage.getItem('acMode');
    if (savedMode) {
        acModeSelect.value = savedMode;
    }
};

// Сохраняем выбранный режим в localStorage при изменении
acModeSelect.addEventListener('change', function() {
    localStorage.setItem('acMode', acModeSelect.value);
});
