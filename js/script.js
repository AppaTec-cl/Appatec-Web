document.addEventListener('DOMContentLoaded', function() {
    let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);

    const logo = document.getElementById('logo');
    updateLogo(currentTheme);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        currentTheme = event.matches ? 'dark' : 'light';
        document.body.setAttribute('data-theme', currentTheme);
        updateLogo(currentTheme);
    });

    function updateLogo(theme) {
        if (theme === 'dark') {
            logo.src = 'img/AppaTecLogoOscuro1-4.png';
        } else {
            logo.src = 'img/AppaTecLogoClaro1-2.png';
        }
    }

    function applyFade() {
        const heroSectionHeight = document.querySelector('.hero-section').offsetHeight;
        const scrollPosition = window.scrollY;

        const fadePoint = scrollPosition / heroSectionHeight;
        const opacity = Math.min(1, Math.max(0, fadePoint));

        if (currentTheme === 'dark') {
            document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, ${opacity}) 0%, rgba(0, 0, 0, 1) 100%), var(--background-image-dark)`;
        } else {
            document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, ${opacity}) 0%, rgba(255, 255, 255, 1) 100%), var(--background-image-light)`;
        }
    }

    // Aplicar el fade al cargar la página
    applyFade();

    // Aplicar el fade al hacer scroll
    window.addEventListener('scroll', applyFade);
});
