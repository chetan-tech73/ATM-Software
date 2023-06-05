const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
        
    // Retrieve user input values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const PIN = document.getElementById("PIN").value;

    //validate PIN length
    if (PIN.length !== 4){
        alert("PIN must be 4 digits");
        return;
    }

    //Generate a random account number
    const accountNumber = generateAccountNumber();

    //store Account details in a data store

    const accountDetails = {
        firstName,
        lastName,
        email,
        PIN,
        accountNumber,
        balance: 0.00
    };

    // Store account details in local storage
    localStorage.setItem("accountDetails", JSON.stringify(accountDetails));

    //Display success message with account details 
    const message = `Account created successfully!\n\n
    
    First Name: ${firstName}\n
    Last Name: ${lastName}\n
    Email: ${email}\n
    Account Number: ${accountNumber}\n
    PIN: ${PIN}`;

    alert(message);

    //Reset the form
    registrationForm.reset();
});

//function to generate a random 10-digits account number that begins with 3
function generateAccountNumber(){
    const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
   return "3" + randomNumber.toString().substring(1);
}