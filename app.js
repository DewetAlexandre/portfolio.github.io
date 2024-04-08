// Sélection des éléments de la navbar
var navLinks = document.querySelectorAll('.navbar-link');
// Sélection des contenus dynamiques
var contenus = document.querySelectorAll('.contenu');
// Ajout d'un écouteur d'événement à chaque lien de la navbar
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        // Récupérer l'identifiant du contenu cible à partir de l'attribut data-target
        var targetId = link.getAttribute('data-target');
        // Vérifier si targetId n'est pas nul
        if (targetId) {
            // Appeler la fonction pour changer l'onglet avec l'identifiant du contenu cible
            handleTabChange(targetId);
        }
    });
});
// Fonction pour changer l'onglet
function handleTabChange(tab) {
    // Masquer tous les éléments de contenu
    contenus.forEach(function (contenu) {
        contenu.classList.add('hidden');
    });
    // Afficher uniquement le contenu de l'onglet sélectionné
    var selectedContent = document.getElementById(tab);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }
}
