const Choices = require('choices.js');

export  const choice = () => {
    const citySelect = document.querySelector('#city');
    const cityChoices = new Choices(citySelect, {
        itemSelectText: '',
        searchEnabled: false,

    });
}