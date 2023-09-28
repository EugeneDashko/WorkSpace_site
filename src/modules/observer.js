//пагинация

import { loadMoreVacancies } from "./loadMoreVacancies";

// observer - следит за чем-либо
export const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            //если элемент видимый
            if (entry.isIntersecting) {
                loadMoreVacancies();
            }
        })
    },
    {
        rootMargin: "100px",
    },
);