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
      borkStatusCheck(jsonData);
    })
    .catch( error => {
      // console.log(error);
    });
}

function borkStatusCheck(borkRepo) {
  if (borkRepo.status === 'error') {
    borkResponseErrorTemplate(borkRepo);
  } else if (borkRepo.status === 'success') {
    borkImageTemplate(borkRepo);
  }
}

function borkResponseErrorTemplate(errorRepo) {
  let errorMessage = errorRepo.message;
  let errorCode = errorRepo.code;
  
  let borkTemplate = `
  <section class="borker-error">
    <h3>BORKING BORK ERROR</h3>
    <span class="error-message">Error Code: ${errorCode}</span>
    <p>There's no such hecking breed of borker!</p>
    </section>
    `;
  borkResults(borkTemplate);
  
  console.log(errorMessage);
}

/**
 * Called in getBorkRepo to build templates for each bork image.
 * @param {json} jsonData - Passed in fromgetBorkRepo
 */
function borkImageTemplate(jsonData) {
  let borkImage = jsonData.message;
  // console.log(borkImage);
  let borkTemplate = `<img src="${borkImage}" class="bork-img">`;
  borkResults(borkTemplate);
}

//Display results in DOM.
function borkResults(results) {
  $('#js-bork-results').html(results);
}

function eventHandler() {
  handleBorkRequest();
}

$(eventHandler);