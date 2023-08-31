import './index.html';
// import './page.html';
import './index.scss';

//=====================================================



//new modules:
const Choices = require('choices.js');

//use modules
 const choice = () => {
    const citySelect = document.querySelector('#city');
    const cityChoices = new Choices(citySelect, {
        itemSelectText: '',
        searchEnabled: false,

    });
}

choice();