import { SET_THEMES, SET_THEMES_ERROR } from '../constants/actionTypes';

export const setThemes = payload => async dispatch => {
  try {
    dispatch({ type: SET_THEMES, payload });
  } catch (error) {
    dispatch({ type: SET_THEMES_ERROR, error });
  }
};
