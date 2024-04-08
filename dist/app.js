"use strict";
function handleTabChange(tab) {
    // Masquer tous les éléments de contenu
    var contentElements = document.getElementsByName('contenu');
    var tabs = document.getElementsByName('navTab');
    contentElements.forEach(function (element) {
        element.classList.add('hidden');
    });
    // Afficher uniquement le contenu de l'onglet sélectionné
    var selectedContent = document.getElementById(tab);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }
    tabs.forEach(function (tab) {
        tab.classList.remove('border-green-500', 'font-semibold', 'border-b-4');
    });
    var selectedTab = document.getElementById(tab + 'Tab');
    if (selectedTab) {
        selectedTab.classList.add('border-green-500', 'font-semibold', 'border-b-4');
    }
}
//tabs[index].classList.remove('border-green-500','font-semibold','border-b-4')
//tabs[index].classList.add('border-green-500','font-semibold','border-b')
document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carousel');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    if (carousel && prevBtn && nextBtn) { // Vérifie si tous les éléments existent
        var currentIndex_1 = 0;
        var slides_1 = document.getElementsByName('projetSlide');
        var updateSlideVisibility_1 = function () {
            slides_1.forEach(function (slide, index) {
                if (index === currentIndex_1) {
                    slide.classList.remove('hidden');
                }
                else {
                    slide.classList.add('hidden');
                }
            });
        };
        var goToNextSlide = function () {
            currentIndex_1 = (currentIndex_1 + 1) % slides_1.length;
            updateSlideVisibility_1();
        };
        var goToPrevSlide = function () {
            currentIndex_1 = (currentIndex_1 - 1 + slides_1.length) % slides_1.length;
            updateSlideVisibility_1();
        };
        nextBtn.addEventListener('click', goToNextSlide);
        prevBtn.addEventListener('click', goToPrevSlide);
    }
    else {
        console.error("Impossible de trouver un ou plusieurs éléments du carousel.");
    }
});
// Fonction pour basculer entre le mode clair et sombre
function toggleDarkMode() {
    var body = document.querySelector('html');
    if (body) {
        body.classList.toggle('dark');
    }
}
// Appel de la fonction pour basculer le thème lors d'un événement
var darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}
