const BASE_URL = 'https://restcountries.com/v3.1/name/';

// export default class CountriesApiService {
//   constructor() {
//     this.searchQuery = '';
//   }
// }

function fetchCountries(name) {
  const url = `${BASE_URL}${name}?fields=name,capital,population,flags,languages`;
  console.log(url);
  return fetch(url).then(response => response.json());
}

export default { fetchCountries };
