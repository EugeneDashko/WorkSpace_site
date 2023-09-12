
// import { lastUrl, pagination} from "..";
// import { getData } from "./getData";
// import { removePreload } from "./preload";
// import { renderError } from "./renderError";
// import { renderMoreVacancies } from "./renderMoreVacancies";

// export const loadMoreVacancies = (cardsList) => {
//     if(pagination.totalPages > pagination.currentPage) {
//         const urlWithParams = new URL(lastUrl);
//         urlWithParams.searchParams.set("page", pagination.currentPage + 1);
//         getData(urlWithParams, renderMoreVacancies, renderError).then(() => {
//             // lastUrl = urlWithParams
//             Object.assign(lastUrl, urlWithParams);
//             removePreload(cardsList);
//         })
//     }
// };