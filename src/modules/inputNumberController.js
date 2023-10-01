export const inputNumberController = () => {
    const inputNumberController = document.querySelectorAll('input[type="number"]');
    inputNumberController.forEach((input) => {
        let str = '';
        input.addEventListener('input', (event) => {
            isNaN(parseInt(event.data)) && event.data !== null;
            if(isNaN(parseInt(event.data)) && event.data !== null) {
                event.target.value = str;
                return
            }
            str = event.target.value;
        });
    })
}