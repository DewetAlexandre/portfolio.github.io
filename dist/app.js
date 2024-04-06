"use strict";
function handleTabChange(tab) {
    // Masquer tous les éléments de contenu
    var contentElements = document.querySelectorAll('.content');
    contentElements.forEach(function (element) {
        element.classList.add('hidden');
    });
    // Afficher uniquement le contenu de l'onglet sélectionné
    var selectedContent = document.getElementById("".concat(tab, "Content"));
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }
    // Retirer la classe 'selected' de tous les boutons
    var btns = document.querySelectorAll('.btn');
    btns.forEach(function (btn) {
        btn.classList.remove('selected');
    });
    // Ajouter la classe 'selected' au bouton sélectionné
    var selectedBtn = document.getElementById("".concat(tab, "Btn"));
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
}
