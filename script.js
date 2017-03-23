window.onload = function () {
  var square = document.getElementsByTagName('square')[0];
};

window.deviceorientation = function (e) {
  console.log(e);
  square.innerText = "Haldo.";
};
