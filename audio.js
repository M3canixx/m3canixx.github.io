document.addEventListener('DOMContentLoaded', () => {

    // Gestion de l'audio de fond et du contrôle du volume
    const audio = document.getElementById('background-music');
    const volumeControl = document.getElementById('volume-control');
    let first = true;

    window.addEventListener('mousedown', () => {
        if (first) {
            first = false;
            audio.play();
        }
    });

    audio.volume = volumeControl.value;

    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
    });

    function playAudio() {
        audio.play().catch(error => console.error('Autoplay failed:', error));
        document.removeEventListener('scroll', playAudio);
    }

    document.addEventListener('scroll', playAudio);

        // Vérifie s'il y a une position de musique stockée
        const savedTime = localStorage.getItem('musicTime');

        if (savedTime) {
            // Si une position est stockée, la définir et lire la musique à partir de là
            audio.currentTime = savedTime;
        }
    
        // Jouer la musique après avoir défini la position
        audio.play();
});
