import { API_URL, VACANCY_URL } from "..";
import { filter } from "./filter";
import { closeFilter, openFilter } from "./vacanciesFilter";

export const filterToggle = () => {
    const vacanciesFilterBtn = document.querySelector('.vacancies__filter-btn');
    const vacanciesFilter = document.querySelector('.vacancies__filter');
    
    vacanciesFilterBtn.addEventListener('click', () => {
        if(vacanciesFilterBtn.classList.contains("vacancies__filter-btn_active")) {
            closeFilter(vacanciesFilterBtn,
                vacanciesFilter,
                "vacancies__filter-btn_active",
                "vacancies__filter_active");
        } else {
            openFilter(vacanciesFilterBtn,
                vacanciesFilter,
                "vacancies__filter-btn_active",
                "vacancies__filter_active");
        };
    });

    window.addEventListener("resize", () => {
        if(vacanciesFilterBtn.classList.contains("vacancies__filter-btn_active")) {
            // 1) vacanciesFilter.style.height = `${vacanciesFilter.scrollHeight}px`;
            closeFilter(vacanciesFilterBtn,
                vacanciesFilter,
                "vacancies__filter-btn_active",
                "vacancies__filter_active");
        };
    });
    filter(vacanciesFilterBtn, vacanciesFilter);
}