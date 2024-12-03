// Получаем элементы
const alarmButton = document.getElementById('set-alarm-btn');
const alarmTimeInput = document.getElementById('alarm-time-input');
const statusText = document.getElementById('status-text');

// Загружаем время будильника из localStorage при загрузке страницы
let alarmTime = localStorage.getItem('alarmTime');
if (alarmTime) {
    alarmTimeInput.value = alarmTime;
    alarmButton.textContent = 'Выключить будильник'; // Меняем текст кнопки
    alarmButton.classList.add('alarm-off'); // Добавляем класс для красной кнопки
    statusText.textContent = `Будильник установлен на ${alarmTime}.`;
    alarmButton.disabled = false; // Кнопка активна
}

// Функция для установки будильника
alarmButton.addEventListener('click', function() {
    if (alarmButton.textContent === 'Установить будильник') {
        const time = alarmTimeInput.value;

        if (!time) {
            statusText.textContent = "Пожалуйста, установите время для будильника.";
            return;
        }

        alarmTime = time;
        localStorage.setItem('alarmTime', alarmTime); // Сохраняем время в localStorage
        statusText.textContent = `Будильник установлен на ${alarmTime}.`;
        alarmButton.textContent = 'Выключить будильник'; // Меняем текст кнопки
        alarmButton.classList.add('alarm-off'); // Делаем кнопку красной
    } else {
        // Выключаем будильник
        alarmTime = null;
        localStorage.removeItem('alarmTime'); // Убираем время из localStorage
        alarmButton.textContent = 'Установить будильник'; // Меняем текст кнопки
        alarmButton.classList.remove('alarm-off'); // Убираем класс для красной кнопки
        statusText.textContent = '';
    }
});

// Проверка времени каждую секунду
setInterval(function() {
    if (!alarmTime) return; // Если будильник не установлен, не выполняем проверку

    const currentTime = new Date();
    const currentHours = String(currentTime.getHours()).padStart(2, '0');
    const currentMinutes = String(currentTime.getMinutes()).padStart(2, '0');
    const currentTimeFormatted = `${currentHours}:${currentMinutes}`;

    if (currentTimeFormatted === alarmTime) {
        alert("Время пришло! Будильник сработал!");
        alarmTime = null;
        localStorage.removeItem('alarmTime'); // Убираем время из localStorage после срабатывания
        alarmButton.textContent = 'Установить будильник'; // Меняем текст кнопки
        alarmButton.classList.remove('alarm-off'); // Убираем класс для красной кнопки
        statusText.textContent = '';
    }
}, 1000);
