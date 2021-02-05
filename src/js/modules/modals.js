import closeModals from './closeModals';
import calcScroll from './calcScroll';

// Работа модальных окон
const modals = () => {

    // Индикатор кликов на кнопки
    let btnPressed = false;

    // Функция показа модальных окон
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = 'false') {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              popupSet = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        // Показать окно при клике на триггер
        for (let key of trigger) {
            key.addEventListener('click', (e) => {

                // Пользователь кликнул на кнопку
                btnPressed = true;

                closeModals(popupSet);

                if (e.target) {
                    e.preventDefault();
                }

                // Убирать элемент, по которому делается клик
                if (destroy == 'true') {
                    key.remove();
                }
                
                modal.style.display = 'block';
                // Плавное появление
                modal.classList.add('animated', 'fadeIn');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        }

        // Скрыть окно при клике на крестик
        close.addEventListener('click', () => {

            closeModals(popupSet);

            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;            
        });

        // Скрыть окно при клике на область вне формы
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {

                closeModals(popupSet);

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
                const scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    // Показ модальной формы при скролле до конца страницы
    function openByScroll(selector) {
        window.addEventListener('scroll', () => {

            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            // Имитация клика
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    // Открытие модальных форм проекта
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', 'true');
    // showModalByTime('.popup-consultation', 5000);
    // Показать подарок при долистывании до конца страницы
    openByScroll('.fixed-gift');
};

export default modals;