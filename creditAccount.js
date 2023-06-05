document.addEventListener("DOMContentLoaded", function() {
  //Target the creditAccount button
  let creditButton = document.getElementById("creditAccount");

  //enable the button to prevent further clicks
  creditButton.disabled = false;

  //Add click event listener to the creditAccount button
  creditButton.addEventListener("click", function() {
    //Retrieve the amount to credit
    let amount = prompt("Enter the amount to credit:");

    //Checks if the amount is not null and not an empty string.
    if (amount !== null && amount !== "") {
      //Retrieves the current balance from the balance span element.
      let balanceElement = document.getElementById("balance");
      //get account details from storage
      const acc = JSON.parse(localStorage.getItem("accountDetails"));

      //Parses the entered amount and the current balance as floats.
      let balance = parseFloat(balanceElement.textContent.replace("₦", ""));

      let creditAmount = parseFloat(amount);

      //add credit amount to accDetails Object
      acc.balance = acc.balance + creditAmount;
      //add new acc to local storage
      localStorage.setItem('accountDetails', JSON.stringify(acc));

      //Verifies that the credit amount is a valid positive number.
      if (!isNaN(creditAmount) && creditAmount > 0) {
        balance += creditAmount;

        //Updates the balance span element to display the new balance with 2 decimal places.
        balanceElement.textContent = "₦" + acc.balance.toFixed(2);
        document.getElementById("message").textContent = "Account credited with ₦" + creditAmount.toFixed(2);

        // Store the updated balance in local storage
        localStorage.setItem("balance", balance.toFixed(2));
      } else {
        document.getElementById("message").textContent = "Invalid amount entered. Please enter a positive number.";
      }
    } else {
      document.getElementById("message").textContent = "No amount entered. Credit operation cancelled.";
    }

    //Disable the button after the operation is complete
    creditButton.disabled = true;
  });
});
