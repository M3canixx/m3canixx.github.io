function switchLanguage() {
    // Stocker la position actuelle de la musique
    const audio = document.getElementById('background-music');
    localStorage.setItem('musicTime', audio.currentTime);

    // Vérifie l'URL actuelle et redirige vers la page correspondante
    const currentUrl = window.location.href;
    
    // Si c'est la version française, redirige vers la version anglaise
    if (currentUrl.includes('index.html')) {
        window.location.href = 'index_en.html';
    } 
    // Si c'est la version anglaise, redirige vers la version française
    else if (currentUrl.includes('index_en.html')) {
        window.location.href = 'index.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');

    // Si 'lang' est 'en', redirige vers la version anglaise
    if (lang === 'fr') {
        window.location.href = 'index_fr.html';
    }
    if (lang === 'en') {
        window.location.href = 'index_en.html';
    }
});

