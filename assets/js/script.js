var i = 0;
var txt = 'Student | Leader | Creator'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//when the window loads, run this function
window.onload = function(){ 
    typeWriter(); 
  }

//typing.js (you can import)
//https://github.com/mattboldt/typed.js/
