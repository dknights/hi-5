

Pebble.addEventListener("appmessage",
  function(e) {
    console.log("Received message: " + e.payload);
    


var req = new XMLHttpRequest();
  req.open('POST', 'http://hi-5.herokuapp.com/connect/dik', true);
  req.onload = function(e) {
    console.log("Message sent");
  }
  req.send(null);


  } 
);