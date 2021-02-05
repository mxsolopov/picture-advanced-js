// Показ дополнительных скрытых карточек
const showMoreStyles = (trigger, styles) => {

    // Массив карточек и кнопка-триггер
    const cards = document.querySelectorAll(styles),
          btn = document.querySelector(trigger);

    // Добавить анимацию для появления карточек
    cards.forEach( card => {
        card.classList.add('animated', 'fadeInUp');
    });

    // Убрать классы скрытия, добавить классы показа
    btn.addEventListener('click', () => {
        cards.forEach( card => {
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
        });
        // Скрыть кнопку-триггер
        btn.style.display = 'none';
    });
};

export default showMoreStyles;