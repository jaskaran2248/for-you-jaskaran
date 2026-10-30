// (a) DOM functions: getElementById, textContent, style, hidden, createElement, appendChild
const domText = document.getElementById("dom-text");

document.getElementById("change-text").addEventListener("click", function () {
  domText.textContent = "Thanks for visiting Brew & Bloom Cafe!";
});

document.getElementById("change-color").addEventListener("click", function () {
  domText.style.backgroundColor = "#e4c29f";
  domText.style.color = "#432713";
});

document.getElementById("toggle-text").addEventListener("click", function () {
  domText.hidden = !domText.hidden;
});

document.getElementById("add-item").addEventListener("click", function () {
  const item = document.createElement("li");
  item.textContent = "Fresh coffee, made with care!";
  document.getElementById("new-items").appendChild(item);
});

// Simple cafe menu interaction
let cartCount = 0;
document.querySelectorAll(".add-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    cartCount++;
    document.getElementById("cart-message").textContent = "Items added to cart: " + cartCount;
  });
});

// (b) onmousemove and onmouseover events
const mouseBox = document.getElementById("mouse-box");
const mouseStatus = document.getElementById("mouse-status");

mouseBox.onmousemove = function () {
  mouseStatus.textContent = "Event: Mouse is moving inside the box.";
};

mouseBox.onmouseover = function () {
  mouseBox.classList.add("active");
  mouseStatus.textContent = "Event: Mouse is over the box.";
};

mouseBox.onmouseout = function () {
  mouseBox.classList.remove("active");
  mouseStatus.textContent = "Event: Mouse left the box.";
};

// (c) Click and double-click on the same Hello button
const helloButton = document.getElementById("hello-button");
const helloMessage = document.getElementById("hello-message");

helloButton.addEventListener("click", function () {
  helloMessage.textContent = "welcome to scripting";
});

helloButton.addEventListener("dblclick", function () {
  helloMessage.textContent = "Thank you for using scripting";
});
