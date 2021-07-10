/*jshint esversion: 6 */

/* Function called to confirm that message has been submitted to sender and gives an alert*/
/* Data is not recorded anywhere or populated*/
function submitForm(){
  // Define variables
  let name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementsByClassName("large").value;
  // conditional statement to return alert
  if( name ==='' || email ==='' || message ===''){
    alert("OOPS!! Please fill in all fields and try sending again...!");
    console.log('Message submit failure'); //records failure message to console
    return false;
  }else{
    alert("Thank you for emailing me, I will respond as soon as I can!");
    console.log('Message submit success'); //records success message to console
    return true;
  }
}

