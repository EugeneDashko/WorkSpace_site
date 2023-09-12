import { lastUrl, url } from "..";
import { getData } from "./getData";
import { renderError } from "./renderError";
import { renderVacancies } from "./renderVacancies";


export const filter = (urlVacancy) => {
    const filterForm = document.querySelector('.filter__form');
    
    filterForm.addEventListener('submit',(event) => {
        //отключаю перезагрузку страницы по кнопке "Применить":
        event.preventDefault();
        //получаю все (name) данные при помощи объекта new Forme:
        const formData = new FormData(filterForm);

        const urlWithParam = new URL(urlVacancy);

        formData.forEach((value, key) => {
            urlWithParam.searchParams.append(key, value);
        });

        getData (urlWithParam, renderVacancies, renderError).then(() => {
            lastUrl = urlWithParam;
        });
    });
};