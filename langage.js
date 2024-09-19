function switchLanguage() {
    // Stocker la position actuelle de la musique
    const audio = document.getElementById('background-music');
    localStorage.setItem('musicTime', audio.currentTime);

    // Vérifie l'URL actuelle et redirige vers la page correspondante
    const currentUrl = window.location.href;
    
    // Si c'est la version française, redirige vers la version anglaise
    if (not(currentUrl.includes('index_en.html'))) {
        window.location.href = 'index_en.html';
    } 
    // Si c'est la version anglaise, redirige vers la version française
    else if (currentUrl.includes('index_en.html')) {
        window.location.href = 'index.html';
    }
}

