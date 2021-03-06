window.onload = function () {
  square = document.getElementsByTagName('square')[0];
};

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  square.innerText = Math.round(event.absolute) + "-" + Math.round(event.alpha) + "-" + Math.round(event.beta) + "-" + Math.round(event.gamma);
}

onkeydown = handleOrientation;
