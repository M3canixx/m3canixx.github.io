document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-parallax');
    const navButtons = document.querySelectorAll('.nav-buttons a');
    let currentSection = 0;

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            currentSection = Math.min(sections.length - 1, currentSection + 1);
        } else {
            currentSection = Math.max(0, currentSection - 1);
        }
        scrollToSection(currentSection);
    });

    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
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