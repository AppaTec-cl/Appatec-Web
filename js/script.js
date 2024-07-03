document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-dark-mode');
    const iconLight = document.querySelector('.icon-light-mode');
    const iconDark = document.querySelector('.icon-dark-mode');

    // Función para aplicar el tema
    const applyTheme = (theme) => {
        console.log(`Applying theme: ${theme}`);
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            iconLight.style.display = 'inline';
            iconDark.style.display = 'none';
        } else {
            document.body.classList.remove('dark-mode');
            iconLight.style.display = 'none';
            iconDark.style.display = 'inline';
        }
    };

    // Detectar la preferencia de tema del sistema
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(`User prefers dark mode: ${userPrefersDark}`);

    // Aplicar el tema basado en la preferencia almacenada o la preferencia del sistema
    const storedTheme = localStorage.getItem('theme');
    console.log(`Stored theme: ${storedTheme}`);
    if (storedTheme) {
        applyTheme(storedTheme);
    } else if (userPrefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // Listener para cambios en la preferencia de tema del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        console.log(`System theme change detected: ${event.matches ? 'dark' : 'light'}`);
        if (event.matches) {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Listener para el botón de cambio de tema
    toggleButton.addEventListener('click', function() {
        console.log('Toggle button clicked');
        if (document.body.classList.contains('dark-mode')) {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});
