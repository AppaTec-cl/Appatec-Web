function downloadInstaller() {
    window.location.href = 'path/to/your/installer.exe';
}

function downloadUserManual() {
    window.location.href = 'path/to/your/user-manual.pdf';
}

function downloadInstallationManual() {
    window.location.href = 'path/to/your/installation-manual.pdf';
}

function updateThemeImages() {
    var theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Oscuro' : 'Claro';
    document.getElementById('logo').src = theme === 'Oscuro' ? 'img/AppaTecLogoOscuro1-4.png' : 'img/AppaTecLogoOscuro1-4.png';
    document.querySelector('.main-header').style.backgroundImage = theme === 'Oscuro' ? 'url(img/AppaTecLogoClaro1-2.png)' : 'url(img/AppaTecFondoOscuro1-3.png)';
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeImages);
document.addEventListener('DOMContentLoaded', updateThemeImages);
