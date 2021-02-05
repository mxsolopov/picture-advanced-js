// Слайдер
const sliders = (slides, dir, prev, next) => {

    // Индекс показываемого вначале слайда
    let slideIndex = 1,
        paused = false;
    
    // Элементы слайдов
    const items = document.querySelectorAll(slides);

    // Функция показа слайдов
    function showSlides(n) {

        // Показывать первый слайд при запросе слайда,
        // номер которого больше длины массива
        if (n > items.length) {
            slideIndex = 1;
        }

        // Показывать последний слайд при запросе слайда,
        // номер которого отрицательный
        if (n < 1) {
            slideIndex = items.length;
        }

        // Скрыть все слайды
        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        // Показ первого слайда
        items[slideIndex - 1].style.display = 'block';
    }

    // Показать первый слайд
    showSlides(slideIndex);

    // Функция переключения слайдов
    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    // При наличии кнопок переключения слайдер будет работать
    try {

        // Кнопки переключения
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        // Кнопка - показать предыдущий слайд
        prevBtn.addEventListener('click', () => {
            plusSlide(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        // Кнопка - показать следующего слайда
        nextBtn.addEventListener('click', () => {
            plusSlide(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });

    } catch(e) {}

    // Автоматическое переключение слайдеров в зависимости от направления
    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval( () => {
                plusSlide(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval( () => {
                plusSlide(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }

    // Инициализация автоматического переключения
    activateAnimation();

    // При наведении на слайдер убирать автоматическое переключение слайдов
    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    // При уведении мыши вернуть автоматическое переключение слайдов
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;

