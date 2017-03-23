window.onload = function () {
  var square = document.getElementsByTagName('square')[0];
};

window.addEventListener("deviceorientation", handleOrientation, true);

var handleOrientation = function () {
  square.innerText = "Haldo.";
};
