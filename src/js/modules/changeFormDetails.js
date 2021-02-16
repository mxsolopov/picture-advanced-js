const changeFormDetails = (size, material, options, promocode, details) => {

    // Поля деталей оформления заказа
    const clientSize = document.querySelector(size),
          clientMaterial = document.querySelector(material),
          clientOption = document.querySelector(options),
          clientPromocode = document.querySelector(promocode);

    
    // Функция записывает в объект formDetails данные, которые не попали в formData
    function bindActionToObj(elem, event, prop) {

        // Отсеживать ввод данных
        elem.addEventListener(event, () => {
            details[prop] = elem.value;
        });
    }

    // Обработка всех полей с данными расчёта
    bindActionToObj(clientSize, 'change', 'size');
    bindActionToObj(clientMaterial, 'change', 'material');
    bindActionToObj(clientOption, 'change', 'option');
    bindActionToObj(clientPromocode, 'change', 'promocode');
};

export default changeFormDetails;