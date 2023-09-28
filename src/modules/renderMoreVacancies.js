import { pagination } from "..";
import { observer } from "./observer";
import { createCards } from "./renderVacancies";

export const renderMoreVacancies= (data) => {
    const cardsList = document.querySelector('.cards__list');
    const cards = createCards(data);
    cardsList.append(...cards);

    if(data.pagination) {
        Object.assign(pagination, data.pagination);
    };

    observer.observe(cardsList.lastElementChild);
};