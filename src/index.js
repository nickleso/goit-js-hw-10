import './css/styles.css';
// import CountriesApiService from './fetchCountries.js';
import API from './fetchCountries.js';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 1000;

const refs = {
  inputEl: document.querySelector('#search-box'),
  listEl: document.querySelector('.country-list'),
  infoContainerEl: document.querySelector('.country-info'),
};

console.dir(refs.inputEl);
console.log(refs.listEl);
console.log(refs.infoContainerEl);

// const countriesApiService = new CountriesApiService();

const onDebounceSearchCountries = debounce(searchCountries, DEBOUNCE_DELAY);
refs.inputEl.addEventListener('input', onDebounceSearchCountries);

function searchCountries() {
  const searchQuery = refs.inputEl.value;

  API.fetchCountries(searchQuery)
    .then(appendCountriesMarkup)
    .catch(onFetchError);
}

// const countriesMarkup = createCountriesMarkup(countries);

function appendCountriesMarkup(country) {
  refs.infoContainerEl.insertAdjacentHTML(
    'beforeend',
    createCountriesMarkup(country)
  );
}

// markup function
function createCountriesMarkup(country) {
  return country
    .map(
      ({
        flags: { svg },
        name: { official },
        capital,
        population,
        languages,
      }) => {
        return `
      <div class="coutry-info__wrap">
        <img src=${svg} alt="flag" width="60"></img>
        <h2 class="country-info__name">${official}</h2>
        <p class="country-info__descr">
          Capital: <span class="country-info__value">${capital}</span>
        </p>
        <p class="country-info__descr">
          Population: <span class="country-info__value">${population}</span>
        </p>
        <p class="country-info__descr">
          Languages: <span class="country-info__value">${languages}</span>
        </p>
      </div>`;
      }
    )
    .join('');
}

function onFetchError() {
  // body
}
