// Advanced variant
const accordion = (triggerSelector) => {

    // Триггер-кнопка аккордеона
    const btns = document.querySelectorAll(triggerSelector);

    // Обработать клик по каждому триггеру
    btns.forEach(btn => {
        btn.addEventListener('click', function() {

            // Скрыть все активные вопросы
            document.querySelectorAll('.active-style').forEach(content => {
                content.classList.remove('active-style');
            });

            // Скрыть все активные ответы
            document.querySelectorAll('.active-content').forEach(content => {
                content.classList.remove('active-content');
                content.style.maxHeight = '0px';
            });

            // Добавить активный класс текущему вопросу
            this.classList.add('active-style');
            // Добавить активный класс текущему ответу
            this.nextElementSibling.classList.add('active-content');

            // Показывать контент ответа при наличии класса активности у вопроса
            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            // Скрывать контент ответа в остальных случаях
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });
};

export default accordion;

// // CSS variant
// const accordion = (triggerSelector, itemSelector) => {

//     // Триггер-кнопка аккордеона
//     const btns = document.querySelectorAll(triggerSelector),
//         // Контект элемента вкладки аккордеона
//           blocks = document.querySelectorAll(itemSelector);
    
//     // Добавить плавное появление контента
//     blocks.forEach(block => {
//         block.classList.add('animated', 'fadeInDown');
//     });

//     // Обработать клик по каждому триггеру
//     btns.forEach(btn => {
//         btn.addEventListener('click', function() {
//             // Если триггер содержит класс активности
//             if (!this.classList.contains('active')) {
//                 // Убирать у всех триггеров класс активности
//                 btns.forEach(btn => {
//                     btn.classList.remove('active', 'active-style');
//                 });
//                 // Текущему триггеру добавлять класс активности
//                 this.classList.add('active', 'active-style');
//             }
//         });
//     });
// };

// export default accordion;