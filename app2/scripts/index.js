/* global $ */

'use strict'

// .js-borker - Append images to this class.

function handleBorkRequest() {
  $('#js-borker-form').submit( function(event) {
    event.preventDefault();
    // console.log('borker-button firing');
    const borkAmount = $('#js-bork-amount-input').val();
    // console.log(borkAmount);
    console.log(getBorkRepo(borkAmount));
    console.log('borker-button complete!');
  });
}

function getBorkRepo(num = 3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}q=Access-Control-Allow-Origin=*`)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
    })
    .catch(error => console.log(error));
}

function eventHandler() {
  handleBorkRequest();
}

$(eventHandler);