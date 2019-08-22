/* global $ */

'use strict'

// .js-bork-results - Append images to this class.

//Listener for the form submit button.
function handleBorkRequest() {
  $('#js-borker-form').submit( function(event) {
    event.preventDefault();
    // console.log('borker-button firing');
    let borkBreed = $('#js-bork-breed-input').val();
    // console.log(borkBreed);
    getBorkRepo(borkBreed);
    console.log('borker-button complete!');
  });
}

/**
 * Queries Dog API for bork objects containing image urls in 'message' key.
 * @param {number} breed - Number of images passed from input. 
 */
function getBorkRepo(breed) {
  const accessHeader = 'q=Access-Control-Allow-Origin=*';

  fetch(`https://dog.ceo/api/breed/${breed}/images/random/${accessHeader}`)
    .then(response => response.json())
    .then(jsonData => {
      // console.log(jsonData);
      borkTemplate(jsonData);
    })
    .catch(error => {
      // borkResponseErrorTemplate(jsonData)
      console.log('Breed not found.')
    });
}

function borkResponseErrorTemplate() {
  let errorMessage = jsonData.message;
  let errorCode = jsonData.code;
  
  $('#js-bork-results').html(
    `<h3>BORKING BORK ERROR</h3>
    <span class="error-message">Error Code: ${code}</span>
    <p>${borkError}</p>
    `);
}

/**
 * Called in getBorkRepo to build templates for each bork image.
 * @param {json} jsonData - Passed in fromgetBorkRepo
 */
function borkTemplate(jsonData) {
  let borkImage = jsonData.message;
  // console.log(borkImage);
  $('#js-bork-results').html(
    `<img src="${borkImage}" class="bork-img">`
  );
}

function eventHandler() {
  handleBorkRequest();
}

$(eventHandler);