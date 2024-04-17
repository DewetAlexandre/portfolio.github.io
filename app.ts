function handleTabChange(tab: string) {
    // Masquer tous les éléments de contenu
    const contentElements = document.getElementsByName('contenu');
    const tabs = document.getElementsByName('navTab');

    contentElements.forEach(element => {
        element.classList.add('md:hidden');
    });

    // Afficher uniquement le contenu de l'onglet sélectionné
    const selectedContent = document.getElementById(tab);
    if (selectedContent) {
        selectedContent.classList.remove('md:hidden');
    }

    tabs.forEach(tab => {
        tab.classList.remove('border-green-500', 'font-semibold', 'border-b-4');
    });

    const selectedTab = document.getElementById(tab + 'Tab');
    if (selectedTab) {
        selectedTab.classList.add('border-green-500', 'font-semibold', 'border-b-4');
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
    if (body) {
        body.classList.toggle('dark');
    }
}

// Appel de la fonction pour basculer le thème lors d'un événement
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}


// Fonction pour afficher la popup avec l'image en grand
function showImagePopup(imageUrl: string) {
    const imagePopup = document.getElementById('imagePopup');
    if (imagePopup) {
        const popupImage = imagePopup.querySelector('img');
        // Mettre l'URL de l'image dans la source de l'élément img
        if (popupImage) {
            popupImage.src = imageUrl;

            // Afficher la popup
            imagePopup.classList.remove('hidden');
        }

    }


}

// Fonction pour ouvrir la popup avec l'image agrandie
function openImagePopup(imageSrc: any) {
    // Récupérer l'élément de la popup
    const imagePopup = document.getElementById('imagePopup');
    // Récupérer l'élément de l'image dans la popup
    const popupImage = document.getElementById('popupImage');

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Définir la source de l'image dans la popup
    if (popupImage instanceof HTMLImageElement && imagePopup) {
        // Définir la source de l'image dans la popup
        popupImage.src = imageSrc;
        imagePopup.classList.remove('hidden');
    }

    if (nextBtn && prevBtn) {
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
    }
}

// Fonction pour fermer la popup
function closeImagePopup() {
    // Récupérer l'élément de la popup
    const imagePopup = document.getElementById('imagePopup');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    // Masquer la popup
    if (imagePopup && prevBtn && nextBtn) {
        imagePopup.classList.add('hidden');
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Récupérer toutes les images avec name="image"
    const images = document.getElementsByName('image');

    // Parcourir chaque image et ajouter un événement de clic
    images.forEach((image) => {
        image.addEventListener('click', () => {
            // Récupérer l'attribut 'src' de l'image cliquée
            const imageSrc = image.getAttribute('src');
            // Ouvrir la popup avec l'image agrandie
            openImagePopup(imageSrc);
        });
    });

    // Ajouter un événement de clic au bouton de fermeture de la popup
    const closePopupBtn = document.getElementById('closePopup');
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            // Fermer la popup lorsque le bouton est cliqué
            closeImagePopup();
        });
    }
});

