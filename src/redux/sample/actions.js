import * as types from './types';
import { sampleAsync } from '../../models/index';

export const SetSampleAction = data => {
  return dispatch => {
    dispatch({
      type: types.SAMPLE_TYPES
    });
  };
};

export const FetchAPISample = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: types.LOAD_API_SAMPLE, payload: {}})
      sampleAsync()
        .then(response => {
          dispatch({ type: types.LOAD_API_SAMPLE_SUCCESS, payload: response})
          resolve(response);
        })
        .catch(error => {
          dispatch({ type: types.LOAD_API_SAMPLE_FAIL, payload: error})
          reject(error);
        })
    })
  }
}