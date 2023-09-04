import { API_URL } from "..";

const cardsList = document.querySelector('.cards__list');

const createCard = vacancy =>
    `
        <article class="vacancy" tabindex="0" data-id = "${vacancy.id}">
        <img class="vacancy__img" src="${API_URL}${vacancy.logo}" alt="Логотип компании ${vacancy.company}">
        <p class="vacancy__company">${vacancy.company}</p>
        <h3 class="vacancy__title">${vacancy.title}</h3>
        <ul class="vacancy__fields">
            <li class="vacancy__field">от ${parseInt(vacancy.salary).toLocaleString()}₽</li>
            <li class="vacancy__field">${vacancy.format}</li>
            <li class="vacancy__field">${vacancy.type}</li>
            <li class="vacancy__field">${vacancy.experience}</li>
        </ul>
        </article>
    `;

const createCards = (data) => 
    data.vacancies.map((vacancy) => {
        const li = document.createElement('li');
        li.classList.add('cards__item');
        li.insertAdjacentHTML('beforeend', createCard(vacancy));
        console.log('li: ', li);
        return li;
    });

export const renderVacancy = (data) => {
    cardsList.textContent = "";
    const cards = createCards(data);
    console.log('cards: ', cards);
    cardsList.append(...cards);
};