document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez le conteneur de la barre de navigation
    const navContainer = document.querySelector('nav .container');

    // Créez les nouveaux onglets
    const newTabs = document.createElement('div');
    newTabs.classList.add('new-tabs');
    newTabs.innerHTML = `
        <div>Professionnelles</div>
        <div>Projets réalisés</div>
        <div>Engagements bénévoles</div>
    `;

    // Ajoutez les nouveaux onglets à la barre de navigation
    navContainer.appendChild(newTabs);

    // Cachez les nouveaux onglets par défaut
    newTabs.style.display = 'none';

    // Ajoutez un écouteur d'événement pour afficher les nouveaux onglets lorsque l'élément "Expérience" est survolé
    const experienceLink = document.getElementById('experience-link');
    experienceLink.addEventListener('mouseover', () => {
        newTabs.style.display = 'flex';
    });

    // Ajoutez un écouteur d'événement pour masquer les nouveaux onglets lorsque l'élément "Expérience" n'est pas survolé
    navContainer.addEventListener('mouseleave', () => {
        newTabs.style.display = 'none';
    });
});
