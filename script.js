var square = document.getElementsByTagName('square')[0];

window.DeviceOrientationEvent = function (e) {
  console.log(e);
  square.innerText = "Haldo.";
};
