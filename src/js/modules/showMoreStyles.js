import {getResource} from '../services/requests'; // Функция для получения данных с сервера

// Показ дополнительных скрытых карточек
const showMoreStyles = (wrapper, trigger) => {

    // Кнопка-триггер
    const btn = document.querySelector(trigger);
    
    // Получение и обработка данных при клике на кнопку-триггер
    btn.addEventListener('click', function() {
        getResource('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => console.log(error));

        // Убрать кнопку-триггер
        this.remove();
    });

    // Создание карточки на основе данных сервера
    function createCards(response) {
        response.forEach(({src, title, link}) => {

            // Обертка карточки
            let card = document.createElement('div');

            // Добавление классов карточке
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            // Внутренность карточки
            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            // Добавление карточек в DOM
            document.querySelector(wrapper).appendChild(card);
        });
    }

    // Обычная подгрузка элементов из DOM
    // // Добавить анимацию для появления карточек
    // cards.forEach( card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // // Убрать классы скрытия, добавить классы показа
    // btn.addEventListener('click', () => {
    //     cards.forEach( card => {
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //     });
    //     // Скрыть кнопку-триггер
    //     btn.style.display = 'none';
    // });
};

export default showMoreStyles;