const changeFormDetails = (details) => {

    // Поля деталей оформления заказа
    const clientSize = document.querySelectorAll('#size'),
          clientMaterial = document.querySelectorAll('#material'),
          clientOption = document.querySelectorAll('#options'),
          clientPromocode = document.querySelectorAll('.promocode');

    
    // Функция записывает в объект formDetails данные, которые не попали в formData
    function bindActionToObj(elem, event, prop) {

        elem.forEach((item) => {

            // Отсеживать ввод данных
            item.addEventListener(event, () => {
                details[prop] = item.value;
            });
        });
    }

    // Обработка всех полей с данными расчёта
    bindActionToObj(clientSize, 'change', 'size');
    bindActionToObj(clientMaterial, 'change', 'material');
    bindActionToObj(clientOption, 'change', 'option');
    bindActionToObj(clientPromocode, 'change', 'promocode');
};

export default changeFormDetails;