
function check(){
    // document.forms["form-name"].["input-name"].value 
    //gets the input value from the input
    var name = document.forms["feedback-form"]["name"].value;
    var email = document.forms["feedback-form"]["email"].value;
    if(name == "" && email == ""){
        alert("Please enter your name and your email.");
    } else if(name == ""){
        alert("Please enter your name.");
    } else if(email ==""){
        alert("Please enter your email.");
    } else{
        alert("Thank you for your submission.")
    }
}

function featureFunction() {
    alert("This feature is still under development.");
  }
  

function newsletterFunction(){
    var field = document.forms["Subscription"]["email"].value;
    if(field==""){
      alert("Please fill out the field");
    }
    else{
      alert("Thank you for subscribing to our newsletter.");
    }
  }
  
  
  