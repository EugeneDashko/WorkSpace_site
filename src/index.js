import './index.html';
// import './page.html';
import './index.scss';
//new modules:
const Choices = require('choices.js');
import { renderError } from './modules/renderError';
import { renderVacancy } from './modules/renderVacancy';
import { openModal } from './modules/openModal';
import { getData } from './modules/getData';
import { addPreload } from './modules/preload';
import { filter } from './modules/filter';
import { renderMoreVacancies } from './modules/renderMoreVacancies';



//API
export const API_URL = 'https://workspace-methed.vercel.app/';


const LOCATION_URL = "api/locations";
const VACANCY_URL = "api/vacancy";

//записываю сюда последний url вызванный в getData:
let lastUrl = "";

export const url = new URL(`${API_URL}${VACANCY_URL}`);
//use modules


//пагинация
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            //если элемент видимый
            if (entry.isIntersecting) {
                loadMoreVacancies();
            }
        });
    },
    {
        rootMargin: "100px",
    },
);

const init = () => {
    filter(`${API_URL}${VACANCY_URL}`);
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


    // выбор вакансий:
    const cardsList = document.querySelector('.cards__list');

    addPreload(cardsList);

    getData(url, renderVacancy, renderError);

    //открываю модальное окно:
    cardsList.addEventListener('click', ({target}) => {
        const vacancyCard = target.closest('.vacancy');
        if(vacancyCard) {
            //получаю id из тега и с ним запускаю opneModal:
            const vacancyId = vacancyCard.dataset.id;
            openModal(vacancyId);
        }
    });

    renderMoreVacancies();

};


init();











