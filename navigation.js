document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-parallax');
    const navButtons = document.querySelectorAll('.nav-buttons a');
    let currentSection = 0;
    let isScrolling = false;

    // Fonction pour naviguer entre les sections
    function scrollToSection(index) {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            isScrolling = false;
        }, 500); // Temps pour terminer le scroll
    }

    function updateNavigationButtons() {
        navButtons.forEach(button => {
            const targetId = button.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if ([...sections].indexOf(targetSection) === currentSection) {
                button.classList.add('active'); // Ajoute une classe 'active' pour marquer le bouton actuel
            } else {
                button.classList.remove('active');
            }
        });
    }

    function navigateSections(direction) {
        if (!isScrolling) {
            if (direction === 'next') {
                currentSection = Math.min(sections.length - 1, currentSection + 1);
            } else if (direction === 'prev') {
                currentSection = Math.max(0, currentSection - 1);
            }
            scrollToSection(currentSection);
            updateNavigationButtons(); // Met à jour les boutons de navigation
        }
    }

    // Désactiver le scroll à la molette
    window.addEventListener('wheel', (event) => {
        event.preventDefault(); // Empêche le scroll par défaut
    }, { passive: false });

    // Gestion des clics sur les zones de navigation gauche et droite
    document.querySelector('.previous-zone').addEventListener('click', () => {
        navigateSections('prev');
    });

    document.querySelector('.next-zone').addEventListener('click', () => {
        navigateSections('next');
    });

    // Gestion du clic sur les boutons de navigation en haut
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            currentSection = [...sections].indexOf(targetSection);
            scrollToSection(currentSection);
            updateNavigationButtons(); // Met à jour les boutons de navigation
        });
    });
});
