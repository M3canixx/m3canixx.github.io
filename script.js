document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-parallax');
    let currentSection = 0;
    let isScrolling = false;

    function scrollToSection(index) {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            isScrolling = false;
        }, 500); // Temps pour terminer le scroll
    }

    window.addEventListener('wheel', (event) => {
        if (!isScrolling) {
            if (event.deltaY > 0) {
                currentSection = Math.min(sections.length - 1, currentSection + 1);
            } else {
                currentSection = Math.max(0, currentSection - 1);
            }
            scrollToSection(currentSection);
        }
        event.preventDefault(); // Empêche le scroll par défaut
    });
    const audio = document.getElementById('background-music');
    const volumeControl = document.getElementById('volume-control');

    audio.volume = volumeControl.value;

    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
    });

    function playAudio() {
        audio.play().catch(error => console.error('Autoplay failed:', error));
        document.removeEventListener('scroll', playAudio);
    }

    document.addEventListener('scroll', playAudio);
});