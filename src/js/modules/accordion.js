// CSS variant
const accordion = (triggerSelector, itemSelector) => {

    // Триггер-кнопка аккордеона
    const btns = document.querySelectorAll(triggerSelector),
        // Контект элемента вкладки аккордеона
          blocks = document.querySelectorAll(itemSelector);
    
    // Добавить плавное появление контента
    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    });

    // Обработать клик по каждому триггеру
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Если триггер содержит класс активности
            if (!this.classList.contains('active')) {
                // Убирать у всех триггеров класс активности
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                });
                // Текущему триггеру добавлять класс активности
                this.classList.add('active', 'active-style');
            }
        });
    });
};

export default accordion;