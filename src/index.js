import './index.html';
// import './page.html';
import './index.scss';


//=====================================================


//new modules:


//use modules
const API_URL = 'https://workspace-methed.vercel.app/';
const LOCATION_URL = "api/locations";

const Choices = require('choices.js');


const init = () => {

    const citySelect = document.querySelector('#city');
    const cityChoices = new Choices(citySelect, {
        itemSelectText: '',
        searchEnabled: false,
        shouldSort: false,
    });

    getData(`${API_URL}${LOCATION_URL}`,
    (locationData) => {
        const locations = locationData.map(location => {
            return {value: location};
        });
        console.log('locations: ', locations);
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

init();


// fetch(API_URL + LOCATION_URL)
//     .then((response)=> {
//         return response.json();
//     })
//     .then((data)=> {
//         console.log('data: ', data);

//     })
//     .catch((err => {
//         console.log('err: ', err);

//     }));








