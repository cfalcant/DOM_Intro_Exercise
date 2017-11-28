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
