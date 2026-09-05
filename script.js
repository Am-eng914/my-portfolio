// Set current year in the footer automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle dark mode when the button is clicked
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Toggle Light Mode";
    } else {
        themeBtn.textContent = "Toggle Dark Mode";
    }
});
