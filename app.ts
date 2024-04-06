function handleTabChange(tab: string) {
    // Masquer tous les éléments de contenu
    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach(element => {
        element.classList.add('hidden');
    });

    // Afficher uniquement le contenu de l'onglet sélectionné
    const selectedContent = document.getElementById(`${tab}Content`);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }

    // Retirer la classe 'selected' de tous les boutons
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.classList.remove('selected');
    });

    // Ajouter la classe 'selected' au bouton sélectionné
    const selectedBtn = document.getElementById(`${tab}Btn`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
}
