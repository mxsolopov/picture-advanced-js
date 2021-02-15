// Калькулятор суммы заказа
const calc = (size, material, options, promocode, result, details) => {

    // Входные и выходные данные калькулятора
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    // Начальное значение результатов расчёта 
    let sum = 0;

    // Функция вычисления суммы заказа
    const calcFunction = () => {

        // Выражение суммы заказа с округлением
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        // Выводить результат вычисления только после выбора 2-х опций
        if (sizeBlock.value == '' || materialBlock.value == '') {

            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';

        // При наличии промокода вычислять скидку
        } else if (promocodeBlock.value === 'IWANTPOPART') {

            resultBlock.textContent = Math.round(sum * 0.7);
            details.price = Math.round(sum * 0.7).toString();

        // В остальных случаях просто записывать сумму
        } else {

            resultBlock.textContent = sum;
            details.price = sum.toString();
        }
    };

    // Калькулятор срабатывает при изменении значения селектов
    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    // Калькулятор срабатывает при вводе скидки
    promocodeBlock.addEventListener('input', calcFunction);

};

export default calc;