'use strict'

// #js-bork-amount-input - Receive # from 1 to 50;
// #js-borker-button - Prompts api call.
// .js-borker - Append image to this class.

//Retrieves dog images from API.
function getDogImages() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(jsonData => {
      extractData(jsonData);
    })
    .catch(error => console.log(error));
};

//Extracts data from fetched JSON.
extractData();

createTemplate();