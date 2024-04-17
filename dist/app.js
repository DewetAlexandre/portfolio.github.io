"use strict";
function handleTabChange(tab) {
    // Masquer tous les éléments de contenu
    var contentElements = document.getElementsByName('contenu');
    var tabs = document.getElementsByName('navTab');
    contentElements.forEach(function (element) {
        element.classList.add('md:hidden');
    });
    // Afficher uniquement le contenu de l'onglet sélectionné
    var selectedContent = document.getElementById(tab);
    if (selectedContent) {
        selectedContent.classList.remove('md:hidden');
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
// Fonction pour afficher la popup avec l'image en grand
function showImagePopup(imageUrl) {
    var imagePopup = document.getElementById('imagePopup');
    if (imagePopup) {
        var popupImage = imagePopup.querySelector('img');
        // Mettre l'URL de l'image dans la source de l'élément img
        if (popupImage) {
            popupImage.src = imageUrl;
            // Afficher la popup
            imagePopup.classList.remove('hidden');
        }
    }
}
// Fonction pour ouvrir la popup avec l'image agrandie
function openImagePopup(imageSrc) {
    // Récupérer l'élément de la popup
    var imagePopup = document.getElementById('imagePopup');
    // Récupérer l'élément de l'image dans la popup
    var popupImage = document.getElementById('popupImage');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
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
    var imagePopup = document.getElementById('imagePopup');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    // Masquer la popup
    if (imagePopup && prevBtn && nextBtn) {
        imagePopup.classList.add('hidden');
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer toutes les images avec name="image"
    var images = document.getElementsByName('image');
    // Parcourir chaque image et ajouter un événement de clic
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            // Récupérer l'attribut 'src' de l'image cliquée
            var imageSrc = image.getAttribute('src');
            // Ouvrir la popup avec l'image agrandie
            openImagePopup(imageSrc);
        });
    });
    // Ajouter un événement de clic au bouton de fermeture de la popup
    var closePopupBtn = document.getElementById('closePopup');
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', function () {
            // Fermer la popup lorsque le bouton est cliqué
            closeImagePopup();
        });
    }
});
