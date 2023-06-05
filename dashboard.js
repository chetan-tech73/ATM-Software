//Retrieve user information
const accountDetails = JSON.parse(localStorage.getItem("accountDetails"));
const firstName = accountDetails.firstName;
const accountNumber = accountDetails.accountNumber;

//Display user's first name
const firstNameElement = document.getElementById("firstName");
firstNameElement.textContent = firstName;

//Display user's Account number
const accountNumberElement = document.getElementById("accountNumber");
accountNumberElement.textContent = "Account Number: " + accountNumber;