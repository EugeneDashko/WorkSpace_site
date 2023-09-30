import { API_URL, VACANCY_URL, lastUrl } from "..";
import { getData } from "./getData";
import { renderError } from "./renderError";
import { renderVacancies } from "./renderVacancies";
import { closeFilter } from "./vacanciesFilter";


export const filter = (vacanciesFilterBtn, vacanciesFilter) => {
    const filterForm = document.querySelector('.filter__form');

    filterForm.addEventListener('submit',(event) => {
        //отключаю перезагрузку страницы по кнопке "Применить":
        event.preventDefault();
        //получаю все (name) данные при помощи объекта new Forme:
        const formData = new FormData(filterForm);

        const urlWithParam = new URL(`${API_URL}${VACANCY_URL}`);
        // const urlWithParam = new URL(urlVacancy);

        formData.forEach((value, key) => {
            urlWithParam.searchParams.append(key, value);
        });

        getData (urlWithParam, renderVacancies, renderError)
        .then(() => {
            lastUrl.url = urlWithParam;

        })
        .then(() => {
            closeFilter(vacanciesFilterBtn,
                vacanciesFilter,
                "vacancies__filter-btn_active",
                "vacancies__filter_active");
        });;
    });
};