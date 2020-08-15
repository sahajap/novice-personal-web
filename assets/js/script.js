window.onload = function(){ 
    typeWriter(); 
  }
  
  
  var i = 0;
  var txt = 'Hey! My name is Oliver, nice to meet you'; /* The text */
  var speed = 100; /* The speed/duration of the effect in milliseconds */
  var skip = 0; 
  
  
  function typeWriter() {  
    if (i < txt.length) {
      if(txt.charAt(i) == ' '){ 
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, skip);
      }
      else{ 
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
  
    }
  }