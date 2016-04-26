function scrollSelectOption(e){
  var evt=window.event || e; //equalize event object
  var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta; //check for detail first so Opera uses that instead of wheelDelta
  document.getElementById("wheelvalue").innerHTML=delta; //delta returns +120 when wheel is scrolled up, -120 when down
}

function showTime() {
  document.getElementById("newtime").innerHTML = new Date();
}