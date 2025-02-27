// Set the date we're counting down to
var countDownDate = new Date("Aug 8, 2026 00:00:00").getTime();
// var countDownDate = new Date("Feb 26, 2025 21:05:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for weeks, days, hours, minutes and seconds
  var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7))
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = "ETA: "+ weeks + " WEEKS " + days + " DAYS " + hours + " HOURS "
  + minutes + " MINUTES " + seconds + " SECONDS ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "COMPETITION DAY";
  }
}, 1000);
