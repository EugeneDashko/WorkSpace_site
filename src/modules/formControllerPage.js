import { validationForm } from "./validationFormPage";

export const formController = () => {
    const form = document.querySelector('.employer__form');
    const employerError = document.querySelector('.employer__error')

    const validate = validationForm(form);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if(!validate.isValid) {
            return
        }

        try {
            const formData = new FormData(form);
            employerError.textContent = "Отправка на сервер..."
        //Отправка данных на сервер:
        const response = await fetch('${API_URL}${VACANCY__URL', {
            method: 'POST',
            body: formData,
        });
        if (response.ok) {
            employerError.textContent = "";
            window.location.href = 'index.html'
        }
        } catch (error) {
            employerError.textContent = "Произошла ошибка"
            console.error(error);
            
        }
        
    })
}