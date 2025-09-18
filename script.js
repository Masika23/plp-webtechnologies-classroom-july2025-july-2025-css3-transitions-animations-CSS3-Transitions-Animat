// Function demonstrating scope, parameters, and return values
function bakeryMessage(name) {
  let message = `Welcome to Minnie's Bakery, ${name}! Enjoy our delicious treats.`;
  return message;
}

// Event listener for button click
document.getElementById("animateBtn").addEventListener("click", function() {
  let box = document.getElementById("cakeBox");

  // Show box if hidden
  box.style.display = "block";

  // Add bounce animation
  box.style.animation = "bounceCake 1s ease-in-out infinite";

  // Display a welcome message in the console
  console.log(bakeryMessage("dear customer"));
});