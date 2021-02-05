import closeModals from './closeModals';

// Отправка данных форм на сервер
const forms = () => {

    // Получение всех форм с инпутами
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          popup = document.querySelectorAll('[data-modal]'),
          upload = document.querySelectorAll('[name="upload"]');

    // Сообщения для пользователя
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    // Варианты путей отправки данных от польователя
    const path = {
        designer: 'assets/designer.php',
        question: 'assets/question.php'
    };

    // // Валидация полей с телефоном (ввод только цифр)
    // checkNumInputs('input[name="user_phone"]');

    // Функция для отправки запроса на сервер
    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    // Очистка инпутов
    const clearInputs = () => {
        // Очистка текстовых инпутов
        input.forEach(item => {
            item.value = '';
        });
        // Очистка метки загруженных файлов
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    // Обрезка длинного имени загружаемого файла
    upload.forEach(item => {
        item.addEventListener('input', () => {
            // Переменная для "..."
            let dots;
            // Обрезка имени файла на собственно имя и расширение
            const arr = item.files[0].name.split('.');
            // Добавлять точки, если имя файла > 6 символов
            arr[0].length > 6 ? dots = '...' : dots = '.';
            // Записать м вывести новое имя файла
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    // Перебор всех форм и отправка данных на сервер
    form.forEach( item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Создание блока для вывода статуса отправки формы
            let statusMessage = document.createElement('div'),
            // Создание изображения статуса отправки формы
                statusImg = document.createElement('img'),
            // Создание текстового блока статуса отправки формы
                textMessage = document.createElement('div');

            // Добавить блок статуса после формы
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            // Добавить изображение в блок статуса
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            // Добавить текст в блок статуса
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            // Анимировать и убрать форму после отправки
            item.classList.add('animated', 'fadeOutUp');
            setTimeout( () => {
                item.style.display = 'none';
            }, 400);

            // Объект с данными формы
            const formData = new FormData(item);

            // Переменная будет хранить путь для отправки данных
            let api;

            // Условие присвоения пути для отправки данных
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;

            // Отправка данных
            postData(api, formData)
                .then(res => {
                    // Успешная отправка
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    // Ошибка
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    // Очистить инпуты и перезагрузить форму
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                    // Убрать модальное окно
                    setTimeout(() => {
                        closeModals(popup);
                    }, 10000);
                });
        });
    });
};

export default forms;