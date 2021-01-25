import closeModals from './closeModals';
import calcScroll from './calcScroll';

const modals = () => {

    // Функция показа модальных окон
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = 'true') {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              popup = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        // Показать окно при клике на триггер
        for (let key of trigger) {
            key.addEventListener('click', (e) => {

                closeModals(popup);

                if (e.target) {
                    e.preventDefault();
                }
    
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        }

        // Скрыть окно при клике на крестик
        close.addEventListener('click', () => {

            closeModals(popup);

            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;            
        });

        // Скрыть окно при клике на область вне формы
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {

                closeModals(popup);

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    }

    // Показать форму спустя заданное время
    function showModalByTime(selector, time) {
        setTimeout(function() {

            let display;

            // Проверка наличия открытых модальных форм
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            // Если открытых форм нет, то показывать нужную форму спустя время "t"
            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    // Открытие модальных форм проекта
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    // showModalByTime('.popup-consultation', 5000);
};

export default modals;