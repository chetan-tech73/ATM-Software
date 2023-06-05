// Add an event listener to the logout button
const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", logout);

// Function to handle the logout process
function logout() {
  // Clear user session data and authentication tokens
  document.cookie = "sessionToken=; expires=Thu, 01 Jan 197000 U 00:00:TC; path=/;";

  // Redirect the user to the login page
  window.location.href ="index.html";
}
