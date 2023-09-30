
import { lastUrl, pagination} from "..";
import { getData } from "./getData";
import { renderError } from "./renderError";
import { renderMoreVacancies } from "./renderMoreVacancies";

export const loadMoreVacancies = () => {
    if(pagination.totalPages > pagination.currentPage) {
        const urlWithParams = new URL(lastUrl.url);

        urlWithParams.searchParams.set("page", pagination.currentPage + 1);
        urlWithParams.searchParams.set("limit", window.innerWidth < 768 ? 6 : 12);

        getData(urlWithParams, renderMoreVacancies, renderError)
        .then(() => {
            lastUrl.url = urlWithParams
        })
    }
};