import { SET_PERCEPTION, SET_PERCEPTION_ERROR } from '../constants/actionTypes';

const initialState = {
  error: null,
  data: {
    totalRatingReverage: {
      type: 'range',
      value: [10, 100],
    },
    accuracyRating: {
      type: 'range',
      value: [30, 100],
    },
    checkingInRating: {
      type: 'range',
      value: [30, 100],
    },
    cleanlinessRating: {
      type: 'range',
      value: [30, 100],
    },
    communicationRating: {
      type: 'range',
      value: [30, 100],
    },
    locationRating: {
      type: 'range',
      value: [30, 100],
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PERCEPTION:
      const { fieldName, value } = action.data;
      const newData = state.data;

      newData[fieldName] = { type: 'range', value };

      return {
        ...state,
        data: newData,
      };

    case SET_PERCEPTION_ERROR:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};
