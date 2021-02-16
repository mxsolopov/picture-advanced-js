import {getResource} from '../services/requests'; // Функция для получения данных с сервера
import calc from './calc';
import changeFormDetails from './changeFormDetails';


const createOrderData = (details) => {
    getResource('assets/db.json')
            .then(res => createData(res.order))
            .catch(error => console.log(error));

    // Создание селектов для заказа на основе данных сервера
    function createData(response) {
        response.forEach(({id, value, text}) => {

            // Создать селект и присвоить id из базы
            let select = document.createElement('select');
            select.id = id;

            // Перебрать опции в базе и добавить в селект
            for (let key in value, text) {
                let option = document.createElement('option');
                option.value = value[key];
                option.textContent = text[key];
                select.append(option);
            }

            // Добавить селект в DOM
            document.querySelector('.promocode').before(select);
        });

        // Запустить калькулятор
        calc('#size', '#material', '#options', '.promocode', '.calc-price', details);
        // Добавить данные в отправляемую форму
        changeFormDetails('#size', '#material', '#options', '.promocode', details);
    }
};

export default createOrderData;