let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#darky");
const enableDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    document.getElementById("Nav_bar").className = "navbar navbar-expand-lg navbar-dark bg-dark";
    document.getElementById("table1").className = "table dark-mode";
    var size = Number(document.getElementById("size").innerHTML);
    for(var i=0;i<size;i++){
    document.getElementsByName("upbtn")[i].className = "btn btn-outline-light btn-sm mx-1";
    }
};

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
    document.getElementById("Nav_bar").className = "navbar navbar-expand-lg navbar-light bg-light";
    var element = document.getElementById("table1");
    element.className = element.className.replace(/\bdark-mode\b/g, "");
    var size = Number(document.getElementById("size").innerHTML);
    for(var i=0;i<size;i++){
    document.getElementsByName("upbtn")[i].className = "btn btn-outline-dark btn-sm mx-1";
    }
    
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
