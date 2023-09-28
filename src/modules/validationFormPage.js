import JustValidate from 'just-validate';

export const validationForm = (form) => {
const validate = new JustValidate(form);
console.log('validate: ', validate);
}