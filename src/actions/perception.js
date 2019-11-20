import { SET_PERCEPTION, SET_PERCEPTION_ERROR } from '../constants/actionTypes';

export const setPerception = (fieldName, value) => async dispatch => {
  try {
    dispatch({ type: SET_PERCEPTION, data: { fieldName, value } });
  } catch (error) {
    dispatch({ type: SET_PERCEPTION_ERROR, error });
  }
};
