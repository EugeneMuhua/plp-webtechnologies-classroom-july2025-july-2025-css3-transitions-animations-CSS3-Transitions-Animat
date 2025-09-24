// Part 2: Functions with Parameters & Scope

function highlightButton(btn) {
  btn.style.backgroundColor = "#ffcc00";
}

function flipCard() {
  const card = document.querySelector(".card");
  card.classList.toggle("flipped");
}

function openModal() {
  const modal = document.getElementById("infoModal");
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("infoModal");
  modal.classList.add("hidden");
}

// Example of scope
let globalMessage = "Welcome to Mobotech";

function showMessage(name) {
  let localGreeting = `Hello, ${name}!`;
  return `${localGreeting} ${globalMessage}`;
}

console.log(showMessage("Eugene")); // Demonstrates local vs global scope