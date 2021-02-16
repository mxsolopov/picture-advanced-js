const filter = () => {

    // Навигация фильтра
    const menu = document.querySelector('.portfolio-menu'),
          // Элементы навигации
          items = menu.querySelectorAll('li'),
          // Обертка работ
          wrapper = document.querySelector('.portfolio-wrapper'),
          // Все работы
          markAll = wrapper.querySelectorAll('.all'),
          // Блок для показа при отсутствии работ
          no = document.querySelector('.portfolio-no');

    // Работа фильтра
    const typeFilter = (markType) => {

        // Убрать показ всех работ
        markAll.forEach( mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        // Убрать блок для показа при отсутствии работ
        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        // Если аргумент содержит работы - показывать их
        if (markType.length > 0) {
            markType.forEach( mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        // Иначе появляется блок для показа при отсутствии работ
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    // Запускать фильтр при клике по триггеру
    function applyFilter(selector) {
        menu.querySelector(selector).addEventListener('click', () => {
            typeFilter(wrapper.querySelectorAll(selector));
        });
    }

    // Добавлять класс активности текущему фильтру
    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });

    // Запуск функций на нужные триггеры
    applyFilter('.all');
    applyFilter('.lovers');
    applyFilter('.chef');
    applyFilter('.girl');
    applyFilter('.guy');
    applyFilter('.grandmother');
    applyFilter('.granddad');
};

export default filter;