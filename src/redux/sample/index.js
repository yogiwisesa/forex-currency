import * as types from './types';

const initialState = {
  sample: {
    status: '',
    data: {}
  },
  asyncSample: {
    loading: false,
    loaded: false,
    error: '',
    data: {}
  }
};

export const ACTION_HANDLERS = {
  [types.SAMPLE_TYPES]: (state, action) => {
    return {
      ...state,
      sample: {
        status: '',
        data: action.payload
      }
    }
  },

  [types.LOAD_API_SAMPLE]: (state, action) => {
    return {
      ...state,
      asyncSample: {
        ...state.asyncSample,
        loading: true,
        loaded: false,
        error: '',
      }
    }
  },

  [types.LOAD_API_SAMPLE_SUCCESS]: (state, action) => {
    return {
      ...state,
      asyncSample: {
        ...state.asyncSample,
        loading: false,
        loaded: true,
        error: '',
        data: action.payload
      }
    }
  },

  [types.LOAD_API_SAMPLE_FAIL]: (state, action) => {
    return {
      ...state,
      asyncSample: {
        ...state.asyncSample,
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
