import { API_URL, LOCATION_URL } from "..";
import { getData } from "./getData";


export const selectCityControl = () => {
        // выбор городов:
        const citySelect = document.querySelector('#city');
        const Choices = require('choices.js');
        const cityChoices = new Choices(citySelect, {
            itemSelectText: '',
            searchEnabled: false,
            shouldSort: false,
            position: 'bottom',
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
}