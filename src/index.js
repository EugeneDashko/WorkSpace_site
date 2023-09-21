import './index.html';
// import './page.html';
import './index.scss';
//new modules:
const Choices = require('choices.js');
import { renderError } from './modules/renderError';
import { renderVacancies } from './modules/renderVacancies';
import { openModal } from './modules/openModal';
import { getData } from './modules/getData';
import { addPreload, removePreload } from './modules/preload';
import { filter } from './modules/filter';
import { loadMoreVacancies } from './modules/loadMoreVacancies';
import { closeFilter, openFilter } from './modules/vacanciesFilter';

//API
export const API_URL = 'https://workspace-methed.vercel.app/';


export const LOCATION_URL = "api/locations";
export const VACANCY_URL = "api/vacancy";

//записываю сюда последний url вызванный в getData:
const cardsList = document.querySelector('.cards__list');
export let lastUrl = "";
export const pagination = {};

export const urlWithParams = new URL(`${API_URL}${VACANCY_URL}`);

//use modules

//пагинация
// observer - следит за чем-либо
export const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            //если элемент видимый
            if (entry.isIntersecting) {
                loadMoreVacancies();
            }
        })
    },
    {
        rootMargin: "100px",
    },
);

const init = () => {

    const vacanciesFilterBtn = document.querySelector('.vacancies__filter-btn');
    const vacanciesFilter = document.querySelector('.vacancies__filter');

    vacanciesFilterBtn.addEventListener( 'click', () => {
        if(vacanciesFilterBtn.classList.contains("vacancies__filter-btn_active")) {
            closeFilter(vacanciesFilterBtn,
                vacanciesFilter,
                "vacancies__filter-btn_active",
                "vacancies__filter_active");
        } else {
            openFilter(vacanciesFilterBtn,
                vacanciesFilter,
                "vacancies__filter-btn_active",
                "vacancies__filter_active");
        };
    });

    window.addEventListener("resize", () => {
        if(vacanciesFilterBtn.classList.contains("vacancies__filter-btn_active")) {
            // 1) vacanciesFilter.style.height = `${vacanciesFilter.scrollHeight}px`;
            closeFilter(vacanciesFilterBtn,
                vacanciesFilter,
                "vacancies__filter-btn_active",
                "vacancies__filter_active");
        };
    })

    filter(`${API_URL}${VACANCY_URL}`, vacanciesFilterBtn, vacanciesFilter);
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


    urlWithParams.searchParams.set('limit', window.innerWidth < 768 ? 6 : 12);
    urlWithParams.searchParams.set('page', 1);

    getData(urlWithParams, renderVacancies, renderError).then(() => {
        lastUrl = urlWithParams;
        removePreload(cardsList);
    })


    //открываю модальное окно:
    cardsList.addEventListener('click', ({target}) => {
        const vacancyCard = target.closest('.vacancy');
        if(vacancyCard) {
            //получаю id из тега и с ним запускаю opneModal:
            const vacancyId = vacancyCard.dataset.id;
            openModal(vacancyId);
        }
    });
};


window.addEventListener('DOMContentLoaded',init);












