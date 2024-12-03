// Функция для сохранения значения времени для включения, если галочка активна
document.getElementById('time').addEventListener('input', function() {
    if (document.getElementById('auto-on').checked) {
        localStorage.setItem('userTimeOn', this.value);  // Сохраняем время включения в localStorage
    }
});

// Функция для сохранения значения времени для выключения, если галочка активна
document.getElementById('timeOff').addEventListener('input', function() {
    if (document.getElementById('auto-off').checked) {
        localStorage.setItem('userTimeOff', this.value);  // Сохраняем время выключения в localStorage
    }
});

// Восстановление сохраненного времени и состояния при загрузке страницы
window.addEventListener('load', function() {
    // Восстанавливаем состояние галочек
    var autoOn = localStorage.getItem('autoOn') === 'true';
    var autoOff = localStorage.getItem('autoOff') === 'true';

    // Восстанавливаем состояние чекбоксов
    document.getElementById('auto-on').checked = autoOn;
    document.getElementById('auto-off').checked = autoOff;

    // Включаем или отключаем поля ввода в зависимости от состояния чекбоксов
    document.getElementById('time').disabled = !autoOn;
    document.getElementById('timeOff').disabled = !autoOff;

    // Восстанавливаем значения времени, если галочки активированы
    if (autoOn) {
        var savedTimeOn = localStorage.getItem('userTimeOn');
        if (savedTimeOn) {
            document.getElementById('time').value = savedTimeOn;  // Восстанавливаем время в поле включения
        }
    }

    if (autoOff) {
        var savedTimeOff = localStorage.getItem('userTimeOff');
        if (savedTimeOff) {
            document.getElementById('timeOff').value = savedTimeOff;  // Восстанавливаем время в поле выключения
        }
    }
});

// Сохранение состояния чекбоксов в localStorage
document.getElementById('auto-on').addEventListener('change', function() {
    localStorage.setItem('autoOn', this.checked);  // Сохраняем состояние чекбокса для включения
    // Включаем или отключаем поле ввода в зависимости от состояния чекбокса
    document.getElementById('time').disabled = !this.checked;
});

document.getElementById('auto-off').addEventListener('change', function() {
    localStorage.setItem('autoOff', this.checked);  // Сохраняем состояние чекбокса для выключения
    // Включаем или отключаем поле ввода в зависимости от состояния чекбокса
    document.getElementById('timeOff').disabled = !this.checked;
});
