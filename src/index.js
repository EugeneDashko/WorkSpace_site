import './index.html';
// import './page.html';
import './index.scss';



//=====================================================


//new modules:
const Choices = require('choices.js');
import { renderError } from './modules/renderError';
import { renderVacancy } from './modules/renderVacancy';

//use modules
export const API_URL = 'https://workspace-methed.vercel.app/';
const LOCATION_URL = "api/locations";
const VACANCY_URL = "api/vacancy";



const init = () => {

// select city:
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

const getData = async (url, cbSuccess, cbError) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        cbSuccess(data);
    } catch (err) {
        cbError(err)
    }
}

// select vacancy:
const url = new URL(`${API_URL}${VACANCY_URL}`);

getData(url, renderVacancy, renderError);

init();











