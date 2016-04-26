// First time the page loads
showTime();

// Consider various browsers
var timeElement = document.getElementById("newtime");
if (timeElement.addEventListener) {
  // IE9, Chrome, Safari, Opera
  timeElement.addEventListener("mousewheel", MouseWheelHandler, false);
  // Firefox
  timeElement.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
// IE 6/7/8
else timeElement.attachEvent("onmousewheel", MouseWheelHandler);

var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
 
if (document.attachEvent) //if IE (and Opera depending on user setting)
    document.attachEvent("on"+mousewheelevt, scrollSelectOption);
else if (document.addEventListener) //WC3 browsers
    document.addEventListener(mousewheelevt, scrollSelectOption, false);

setInterval(showTime, 1000); //renew the timer