import { API } from "../../api/endpoints";
import { getRequest } from "../../api/requests";

export const fetchMovieDetails = (id) =>
  getRequest(API.MOVIE_DETAILS + `${id}`);
