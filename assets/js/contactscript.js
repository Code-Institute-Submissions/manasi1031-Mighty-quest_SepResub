/*jshint esversion: 6 */

/* Function called to confirm that message has been submitted to sender and gives an alert*/
/* Data is not recorded anywhere or populated*/
function submitForm(event){
  // prevent default
  event.preventDefault();
  // Define variables
  let name = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementsByClassName("large").value;
  // conditional statement to return alert
  if( name ==='' || email ==='' || message ===''){
    alert("OOPS!! Please fill in all fields and try sending again...!");
    return false;
  }else{
    alert("Thank you for emailing me, I will respond as soon as I can!");
    return true;
  }
}

// event listner to invoke function of form submit
document.getElementById("submit-button").addEventListener("click", submitForm);