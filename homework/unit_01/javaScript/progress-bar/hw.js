// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue) {
  // document.getElementById('numeric-display').textContent = timerValue;
  var numericDisplay = document.getElementById('numeric-display');
    numericDisplay.textContent = timerValue;
  if (timerValue <= 10) {
      numericDisplay.style.color = 'red';
      var newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);
      numericDisplay.style.fontSize = newSize + 'em';
    }
  },

  
  drawProgressBars: function(timerValue){
    var timeElapsed = 100 - timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + '%';
  },
  
  drawLitFuses: function(timerValue){
    var timeElapsed = timerValue;
    var timeRemaining = 100 - timerValue;
    document.getElementsByClassName('unburnt')[0].style.width = (timeElapsed - 2) + '%';
    document.getElementsByClassName('burnt')[0].style.width = (timeRemaining) + '%';
  },
  
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};
