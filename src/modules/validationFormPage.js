import JustValidate from 'just-validate';

export const validationForm = (form) => {
    const validate = new JustValidate(form, {
        //цвет label
        errorLabelStyle: {
            color: '#f00'
        },
        errorFieldStyle: {
            borderColor: '#f00'
        },
        errorFieldCssClass: 'invalid',
        //ошибки складывай сюда:
        errorsContainer: document.querySelector('.employer__error')
    });

    validate
    .addField('#logo', [
        {
            rule: 'minFilesCount',
            value: 1,
            errorMessage: 'Добавьте логотип',
        },
        {
            rule: 'files',
            value: {
                files: {
                    extensions: ['jpeg', 'png', 'jpg'],
                    maxSize: 102400,
                    minSize: 1000,
                    types: ['image/jpeg', 'image/pmg'],
                    names: ['file1.jpeg', 'files2.png'],
                },
            },
            errorMessage: 'Размер файла должен быть не больше 200 Кб'
        },

    ])
    .addField('#company', [
        {
            rule: 'required', errorMessage: 'Заполните название компании'
        },
    ])
    .addField('#title', [
        {
            rule: 'required', errorMessage: 'Заполните название вакансии'
        },
    ])
    .addField('#salary', [
        {
            rule: 'required', errorMessage: 'Заполните зарплату'
        },
    ])
    .addField('#location', [
        {
            rule: 'required', errorMessage: 'Заполните название города'
        },
    ])
    .addField('#email', [
        {
            rule: 'required', errorMessage: 'Заполните  email'
        },
        {
            rule: 'email', errorMessage: 'Введенный email не верный'
        }
    ])
    .addField('#description', [
        {
            rule: 'required', errorMessage: 'Заполните описание'
        },
    ])

    //ниже радиокнопки:
    .addRequiredGroup('#format', 'Выберите формат')
    .addRequiredGroup('#experience', 'Выберите опыт')
    .addRequiredGroup('#type', 'Выберите занятость');

return validate;
}