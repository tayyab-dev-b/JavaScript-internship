'use strict';

const countriesContainer = document.querySelector('.countries');

// Reusable function to render country data
function renderCountry(data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1_000_000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(
          data.languages
        )[0]}</p>
        <p class="country__row"><span>💰</span>${Object.values(
          data.currencies
        )[0].name}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

// Main function
function whereIAm(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding (${res.status})`);
      return res.json();
    })
    .then(data => {
      console.log('GEO DATA:', data);

      // If API didn’t return a country, handle it gracefully
      if (!data.country) throw new Error('No country found in geocode data');

      console.log(`You are in ${data.city}, ${data.country}`);

      // Fetch country data
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem getting country (${res.status})`);
      return res.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`${err.message} 💥`);
    });
}


// Test calls:
// whereIAm(52.508, 13.381); // Berlin, Germany
// whereIAm(19.037, 72.873); // Mumbai, India
whereIAm(-33.933, 18.474); // Cape Town, South Africa
