import * as types from './types';
import { fetchForexRates } from '../../models';

export const fetchForexRatesAction = (baseCurrency) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: types.FETCH_FOREX_RATES, payload: {}})
      fetchForexRates(baseCurrency)
        .then(response => {
          dispatch({ type: types.FETCH_FOREX_RATES_SUCCESS, payload: response})
          resolve(response);
        })
        .catch(error => {
          dispatch({ type: types.FETCH_FOREX_RATES_FAIL, payload: error})
          reject(error);
        })
    })
  }
}