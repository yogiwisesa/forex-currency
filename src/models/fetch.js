const BASE_URL = 'https://api.exchangeratesapi.io';

export default (url) => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}${url}`)
      .then(response => {
        if (!response.ok) {
          reject(`Error: ${response.statusText}`);
        }
        return response;
      })
      .then(response => resolve(response.json()));
  })
}