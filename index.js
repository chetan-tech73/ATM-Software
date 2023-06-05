// Get references to the PIN input field, the Enter button, and all the keypad buttons
const pinInput = document.getElementById('pinInput');
const enterButton = document.querySelector('.enter');
const keypadButtons = document.querySelectorAll('.key');

//Add event listeners to the numeric keypad buttons
const numericButtons = document.querySelectorAll('.key:not(.enter)');
numericButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const key = this.textContent;
    pinInput.value += key;
  });
});
 
//Add event listener to the Clear button

const clearButton = document.querySelector('.Clear');
clearButton.addEventListener('click', function() {
  pinInput.value = '';
});

// Add event listener to the Enter button to handle login process
enterButton.addEventListener('click', function(){
   const enteredPin = pinInput.value; 

   // Retrieve account details from local storage
   const storedAccountDetails = JSON.parse(localStorage.getItem('accountDetails'));

   if(storedAccountDetails && storedAccountDetails.PIN === enteredPin){
   //if login successful
   //Redirect to dashboard page
   window.location.href="dashboard.html";
   }else{
    //FAILED LOGIN
    alert('Invalid PIN. Please try again');
   }
   // Clear the PIN input field after login attempt
   pinInput.value= '';
});