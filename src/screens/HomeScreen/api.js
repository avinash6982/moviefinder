import { API } from "../../api/endpoints";
import { getRequest } from "../../api/requests";

export const fetchDiscover = (params) => getRequest(API.DISCOVER, params);

export const searchResults = (params) => getRequest(API.SEARCH, params);
