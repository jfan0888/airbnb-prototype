import { SET_ATTRIBUTES, SET_ATTRIBUTES_ERROR } from '../constants/actionTypes';

const initialState = {
  error: null,
  data: {
    accomodationTypes: {
      type: 'array',
      value: ['entire'],
    },
    perNightPrice: {
      type: 'range',
      value: [100, 10000],
    },
    daysOfStay: {
      type: 'range',
      value: [1, 30],
    },
    totalBedrooms: {
      type: 'range',
      value: [1, 10],
    },
    houseRules: {
      type: 'array',
      value: ['pet'],
    },
    successfulBooks: {
      type: 'range',
      value: [0, 99999],
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ATTRIBUTES:
      const { fieldName, value } = action.data;
      const newData = state.data;

      newData[fieldName] = { ...newData[fieldName], value };

      return {
        ...state,
        data: newData,
      };

    case SET_ATTRIBUTES_ERROR:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};
