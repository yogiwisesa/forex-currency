import fetch from './fetch';

export const fetchForexRates = (baseCurrency = 'USD') => {
   return new Promise((resolve, reject) => {
    return fetch(`/latest?base=${baseCurrency}`)
      .then(response => resolve(response))
      .catch(error => reject(error));
  })
}