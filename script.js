// Function to toggle the popup
function togglePopup() {
  const popupOptions = document.getElementById("popupOptions");
  popupOptions.style.display =
    popupOptions.style.display === "block" ? "none" : "block";
}

// Function to navigate to a new page
function navigateTo(url) {
  window.location.href = url;
}

// Close popup if clicked outside
document.addEventListener("click", (event) => {
  const popupContainer = document.querySelector(".popup-container");
  console.log(popupContainer.contains(event.target));
  if (!popupContainer.contains(event.target)) {
    document.getElementById("popupOptions").style.display = "none";
  }
});

  