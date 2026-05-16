function showSection(sectionId){
    // Déclarer les variables pour le système de filtres de compétences et qualités
    const hard = document.getElementById('hardskills');
    const soft = document.getElementById('softskills');
    const hardButton = document.getElementById('bouton-hardskills');
    const softButton = document.getElementById('bouton-softskills');

    // Déclarer les variables pour le système de filtres de projets informatiques
    const webdev = document.getElementById('web-dev');
    const webdesign = document.getElementById('web-design');
    const appdev = document.getElementById('app-dev');
    const webdevButton = document.getElementById('bouton-webdev');
    const webdesignButton = document.getElementById('bouton-webdesign');
    const appdevButton = document.getElementById('bouton-appdev');

    // Utiliser ces variables pour le système de filtres de compétences et qualités
    if(sectionId === 'hardskills'){
        hard.style.display = 'flex';
        soft.style.display = 'none';
        hardButton.style.color = '#007bff';
        softButton.style.color = '';
    } else if(sectionId === 'softskills'){
        hard.style.display = 'none';
        soft.style.display = 'flex';
        hardButton.style.color = '';
        softButton.style.color = '#007bff';
    }
    // Utiliser les variables pour le système de filtres de projets informatiques
    else if(sectionId === 'web-dev'){
        webdev.style.display = 'flex';
        webdesign.style.display = 'none';
        appdev.style.display = 'none';
        webdevButton.style.color = '#007bff';
        webdesignButton.style.color = '';
        appdevButton.style.color = '';
    } else if(sectionId === 'web-design'){
        webdev.style.display = 'none';
        webdesign.style.display = 'flex';
        appdev.style.display = 'none';
        webdevButton.style.color = '';
        webdesignButton.style.color = '#007bff';
        appdevButton.style.color = '';
    } else if(sectionId === 'app-dev'){
        webdev.style.display = 'none';
        webdesign.style.display = 'none';
        appdev.style.display = 'flex';
        webdevButton.style.color = '';
        webdesignButton.style.color = '';
        appdevButton.style.color = '#007bff';
    }
}