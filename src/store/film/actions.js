import {adaptFilmToClient} from "../../utils";

export const ActionType = {
  FETCH_FILM_INFO_SUCCESS: `FETCH_FILM_INFO_SUCCESS`,
  CLEAR_FILM_INFO: `CLEAR_FILM_INFO`
};

export const onFilmInfoFetchSuccess = (filmInfo) => {
  return {
    type: ActionType.FETCH_FILM_INFO_SUCCESS,
    payload: adaptFilmToClient(filmInfo)
  };
};

export const clearFilmInfo = () => {
  return {
    type: ActionType.CLEAR_FILM_INFO,
  };
};

