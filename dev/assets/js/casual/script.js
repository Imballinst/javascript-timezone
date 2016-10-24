// Global variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;

// First time the page loads
showTime();
drawClock();
preloadImage();

// Consider various browsers
var timeElement = document.getElementById("tzlist");
if (timeElement.addEventListener) {
  // IE9, Chrome, Safari, Opera
  timeElement.addEventListener("mousewheel", scrollSelectOption, false);
  // Firefox
  timeElement.addEventListener("DOMMouseScroll", scrollSelectOption, false);
}
// IE 6/7/8
else timeElement.attachEvent("onmousewheel", scrollSelectOption);

setInterval(showTime, 1000); //renew the timer
setInterval(drawClock, 1000); //renew the clock
