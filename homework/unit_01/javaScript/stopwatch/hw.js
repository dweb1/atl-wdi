// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    // Your Code Here
    this.millisecs += 1;
    if (this.millisecs >= 100) {
      this.millisecs = 0;
      this.secs += 1;
    }
    if (this.secs >= 60) {
      this.secs = 0;
      this.mins += 1;
    };
    console.log(this.secs);
  },
  reset: function(){
    this.millisecs = 0;
    this.secs = 0;
    $('#mins').html($('mins').val()) = 0;
    laps = [];
    ;
  },
  start: function(){
    if (this.isRunning === false) {
      this.isRunning = true;
      this.tickClock();
  };
},
  stop: function(){
    // Your Code Here
    Stopwatch.isRunning = false;
},
  lap: function(){
    // Your Code Here
    if (Stopwatch.isRunning === true) {
      laps.push[$('mins').val(), $('#secs'), $('#millisecs')];
    };
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    // Your Code Here
    $('#millisecs').html(millisecs);
    $('#secs').html(secs);
    $('#mins').html(mins);
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
    var lapListItem = $('<li>');
    $('ol').append(lapListItem);
  },
};

const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
    if ($('#millisecs').val().length < 3) {
      return "0" + $('#millisecs').val();
    } if ($('#secs').val().length < 2) {
      return "0" + $('#secs').val();
    } if ($('#mins').val().length < 2) {
      return "0" + $('#mins').val();
    }
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  handleClickStart: function() {
    // Your Code Here
    if (Stopwatch.isRunning !== true) {
      Stopwatch.start();
      };
  },
  handleClickStopReset: function(){
    // Your Code Here
    if (Stopwatch.isRunning === true) {
      Stopwatch.stop();
    } else if (Stopwatch.isRunning = false) {
      Stopwatch.reset();
      ViewEngine.updateTimeDisplay(0, 0, 0);
      laps = [];
    };
  },
  handleClickLap: function(){
    // Your Code Here
    if (Stopwatch.isRunning === true) {
      Stopwatch.lap();
      $('#lap-list').append(laps);
    };
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  $('#start').on('click', AppController.handleClickStart);
  $('#stop').on('click', AppController.handleClickStopReset);
  $('#lap').on('click', AppController.handleClickLap);
};
