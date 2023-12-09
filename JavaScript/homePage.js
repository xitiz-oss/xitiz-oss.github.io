// Getting the button from its id from html:
let topbutton = document.getElementById("top");

topbutton.style.display = "none";
// When the user scrolls, trigger the function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.scrollY > 500) { //button appear after 500px
    topbutton.style.display = "block";  //condition met, display
  } else {
    topbutton.style.display = "none";   //condition not met, no display
  }
}

// When the user clicks on the button, scroll to the top of the document
function redirectFunction() {
    window.scrollTo(0, 0);
}

// Function for some features which are not usable yet
function featureFunction() {
    alert("This feature is still under development.");
}

// Function for newsletter subscription validation
function newsletterFunction(){
  var field = document.forms["Subscription"]["email"].value;
  if(field==""){
    alert("Please fill out the field");
  }
  else{
    alert("Thank you for subscribing to our newsletter.");
  }
}



