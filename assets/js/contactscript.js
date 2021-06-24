/*jshint esversion: 6 */

/* Function called to confirm that message has been submitted to sender and gives an alert*/
function myFunction(){
  // Define variables
  let name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementsByClassName("large").value;
  // conditional statement to return alert
  if( name ==='' || email ==='' || message ===''){
    alert("Please fill in all fields...!!!!!!");
    return false;
  }else{
    alert("Thank you for your feedback.");
    return true;
  }
}