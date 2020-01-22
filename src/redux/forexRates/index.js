import * as types from './types';

const initialState = {
  forexRates: {
    loading: false,
    loaded: false,
    error: '',
    data: {}
  }
};

export const ACTION_HANDLERS = {

  [types.FETCH_FOREX_RATES]: (state, action) => {
    return {
      ...state,
      forexRates: {
        ...state.forexRates,
        loading: true,
        loaded: false,
        error: '',
      }
    }
  },

  [types.FETCH_FOREX_RATES_SUCCESS]: (state, action) => {
    return {
      ...state,
      forexRates: {
        ...state.forexRates,
        loading: false,
        loaded: true,
        error: '',
        data: action.payload
      }
    }
  },

  [types.FETCH_FOREX_RATES_FAIL]: (state, action) => {
    return {
      ...state,
      forexRates: {
        ...state.forexRates,
        loading: false,
        loaded: false,
        error: action.payload,
      }
    }
  },
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
