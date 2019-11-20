import { SET_ATTRIBUTES, SET_ATTRIBUTES_ERROR } from '../constants/actionTypes';

export const setAttributes = (fieldName, value) => async dispatch => {
  try {
    dispatch({ type: SET_ATTRIBUTES, data: { fieldName, value } });
  } catch (error) {
    dispatch({ type: SET_ATTRIBUTES_ERROR, error });
  }
};
