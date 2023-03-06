'use strict';

// debounce
// контролює частоту викликів функції
// Викликає функцію тільки якщо між подіями буде пауза в N мілісекунд

const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];

const searchInputEl = document.querySelector('.search-input');
const outputError = document.querySelector('.output-error');
const countryCardEl = document.querySelector('.country-card');

const createCountryCard = ({ name, capital, population, area } = {}) => {
  return `<li class="country-card__item"><strong>Країна:</strong> ${name}</li>
     <li class="country-card__item"><strong>Столиця:</strong> ${capital}</li>
     <li class="country-card__item"><strong>Населення:</strong> ${population}</li>
     <li class="country-card__item"><strong>Площа:</strong> ${area}км<sup>2</sup></li>`;
};

const onSearchCountry = (event) => {
  
  const inputValue = event.target.value.toLowerCase().trim();// '' == false || undefined == false

  if(!inputValue){
    outputError.textContent = '';
    countryCardEl.innerHTML = '';
    return;
  }

  const foundedCountry = countries.find(country => country.name.toLowerCase() === inputValue);
  console.log(foundedCountry);

  if(!foundedCountry){
    outputError.textContent = 'Такої країни не знайдено';
    countryCardEl.innerHTML = '';
    return;
  }

  countryCardEl.innerHTML = createCountryCard(foundedCountry);
  outputError.textContent = '';

}


searchInputEl.addEventListener('input', _.debounce(onSearchCountry, 300));