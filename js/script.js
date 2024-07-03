document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);

    const logo = document.getElementById('logo');
    updateLogo(currentTheme);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const newTheme = event.matches ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        updateLogo(newTheme);
    });

    function updateLogo(theme) {
        if (theme === 'dark') {
            logo.src = 'img/AppaTecLogoOscuro1-4.png';
        } else {
            logo.src = 'img/AppaTecLogoClaro1-2.png';
        }
    }
});
