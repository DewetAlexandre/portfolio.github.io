function handleTabChange(tab: string) {
    // Masquer tous les éléments de contenu
    const contentElements = document.getElementsByName('contenu');
    const tabs = document.getElementsByName('navTab');

    contentElements.forEach(element => {
        element.classList.add('hidden');
    });

    // Afficher uniquement le contenu de l'onglet sélectionné
    const selectedContent = document.getElementById(tab);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }

    tabs.forEach(tab => {
        tab.classList.remove('border-green-500','font-semibold','border-b-4');
    });

    const selectedTab = document.getElementById(tab+'Tab');
    if (selectedTab) {
        selectedTab.classList.add('border-green-500','font-semibold','border-b-4');
    }
}

//tabs[index].classList.remove('border-green-500','font-semibold','border-b-4')
//tabs[index].classList.add('border-green-500','font-semibold','border-b')
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    

    if (carousel && prevBtn && nextBtn) { // Vérifie si tous les éléments existent
        let currentIndex = 0;
        const slides = document.getElementsByName('projetSlide');
        

        const updateSlideVisibility = () => {
            slides.forEach((slide, index) => {
                if (index === currentIndex) {
                    slide.classList.remove('hidden');
                } else {
                    slide.classList.add('hidden');
                }
            });
        };

        const goToNextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlideVisibility();
        };

        const goToPrevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlideVisibility();
        };

        nextBtn.addEventListener('click', goToNextSlide);
        prevBtn.addEventListener('click', goToPrevSlide);
    } else {
        console.error("Impossible de trouver un ou plusieurs éléments du carousel.");
    }
});

// Fonction pour basculer entre le mode clair et sombre
function toggleDarkMode() {
    const body = document.querySelector('html');
    if(body){
    body.classList.toggle('dark');
    }
}

// Appel de la fonction pour basculer le thème lors d'un événement
const darkModeToggle = document.getElementById('darkModeToggle');
if(darkModeToggle){
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

