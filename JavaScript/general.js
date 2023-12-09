
// Function for newsleeter subscription validation
function newsletterFunction(){
  var field = document.forms["Subscription"]["email"].value;
  if(field==""){
    alert("Please fill out the field");
  }
  else{
    alert("Thank you for subscribing to our newsletter.");
  }
}

//Function for features which are not usbale yet
function featureFunction() {
  alert("This feature is still under development.");
}


let addCart = document.getElementsByClassName("buttoncart");
let wishList = document.getElementsByClassName("buttonwishlist")

//Function for alerting the items being added to cart
function addToCart(){
    alert("You've added the item to your cart.")
}

//Function for alerting teh items being added to wishlist
function addWishList(){
    alert("You've added the item to your wishlist.")
}