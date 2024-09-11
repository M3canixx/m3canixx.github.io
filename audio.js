document.addEventListener('DOMContentLoaded', () => {

    // Gestion de l'audio de fond et du contrôle du volume
    const audio = document.getElementById('background-music');
    const volumeControl = document.getElementById('volume-control');
    let first = true;

    // Lecture de la musique au premier clic
    window.addEventListener('mousedown', () => {
        if (first) {
            first = false;
            audio.play();
        }
    });

    // Définir le volume initial de la musique
    audio.volume = volumeControl.value;

    // Contrôle du volume
    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
    });

    // Fonction pour jouer la musique lors du scroll
    function playAudio() {
        audio.play().catch(error => console.error('Autoplay failed:', error));
        document.removeEventListener('scroll', playAudio);
    }

    document.addEventListener('scroll', playAudio);

    // Vérifie si on arrive sur la page depuis un changement de langue (redirigé)
    const referrer = document.referrer;
    const currentUrl = window.location.href;

    // Si l'utilisateur vient d'une autre page (changement de langue), restaurer la position de la musique
    if (referrer.includes('index') || referrer.includes('index_en')) {
        const savedTime = localStorage.getItem('musicTime');
        if (savedTime) {
            // Restaurer la position de la musique et commencer à jouer
            audio.currentTime = savedTime;
        }
    }

    // Lorsque la page est sur le point d'être fermée, sauvegarder le temps de la musique
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('musicTime', audio.currentTime);
    });

    // Jouer la musique après l'insertion de la position (ou depuis le début si non redirigé)
    audio.play();
});
