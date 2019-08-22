/* global $ */

'use strict'

// .js-bork-results - Append images to this class.

//Listener for the form submit button.
function handleBorkRequest() {
  $('#js-borker-form').submit( function(event) {
    event.preventDefault();
    // console.log('borker-button firing');
    let borkAmount = $('#js-bork-amount-input').val();
    borkAmount = borkValidator(borkAmount);
    console.log(borkAmount);
    // console.log(borkAmount);
    getBorkRepo(borkAmount);
    console.log('borker-button complete!');
  });
}

//Validates the borkAmount and changes value if it doesn't match app specs.
function borkValidator(borkNum) {
  if (borkNum > 50) { borkNum = 50; }
  if (borkNum < 1 || !borkNum ) { borkNum = 1; }
  return borkNum;
}

/**
 * Queries Dog API for bork objects containing image urls in 'message' key.
 * @param {number} num - Number of images passed from input. 
 */
function getBorkRepo(num = 3) {
  const query = `${num}q=Access-Control-Allow-Origin=*`;

  fetch(`https://dog.ceo/api/breeds/image/random/${query}`)
    .then(response => response.json())
    .then(jsonData => {
      borkTemplate(jsonData);
    })
    .catch(error => console.log(error));
}

/**
 * Called in getBorkRepo to build templates for each bork image.
 * @param {json} jsonData - Passed in fromgetBorkRepo
 */
function borkTemplate(jsonData) {
  let borkArray = jsonData.message;
  $('#js-bork-results').empty();
  // console.log(borkArray);
  borkArray.forEach(image => {
    $('#js-bork-results').append(
      `<img src="${image}" class="bork-img">`
    );
  });
}

function eventHandler() {
  handleBorkRequest();
}

$(eventHandler);