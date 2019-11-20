import { SET_THEMES, SET_THEMES_ERROR } from '../constants/actionTypes';

const initialState = {
  error: null,
  data: {
    commentary: {
      type: 'radio',
      value: 'private',
    },
    sortType: {
      type: 'radio',
      value: 'sentiment',
    },
    themeList: { type: 'array', value: [] },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEMES:
      return {
        ...state,
        data: action,
      };

    case SET_THEMES_ERROR:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};
