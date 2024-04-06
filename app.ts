// Définir les fonctions pour gérer le changement d'onglet
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
  
    // Mettre en surbrillance le bouton de l'onglet sélectionné
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
      btn.classList.remove('bg-blue-500');
      btn.classList.remove('text-white');
    });
    const selectedBtn = document.getElementById(`${tab}Btn`);
    if (selectedBtn) {
      selectedBtn.classList.add('bg-blue-500');
      selectedBtn.classList.add('text-white');
    }
  }
  
  // Appel initial pour afficher le contenu de l'onglet "Présentation" par défaut
  handleTabChange('presentation');
  