// Маска номера телефона
const mask = (selector) => {

    // Установка позиции курсора
    let setCursorPosition = (pos, elem) => {

        // Ручная установка фокуса на элементе
        elem.focus();

        // Полифил для метода setSelectionRange
        if (elem.setSelectionRange) {
            // Установить курсор в позицию pos
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            // Диапазон выделения
            let range = elem.createTextRange();
            // Объединение граничных точек диапазона
            range.collapse(true);
            // Конечная точка выделения
            range.moveEnd('character', pos);
            // Начальная точка выделения
            range.moveStart('character', pos);
            // Собственно выделение
            range.select();
        }
    };
    
    // Создание маски
    function createMask(event) {

        // Матрица маски
        let matrix = '+7 (___) ___ __ __',
            // Итератор
            i = 0,
            // Статичное значение на основе матрицы - получать только цифры
            def = matrix.replace(/\D/g, ''),
            // Динамичное значение на основе ввода от пользователя - получать только цифры
            val = this.value.replace(/\D/g, '');
        
        // Если кол-во цифр, которое останется в матрице
        // после удаления не цифр >= кол-ва цифр вводимых пользователем =>
        // => заменять значение на стандартное
        if (def.length >= val.length) {
            val = def;
        }

        // Перебрать все символы в матрице
        this.value = matrix.replace(/./g, function(a) {
            // После проверки на цифру и кол-во символов возвращать символ
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '': a;
        });

        // Очищать инпут, если пользователь покидает состояние фокуса
        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            // Установить позицию курсора
            setCursorPosition(this.value.length, this);
        }
    }

    // Инпуты, на которые будет применятся маска
    const inputs = document.querySelectorAll(selector);
    
    // Применять маску на различные события с инпутами
    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
        input.addEventListener('click', createMask);
    });
};

export default mask;