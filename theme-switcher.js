document.addEventListener('DOMContentLoaded', () => {
    const themes = document.querySelectorAll(".theme");

    themes.forEach(theme => {
        theme.addEventListener("click", (e) => {
            const selectedTheme = e.target.dataset.theme;
            document.body.setAttribute("data-theme", selectedTheme);
            localStorage.setItem("theme", selectedTheme);
        });
    });

    function getThemeOnLoad() {
        const theme = localStorage.getItem("theme");
        if (theme) {
            document.body.setAttribute("data-theme", theme);
        }
    }

    getThemeOnLoad();

    window.addEventListener('scroll', () => {
        const scrollRatio = window.scrollY / (document.body.offsetHeight - window.innerHeight);
        document.body.style.setProperty('--scroll', scrollRatio);
    }, { passive: true });
});
