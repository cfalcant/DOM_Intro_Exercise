console.log("Javascript is alive!");

// function newGreeting (string) {
//   document.getElementById("greeting").innerHTML = "Hello, World!";
// } newGreeting ()

$(document).ready(function() {
 $('#greeting').text("Hello, World!");

$('li').css('background-color', 'yellow');

var newImg = $('<img>');
newImg.attr({'src': `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`})
.appendTo('#greeting');

$('li').click(function(){
$('li').removeClass('selected');
$(this).addClass('selected');
});

})
// var bold = document.querySelectorAll("li");
// for (i = 0; i < bold.length; i++) {
//   bold[i].addEventListener("click", function() {
//     if (bold[i].className === "selected")
//     })
// }
// document.appendChild(addEventListener())
// }
//
// function newColor () {
//   let targets = document.querySelectorAll("li");
//    for (let i = 0; i < targets.length; i++) {
//      targets[i].style.backgroundColor = "yellow";
//    }
//  }
// newColor ()
//
//   let image = document.createElement("img");
//   image.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
//   document.getElementById("greeting").appendChild(image);
//<img src="./images/honey.jpeg" height="60" width="60" alt="beer">
// function addingClass () {
