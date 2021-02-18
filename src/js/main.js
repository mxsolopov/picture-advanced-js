import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import createOrderData from './modules/createOrderData';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';

window.addEventListener('DOMContentLoaded', () => {

    "use strict";

    // Объект для записи данных формы
    let formDetails = {};

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms(formDetails);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('#styles .row', '.button-styles');
    createOrderData(formDetails);
    filter();
    pictureSize('.sizes-block');
});