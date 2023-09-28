import { cardsList, lastUrl, urlWithParams } from "..";
import { getData } from "./getData";
import { openModal } from "./openModal";
import { addPreload, removePreload } from "./preload";
import { renderError } from "./renderError";
import { renderVacancies } from "./renderVacancies";

export const chooseVacancy = () => {
        // выбор вакансий:
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
        cardsList.addEventListener("keydown", ({code, target}) => {
             const vacancyCard = target.closest(".vacancy");
             if((code === "Enter" || code === "NumpadEnter") && vacancyCard) {
                const vacancyId = vacancyCard.dataset.id;
                openModal(vacancyId);
                target.blur();
             }
        })
}