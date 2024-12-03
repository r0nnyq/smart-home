document.addEventListener("DOMContentLoaded", () => {
    const temperatureDisplay = document.getElementById("temperature");
    const increaseButton = document.getElementById("increase-temp");
    const decreaseButton = document.getElementById("decrease-temp");

    // Начальные значения температуры
    let currentTemp = 18; // по умолчанию
    const minCooling = 16;
    const maxCooling = 30;
    const minHeating = 18;
    const maxHeating = 32;

    // Функция обновления кнопок
    function updateButtons() {
        const isHeating = false; // Укажите true для режима обогрева
        const minTemp = isHeating ? minHeating : minCooling;
        const maxTemp = isHeating ? maxHeating : maxCooling;

        increaseButton.disabled = currentTemp >= maxTemp;
        decreaseButton.disabled = currentTemp <= minTemp;
    }

    // События кнопок
    increaseButton.addEventListener("click", () => {
        const maxTemp = false ? maxHeating : maxCooling; // Замените условие
        if (currentTemp < maxTemp) {
            currentTemp++;
            temperatureDisplay.textContent = currentTemp;
        }
        updateButtons();
    });

    decreaseButton.addEventListener("click", () => {
        const minTemp = false ? minHeating : minCooling; // Замените условие
        if (currentTemp > minTemp) {
            currentTemp--;
            temperatureDisplay.textContent = currentTemp;
        }
        updateButtons();
    });

    // Первоначальная настройка
    updateButtons();
});
