import {postData} from '../services/requests'; // Функция отправки данных на сервер

// Загрузка изображения путем перетаскивания
const drop = () => {

    // drag *
    // dragend *
    // dragenter - объект над dropArea
    // dragexit *
    // dragleave - объект за пределами dropArea
    // dragover - объект зависает над dropArea
    // dragstart *
    // drop - объект отправлен в dropArea

    // Инпуты для загрузки изображений
    const fileInputs = document.querySelectorAll('[name="upload"]');

    // Избегать стандартного поведения при загрузке
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    // Блокирование стандартного поведения
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Обозначить стиль при перетаскивании изображения
    function hightlight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }

    // Обнулить стиль при выведении изображения из области загрузки
    function unhightlight(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        }
        else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    // Запуск обозначения стиля при перетаскивании изображения
    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => hightlight(input), false);
        });
    });

    // Запуск обнуления стиля при выведении изображения из области загрузки
    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhightlight(input), false);
        });
    });

    // Добавить файл в форму
    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            // Поместить перемещаемые файлы в инпут
            input.files = e.dataTransfer.files;
            // Переменная для "..."
            let dots;
            // Обрезка имени файла на собственно имя и расширение
            const arr = input.files[0].name.split('.');
            // Добавлять точки, если имя файла > 6 символов
            arr[0].length > 6 ? dots = '...' : dots = '.';
            // Записать и вывести новое имя файла
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;

            // Мгновенная отправка изображения в начале страницы
            if (input.hasAttribute('data-upload')) {
                input.closest('.file_upload').style.backgroundColor = '#f7e7e6';
                const formData = new FormData();
                formData.append('image', input.files[0]);
                postData('assets/designer.php', formData)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(() => {
                        console.log('Error');
                });
            }
        });
    });
};

export default drop;