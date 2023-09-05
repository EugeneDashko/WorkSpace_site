export const renderMoreVacancies = (data) => {
    const cardsList = document.querySelector('.cards__list');
    const cards = createCards(data);
    cardsList.append(...cards);
    removePreload(cardsList);
};