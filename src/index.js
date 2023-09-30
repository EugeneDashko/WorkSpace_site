import './index.html';
// import './page.html';
import './index.scss';
//new modules:

import { fileController } from './modules/fileControllerPage';
import { formController } from './modules/formControllerPage';
import { filterToggle } from './modules/filterToggle';
import { selectCityControl } from './modules/selectCityControl';
import { chooseVacancy } from './modules/chooseVacancy';


//API
export const API_URL = 'https://vintage-worried-dibble.glitch.me/'
export const LOCATION_URL = "api/locations";
export const VACANCY_URL = "api/vacancy";


export const cardsList = document.querySelector('.cards__list');

//записываю сюда последний url вызванный в getData:
export let lastUrl = {
    url: ''
};

export const pagination = {};
export const urlWithParams = new URL(`${API_URL}${VACANCY_URL}`);

//use modules

const init = () => {

//try/ catch -  обход ошибки js  на при загрузки страницы page.
    try {
        filterToggle();
        selectCityControl();
        chooseVacancy();

    } catch (error) {
        console.log('error: ', error);
        console.warn('Мы не на странице index.html')
    }



    try {

        fileController();
        formController();

    } catch (error) {
        console.log('error: ', error);
        console.warn('Мы не на странице page.html')
    }

};

window.addEventListener('DOMContentLoaded',init);












