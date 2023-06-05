// Event listener function for the "withdraw" button
function withdrawHandler() {
    let amount = prompt("Enter the amount to withdraw:");

    //check if the amount is null and not an empty string.
    if(amount !== null && amount !== " "){
        let balanceElement = document.getElementById("balance");
         //Get account details from local storage
         const acc = JSON.parse(localStorage.getItem("accountDetails"));

         //Parses the entered amount and the current balance as floats.
         let balance = parseFloat(balanceElement.textContent.replace("₦", ""));
         let withdrawalAmount = parseFloat(amount);

         // Verifies that the withdrawal amount is a valid positive number.
         if(!isNaN(withdrawalAmount) && withdrawalAmount > 0){
            // Verifies if the withdrawal amount is less than or equal to the current balance.
      if(withdrawalAmount <= balance){
        // Deducts the withdrawal amount from the balance.
        balance -= withdrawalAmount;
         // Updates the balance span element to display the new balance with 2 decimal places.
         balanceElement.textContent = "₦" + balance.toFixed(2);
         document.getElementById("message").textContent =  "Withdrawal successful. ₦" + withdrawalAmount.toFixed(2) + " has been debited from your account.";

            // Store the updated balance in local storage
            localStorage.setItem("balance", balance.toFixed(2));

      }else{
        document.getElementById("message").textContent = "Insufficient balance. The withdrawal amount exceeds your current balance.";
      }

      }else{
        document.getElementById("message").textContent =  "Invalid amount entered. Please enter a valid positive number.";
      }
    }else{
        document.getElementById("message").textContent =  "No amount entered. Withdrawal cancelled.";
    }
}
// Add event listener to the "withdraw" button
document.getElementById("withdraw").addEventListener("click", withdrawHandler);