import './index.html';
// import './page.html';
import './index.scss';
//new modules:
const Choices = require('choices.js');
import { renderError } from './modules/renderError';
import { renderVacancy } from './modules/renderVacancy';
import { openModal } from './modules/openModal';
import { getData } from './modules/getData';


//API
export const API_URL = 'https://workspace-methed.vercel.app/';
const LOCATION_URL = "api/locations";
const VACANCY_URL = "api/vacancy";

//use modules

const init = () => {

    // выбор городов:
    const citySelect = document.querySelector('#city');
    const cityChoices = new Choices(citySelect, {
        itemSelectText: '',
        searchEnabled: false,
        shouldSort: false,
    });

    //запрос на сервер по городам:
    getData(`${API_URL}${LOCATION_URL}`,
    (locationData) => {
        const locations = locationData.map(location => {
            return {value: location};
        });
        cityChoices.setChoices(
        locations,
        "value",
        "label",
        true)
    },
    (err) => {
        console.log('err: ', err);
    });
};


// выбор вакансий:
export const url = new URL(`${API_URL}${VACANCY_URL}`);
const cardsList = document.querySelector('.cards__list');

getData(
    url,

    (data) => {
    renderVacancy (data, cardsList)
    },

    renderError
    );

cardsList.addEventListener('click', ({target}) => {
    const vacancyCard = target.closest('.vacancy');
    if(vacancyCard) {
        const vacancyId = vacancyCard.dataset.id;
        openModal(vacancyId);
    }
})


init();











