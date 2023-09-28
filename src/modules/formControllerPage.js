import { validationForm } from "./validationFormPage";

export const formController = () => {
    const form = document.querySelector('.employer__form');

    validationForm(form)

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })
}