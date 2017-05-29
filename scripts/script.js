var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rpi-25.jpg') {
      myImage.setAttribute ('src','images/rpi-4.jpg');
    } else {
      myImage.setAttribute ('src','images/rpi-25.jpg');
    }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello from RPI, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello from RPI, ' + myName;
}
