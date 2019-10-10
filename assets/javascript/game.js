$(document).ready(function(){
  // Generates random number for Game Total
  var randomNum = Math.floor(Math.random() * 101 + 19);

  $('#random-number').text(randomNum);

  // Generates random number each crystal individually
  var ranNum1 = Math.floor(Math.random() * 11 + 1);
  var ranNum2 = Math.floor(Math.random() * 11 + 1);
  var ranNum3 = Math.floor(Math.random() * 11 + 1);
  var ranNum4 = Math.floor(Math.random() * 11 + 1);

  // Variables 
  var wins = 0;
  var losses = 0;
  var playerTotal = 0;

  $('#number-of-wins').text(wins);
  $('#number-of-losses').text(losses);

  // Tracks wins and losses with a conditional
  // Adds to wins and losses counter
  // Updates DOM to show current Wins/Losses
  // Once Win/Loss screen is reached it resets game
  function winsAndLosses() {
    if (randomNum === playerTotal) {
      wins++;
      $('#number-of-wins').text(wins);
      alert('You Win! (╯°□°)╯︵ ┻━┻');
      reset();
    } else if (randomNum < playerTotal) {
      losses++;
      $('#number-of-losses').text(losses);
      alert('You lost! (╯°□°)╯︵ ┻━┻');
      reset();
    }
  }

  // Sets up event listener for all buttons
  // Adds each button's random number to playerTotal
  // Updates DOM to show current playerTotal
  // Checks the logic of each click against the function called winsAndLosses
  $('#btn1').on('click', function() {
    playerTotal = playerTotal + ranNum1;
    $('#score-counter').text(playerTotal);
    winsAndLosses();
  })
  $('#btn2').on('click', function() {
    playerTotal = playerTotal + ranNum2;
    $('#score-counter').text(playerTotal);
    winsAndLosses();
  })
  $('#btn3').on('click', function() {
    playerTotal = playerTotal + ranNum3;
    $('#score-counter').text(playerTotal);
    winsAndLosses();
  })
  $('#btn4').on('click', function() {
    playerTotal = playerTotal + ranNum4;
    $('#score-counter').text(playerTotal);
    winsAndLosses();
  })

  // Resets Win/Loss counter
  // Resets all random numbers
  // Resets playerTotal
  function reset(){
    randomNum = Math.floor(Math.random() * 101 + 19);
    $('#random-number').text(randomNum);
    ranNum1 = Math.floor(Math.random() * 11 + 1);
    ranNum2 = Math.floor(Math.random() * 11 + 1);
    ranNum3 = Math.floor(Math.random() * 11 + 1);
    ranNum4 = Math.floor(Math.random() * 11 + 1);
    playerTotal = 0;
    $('#score-counter').text(playerTotal);
  }

})
