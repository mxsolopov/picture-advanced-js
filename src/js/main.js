import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import changeFormDetails from './modules/changeFormDetails';

window.addEventListener('DOMContentLoaded', () => {

    "use strict";

    // Объект для записи данных формы
    let formDetails = {};

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    changeFormDetails(formDetails);
    forms(formDetails);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('#styles .row', '.button-styles');
    calc('#size', '#material', '#options', '.promocode', '.calc-price', formDetails);
});