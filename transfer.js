// Get the elements by their IDs
const transferBtn = document.getElementById("Transfer");
const creditAccountBtn = document.getElementById("creditAccount");
const messageText = document.getElementById("message");

// Add click event listener to the transfer button
transferBtn.addEventListener("click", transferFunds);

// Function to handle the transfer of funds
function transferFunds() {
  // Prompt the user for account details
  const accountName = prompt("Enter the account name:");
  const accountNumber = prompt("Enter the account number:");
  const bank = prompt("Enter the bank:");

  // Prompt the user for the transfer amount
  const transferAmount = prompt("Enter the amount to transfer:");
  const amount = parseFloat(transferAmount);

  // Check if the transfer amount is valid
  if (isNaN(amount) || amount <= 0) {
    messageText.textContent = "Invalid transfer amount. Please enter a valid positive number.";
    return;
  }

  // Retrieve the current balance from the balance span element
  const balanceElement = document.getElementById("balance");
  const balance = parseFloat(balanceElement.textContent.replace("₦", ""));

  // Check if the balance is sufficient for the transfer
  if (amount > balance) {
    messageText.textContent = "Insufficient funds. The transfer amount exceeds your current balance.";
    return;
  }

  // Deduct the transfer amount from the balance
  const newBalance = balance - amount;

  // Update the balance span element to display the new balance
  balanceElement.textContent = "₦" + newBalance.toFixed(2);

  // Display a message with the entered details and transfer amount
  messageText.textContent = `Transferring ₦${amount.toFixed(2)} to ${accountName} (${accountNumber}) at ${bank}...`;

  //Disable the creditAccount button
  creditAccountBtn.disabled = true;
  // Simulate the transfer process
  setTimeout(() => {
    // Update the message after the transfer is complete
    messageText.textContent = "Funds transferred successfully!";
    // Enable the creditAccount button after the transfer is complete
    creditAccountBtn.disabled = false;

  }, 5000); // Simulating a 5-second delay
}
