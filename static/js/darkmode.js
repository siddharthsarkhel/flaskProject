let darkMode = localStorage.getItem("darkMode");
console.log('he');
const darkModeToggle = document.querySelector("#darky");
const enableDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});