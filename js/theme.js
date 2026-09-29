function setTheme(theme) {

    document.body.classList.remove(
        "light-theme",
        "dark-theme",
        "high-contrast"
    );

    if (theme === "light") {
        document.body.classList.add("light-theme");
    }

    if (theme === "dark") {
        document.body.classList.add("dark-theme");
    }

    if (theme === "contrast") {
        document.body.classList.add("high-contrast");
    }

    localStorage.setItem("theme", theme);
}


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme && savedTheme !== "default") {
    setTheme(savedTheme);
}
