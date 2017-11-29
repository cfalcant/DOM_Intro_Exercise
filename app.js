console.log("Javascript is alive!");

function newGreeting (string) {
  document.getElementById("greeting").innerHTML = "Hello, World!";
} newGreeting ()

// function newColor () {
//     var back = document.getElementsByTagName("li")

function newColor () {
  let targets = document.querySelectorAll("li");
   for (let i = 0; i < targets.length; i++) {
     targets[i].style.backgroundColor = "yellow";
   }
 }
newColor ()


  let image = document.createElement("img");
  image.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  document.getElementById("greeting").appendChild(image);
