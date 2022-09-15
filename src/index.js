import './css/styles.css';
import API from './fetchCountries.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  listEl: document.querySelector('.country-list'),
  infoContainerEl: document.querySelector('.country-info'),
};

const onDebounceSearchCountries = debounce(searchCountries, DEBOUNCE_DELAY);
refs.inputEl.addEventListener('input', onDebounceSearchCountries);

// search function
function searchCountries() {
  clearMurkup();
  const searchQuery = refs.inputEl.value;

  API.fetchCountries(searchQuery.trim())
    .then(appendCountriesMarkup)
    .catch(onFetchError);
}

function onFetchError() {
  error => {
    console.log(error);
  };
}

// markup functions
function appendCountriesMarkup(country) {
  console.log(country.length);

  if (country.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.', {
      position: 'center-top',
      fontSize: '14px',
    });
  }

  if (country.length >= 2 && country.length <= 10) {
    refs.listEl.insertAdjacentHTML(
      'beforeend',
      createCountriesListMarkup(country)
    );
  }

  if (country.length < 2) {
    refs.infoContainerEl.insertAdjacentHTML(
      'beforeend',
      createCountriesInfoMarkup(country)
    );
  }
}

function createCountriesListMarkup(country) {
  return country
    .map(({ flags: { svg }, name: { official } }) => {
      return `
      <li class="coutry-list__item">
        <img src=${svg} alt="flag" width="60"></img>
        <h3 class="country-list__descr">${official}</p>
      </li>`;
    })
    .join('');
}

function createCountriesInfoMarkup(country) {
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
        <img src=${svg} alt="flag" width="60"></img>
        <h2 class="country-info__name">${official}</h2>
        <p class="country-info__descr">
          Capital: <span class="country-info__value">${capital}</span>
        </p>
        <p class="country-info__descr">
          Population: <span class="country-info__value">${population}</span>
        </p>
        <p class="country-info__descr">
          Languages: <span class="country-info__value">${languages})</span>
        </p>`;
      }
    )
    .join('');
}

function clearMurkup() {
  refs.infoContainerEl.innerHTML = '';
  refs.listEl.innerHTML = '';
}
