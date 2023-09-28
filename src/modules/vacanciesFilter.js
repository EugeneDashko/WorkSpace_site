
export const openFilter = (btn, dropDown, classNameBtn, classNameDb) => {
    dropDown.style.height = `${dropDown.scrollHeight}px`;
    btn.classList.add(classNameBtn);
    dropDown.classList.add(classNameDb);
};

export const closeFilter = (btn, dropDown, classNameBtn, classNameDb) => {
    btn.classList.remove(classNameBtn);
    dropDown.classList.remove(classNameDb);
    dropDown.style.height = "";

}

