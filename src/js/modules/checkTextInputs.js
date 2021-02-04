const checkTextInputs = (selector) => {

    // Набор инпутов
    const textInputs = document.querySelectorAll(selector);

    // Перебор всех инпутов
    textInputs.forEach(item => {
        // Отслеживание нажатия клавиш клавиатуры
        item.addEventListener('keypress', function(e) {
            // Допускать введение только киррилицы и цифр
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
};

export default checkTextInputs;