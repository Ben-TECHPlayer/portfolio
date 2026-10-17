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
        hard.style.display = 'grid';
        soft.style.display = 'none';
        hardButton.style.color = '#007bff';
        softButton.style.color = '';
    } else if(sectionId === 'softskills'){
        hard.style.display = 'none';
        soft.style.display = 'grid';
        hardButton.style.color = '';
        softButton.style.color = '#007bff';
    }
    // Utiliser les variables pour le système de filtres de projets informatiques
    else if(sectionId === 'web-dev'){
        webdev.style.display = 'grid';
        webdesign.style.display = 'none';
        appdev.style.display = 'none';
        webdevButton.style.color = '#007bff';
        webdesignButton.style.color = '';
        appdevButton.style.color = '';
    } else if(sectionId === 'web-design'){
        webdev.style.display = 'none';
        webdesign.style.display = 'grid';
        appdev.style.display = 'none';
        webdevButton.style.color = '';
        webdesignButton.style.color = '#007bff';
        appdevButton.style.color = '';
    } else if(sectionId === 'app-dev'){
        webdev.style.display = 'none';
        webdesign.style.display = 'none';
        appdev.style.display = 'grid';
        webdevButton.style.color = '';
        webdesignButton.style.color = '';
        appdevButton.style.color = '#007bff';
    }
}

function defilerConteneur(type, direction) {
    let element = null;

    if (type === 'formations') {
        element = document.querySelector('.panel-formations-scrollable');
    } else if (type === 'competences') {
        // Sélectionner le bloc de compétences actif (hard ou soft)
        const hard = document.querySelector('.hardskills-scrollable');
        const soft = document.querySelector('.softskills-scrollable');
        element = (hard && window.getComputedStyle(hard).display !== 'none') ? hard : soft;
    } else if (type === 'projets') {
        // Sélectionner l'onglet projet actuellement visible
        const sections = ['web-dev', 'web-design', 'app-dev'];
        for (const id of sections) {
            const el = document.getElementById(id);
            if (el && window.getComputedStyle(el).display !== 'none') {
                element = el;
                break;
            }
        }
    } else if (type === 'emplois') {
        element = document.querySelector('.panel-emplois-scrollable');
    }

    if (!element) return;

    // Calculer la largeur d'un enfant pour faire défiler carte par carte
    const premierItem = element.firstElementChild?.firstElementChild || element.firstElementChild;
    const distance = premierItem ? premierItem.offsetWidth + 30 : 350;

    element.scrollBy({
        left: direction * distance,
        behavior: 'smooth'
    });
}

const detailsFormations = {
    'bac-sti2d': {
        titre: 'BAC STI2D',
        ecole: 'Lycée Modeste Leroy',
        periode: '2021-2023',
        contexte: null,
        matieres: null,
        competences: null,
        certifications: null      
    },
    'but-informatique': {
        titre: 'BUT Informatique',
        ecole: 'IUT d\'Orsay',
        periode: '2023-2027',
        contexte: "Cette formation compose plusieurs branches de l'informatique dans laquelle j'ai choisi le parcours A - Réalisations d'applications : conception, développement et validation pour me spécialiser dans le développement informatique.",
        matieres: [
            "Développement web en HTML, CSS, JavaScript, PHP",
            "Programmation orienté objet en C++ et Java",
            "Algorithmes en Java",
            "Gestion de projet",
            "Réseaux sous Linux",
            "Mathématiques(Théorie de graphes, Probabilités, Algèbre linéaire et codage, Méthodes numériques, Mathématiques discrètes)",
            "Management de projet",
            "Bases de données en Oracle SQL et MySQL",
            "Interfaces Humain-Machine",
            "Développement d'application en C# WPF"
        ],
        competences: [
            "PHP", "JavaScript", "Linux", "Android Studio", "Java", "C++", "C# WPF", "MySQL", "SQL Oracle", "Docker", "Kubernetes"
        ],
        certifications: [
            "Certificat LinkedIn Développeur web full-stack",
            "Certificat LinkedIn Designer web",
            "Certificat LinkedIn Développeur d'applications mobiles sous Android"
        ]
    }
}

// --- MODALE FORMATION ---
function ouvrirModaleFormation(cleFormation) {
    const formation = detailsFormations?.[cleFormation];
    const modale = document.getElementById('modale-formation');
    const corps = document.getElementById('corps-modale-formation');

    if (!formation || !modale || !corps) return;

    corps.innerHTML = `
        <h2>${formation.titre}</h2>
        <div class="modale-metas">
            <span class="modale-badge">${formation.ecole}</span>
            <span class="modale-badge">${formation.periode}</span>
        </div>
        <p>${formation.contexte || ''}</p>
        
        ${formation.matieres ? `
            <h4>Modules étudiés :</h4>
            <ul>${formation.matieres.map(m => `<li>${m}</li>`).join('')}</ul>
        ` : ''}

        ${formation.competences ? `
            <h4>Compétences :</h4>
            <div class="modale-metas">
                ${formation.competences.map(c => `<span class="modale-badge" style="background:#f3f4f6; color:#374151;">${c}</span>`).join('')}
            </div>
        ` : ''}

        ${formation.certifications ? `
            <h4>Certifications :</h4>
            <ul>${formation.certifications.map(c => `<li>${c}</li>`).join('')}</ul>
        ` : ''}
    `;

    modale.showModal();
}

const detailsProjets = {
    // --- DÉVELOPPEMENT WEB ---
    'website-bridge': {
        titre: 'Site web sur le jeu de cartes de bridge',
        periode: 'Du 5 septembre 2026 au 15 janvier 2027',
        contexte: "Site web consistant à permettre aux utilisateurs de jouer au jeu de cartes de bridge.",
        competences: ["Vue.js", "TypeScript", "Python", "FastAPI", "Git", "Jira"],
        qualites: ["Autonome", "Sérieux", "Organisé", "Travail en équipe", "Méthodologie agile(SCRUM)"],
        fonctionnalites: [
            "Travail en équipe de 10 personnes avec les méthodes Scrum avec suivi sur Jira et versionnement sur Git",
            "Développement d’interfaces web dynamiques en Vue (TypeScript)",
            "Conception d'APIs REST sous FastAPI (Python) intégrant le calcul de score optimal",
            "Implémentation de services de génération de plans de jeu optimaux et d'explications contextuelles en langage naturel"
        ],
        // liens: {
        //     source: "https://ben-techplayer.github.io/site-jeu-cartes-bridge/",
        //     github: "https://github.com/Ben-TECHPlayer/site-jeu-cartes-bridge/"
        // }
    },
    'site-ecommerce-agence-voyage': {
        titre: 'Site E-commerce : Agence de voyage',
        periode: 'Du 5 septembre 2026 au 15 janvier 2027',
        contexte: "Site web consistant à créer une agence de voyage en ligne.",
        competences: ["Bootstrap", "Django", "Python", "SQLite", "Git"],
        qualites: ["Autonome", "Sérieux", "Organisé"],
        fonctionnalites: [
            "Développement full-stack d'une agence de voyage en ligne en architecture MVT avec catalogue dynamique de voyages",
            "Conception d’une interface responsive et modulaire avec Bootstrap et le système de gabarits Django",
            "Mise en place du système d'authentification utilisateur et d'un panier d'achat persistant basé sur les sessions HTTP"
        ],
        // liens: {
        //     source: "https://ben-techplayer.github.io/site-jeu-cartes-bridge/",
        //     github: "https://github.com/Ben-TECHPlayer/site-jeu-cartes-bridge/"
        // }
    },
    'site-vitrine-mondial-2026': {
        titre: 'Site vitrine spécial Mondial 2026',
        periode: 'Du 13 octobre 2025 au 9 février 2026',
        contexte: "Site vitrine mettant en avant la diversité du football et regroupant les pays qualifiés, afin d'offrir aux supporters un espace dédié pour suivre et soutenir leur nation.",
        competences: ["HTML", "CSS", "JavaScript", "React", "GitHub"],
        qualites: ["Autonome", "Sérieux", "Organisé"],
        fonctionnalites: [
            "Site vitrine monopage",
            "Formulaire interactif destiné aux supporters",
            "Animations dynamiques pour enrichir l'interface utilisateur"
        ],
        liens: {
            source: "https://ben-techplayer.github.io/site-vitrine-mondial-2026/",
            github: "https://github.com/Ben-TECHPlayer/site-vitrine-mondial-2026/"
        }
    },
    'tennis-clash-deck': {
        titre: 'Tennis Clash Deck',
        periode: 'Du 1 décembre 2025 au 9 février 2026',
        contexte: 'Création du site web permettant de générer automatiquement les meilleures combinaisons de lineup en fonction des cartes sélectionnées et de leurs niveaux.',
        competences: ["HTML", "CSS", "JavaScript", "React", "GitHub"],
        qualites: ["Autonome", "Sérieux", "Organisé"],
        fonctionnalites: [
            "Catalogue complet des cartes",
            "Algorithme glouton qui rend la génération de combinaisons fluide",
            "Maintenance régulière du site web sur les annonces dans la page d'accueil"
        ],
        liens: {
            source: "https://ben-techplayer.github.io/tennis-clash-deck/",
            github: "https://github.com/Ben-TECHPlayer/tennis-clash-deck/"
        }
    },

    // --- DESIGN WEB ---
    'maquette-ciup': {
        titre: 'Cité Universitaire de Paris',
        periode: 'Du 3 février au 16 juin 2025',
        contexte: "Conception de maquettes qui illustrent les parcours et les interactions utilisateurs de l'application CIUP.",
        competences: [
            "Figma", "GitLab", "Word", "PowerPoint"
        ],
        qualites: [
            "Autonome", "Sérieux", "Organisé", "Leadership", "Travail d'équipe"
        ],
        fonctionnalites: [
            "Navigation et organisation des écrans",
            "Mise en page responsive et cohérente",
            "Conception d’interfaces utilisateur ergonomiques",
            "Tests utilisateur"
        ],
        liens: {
            source: "https://www.figma.com/proto/twT9DISLzTvupC8coE4ETa/Projet-SAE1256---Maquettes-pr%C3%A9liminaires?node-id=2-2&t=nw7hLmo0yiYseSlF-1/"
        }
    },
    'magic-music': {
        titre: 'Magic Music',
        periode: 'Du 5 au 12 février 2025',
        contexte: "Conception de maquettes qui illustrent les parcours et les interactions utilisateurs de l'application musicale.",
        competences: [
            "Figma", "GitLab", "Word", "PowerPoint"
        ],
        qualites: [
            "Autonome", "Sérieux", "Organisé"
        ],
        fonctionnalites: [
            "Navigation et organisation des écrans",
            "Mise en page responsive et cohérente",
            "Conception d’interfaces utilisateur ergonomiques"
        ],
        liens: {
            source: "https://www.figma.com/proto/46MnTQSRMOFwLcPfeg14wU/TPIHM1?node-id=76-3319&t=bhiOR6DBAo2rZARX-1/"
        }
    },

    // --- DÉVELOPPEMENT D'APPLICATIONS ---
    'app-bridge': {
        titre: 'Application mobile sur le jeu de cartes de bridge',
        periode: 'Du 5 septembre 2026 au 15 janvier 2027',
        contexte: "Application mobile consistant à permettre aux utilisateurs de jouer au jeu de cartes de bridge.",
        competences: ["React Native", "TypeScript", "Python", "FastAPI", "Git", "Jira"],
        qualites: ["Autonome", "Sérieux", "Organisé", "Travail en équipe", "Méthodologie agile(SCRUM)"],
        fonctionnalites: [
            "Travail en équipe de 10 personnes avec les méthodes Scrum avec suivi sur Jira et versionnement sur Git",
            "Développement d’interfaces web dynamiques en React Native (TypeScript)",
            "Conception d'APIs REST sous FastAPI (Python) intégrant le calcul de score optimal",
            "Implémentation de services de génération de plans de jeu optimaux et d'explications contextuelles en langage naturel"
        ],
        // liens: {
        //     source: "https://ben-techplayer.github.io/site-jeu-cartes-bridge/",
        //     github: "https://github.com/Ben-TECHPlayer/site-jeu-cartes-bridge/"
        // }
    },
    'tennis-clash-deck-mobile': {
        titre: 'Tennis Clash Deck (Mobile)',
        periode: 'Du 1 décembre 2025 au 9 février 2026',
        contexte: "Création de l'application mobile permettant de générer automatiquement les meilleures combinaisons de lineup en fonction des cartes sélectionnées et de leurs niveaux.",
        competences: ["TypeScript", "React Native", "GitHub"],
        qualites: ["Autonome", "Sérieux", "Organisé"],
        fonctionnalites: [
            "Catalogue complet des cartes",
            "Algorithme glouton qui rend la génération de combinaisons fluide",
            "Maintenance régulière de l'application mobile sur les annonces dans la page d'accueil"
        ],
        liens: {
            source: "https://github.com/Ben-TECHPlayer/tennis-clash-deck-mobile/releases/tag/v1.0.0/",
            github: "https://github.com/Ben-TECHPlayer/tennis-clash-deck-mobile/"
        }
    },
    'app-ciup': {
        titre: 'Application CIUP',
        periode: 'Du 3 février au 16 juin 2025',
        contexte: "Création d'application de gestion pour la Cité Universitaire de Paris à l’occasion de son centenaire.",
        competences: ["Java", "GitLab", "Word", "PowerPoint"],
        qualites: ["Autonome", "Sérieux", "Organisé", "Leadership", "Travail d'équipe"],
        fonctionnalites: [
            "Recueil de besoins",
            "Conception de maquettes interactives",
            "Programmation orienté objet",
            "Création, gestion et suppression des maisons",
            "Consultation des menus des restos U",
            "Catalogue des maisons disponibles",
            "Inscription etudiant"
        ]
    },
    'app-jo-2024': {
        titre: 'Application JO 2024',
        periode: 'Du 5 février au 17 juin 2024',
        contexte: "Création d'application desktop dédiée à la gestion des Jeux Olympiques de Paris 2024.",
        competences: ["Java", "PERT", "GANTT"],
        qualites: ["Autonome", "Sérieux", "Organisé"],
        fonctionnalites: [
            "Recueil de besoins",
            "Conception de maquettes interactives",
            "Programmation orienté objet",
            "Création, gestion et suppression des équipes et des participants",
            "Gestion des sessions",
            "Mise en place des résultats des épreuves en direct et en temps réel"
        ]
    }
};

// --- MODALE PROJET ---
function ouvrirModaleProjet(cleProjet) {
    const projet = detailsProjets?.[cleProjet];
    const modale = document.getElementById('modale-projet');
    const corps = document.getElementById('corps-modale-projet');

    if (!projet || !modale || !corps) return;

    let liensHtml = '';
    if (projet.liens) {
        liensHtml = `
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2.5rem;">
                ${projet.liens.source ? `<a href="${projet.liens.source}" target="_blank" rel="noopener noreferrer" style="padding: 6px 12px; border-radius: 8px; color: white; background-color: #007BFF; font-weight: 600; text-decoration: none;">Démo</a>` : ''}
                ${projet.liens.github ? `<a href="${projet.liens.github}" target="_blank" rel="noopener noreferrer" style="padding: 6px 12px; border-radius: 8px; color: white; background-color: lime; font-weight: 600; text-decoration: none;">Code</a>` : ''}
            </div>
        `;
    }

    corps.innerHTML = `
        <h2>${projet.titre}</h2>
        <div class="modale-metas">
            <span class="modale-badge">${projet.periode}</span>
        </div>
        <p>${projet.contexte || ''}</p>
        
        ${projet.fonctionnalites ? `
            <h4>Fonctionnalités clés :</h4>
            <ul>${projet.fonctionnalites.map(fc => `<li>${fc}</li>`).join('')}</ul>
        ` : ''}

        ${projet.competences ? `
            <h4>Compétences techniques :</h4>
            <div class="modale-metas">
                ${projet.competences.map(c => `<span class="modale-badge" style="background:#eef2ff; color:#007bff;">${c}</span>`).join('')}
            </div>
        ` : ''}

        ${projet.qualites ? `
            <h4>Qualités :</h4>
            <div class="modale-metas">
                ${projet.qualites.map(q => `<span class="modale-badge" style="background:#f3f4f6; color:#374151;">${q}</span>`).join('')}
            </div>
        ` : ''}

        ${projet.resultats ? `
            <h4>Résultats :</h4>
            <ul>${projet.resultats.map(r => `<li>${r}</li>`).join('')}</ul>
        ` : ''}

        ${liensHtml}
    `;

    modale.showModal();
}

// Dictionnaire contenant les informations complètes destinées au recruteur
const detailsEmplois = {
    'stage-boina': {
        titre: 'Développeur full-stack',
        entreprise: 'BOINA CHAMSOUDINE Entreprise',
        contrat: 'Stage',
        periode: '8 juin 2026 - 17 août 2026',
        description: 'Première expérience professionnelle en informatique au sein d\'une micro-entreprise familiale, centrée sur la conception et le déploiement d\'une plateforme web.',
        missions: [
            'Recueil des besoins utilisateurs et conception des maquettes d\'interface',
            'Développement full-stack de la plateforme de gestion de conférences et formations',
            'Mise en conformité de la sécurité web (protection contre injections et abus)'
        ],
        competences: ['React', 'PHP', 'Stripe', 'JavaScript', 'Sécurité web', 'Figma']
    },
    'cdd-primark': {
        titre: 'Vendeur polyvalent',
        entreprise: 'PRIMARK Val d\'Europe',
        contrat: 'CDD (Job d\'été)',
        periode: 'Août 2025',
        description: 'Expérience en grande distribution textile dans un contexte à fort flux client pendant la période estivale et la rentrée scolaire.',
        missions: [
            'Accueil, orientation et encaissement rapide des clients',
            'Gestion des flux et organisation des cabines d\'essayage',
            'Tenue, réassort et maintien strict des normes du rayon'
        ],
        competences: ['Relation client', 'Gestion du stress', 'Travail en équipe', 'Dynamisme']
    },
    'stage-royale': {
        titre: 'Boulanger-pâtissier',
        entreprise: 'La Royale',
        contrat: 'Stage de découverte',
        periode: 'Décembre 2019',
        description: 'Immersion opérationnelle en période de forte affluence liée aux fêtes de fin d\'année.',
        missions: [
            'Découverte des processus de production artisanale et de vente',
            'Accueil et encaissement de la clientèle',
            'Application stricte des règles d\'hygiène et sécurité alimentaire'
        ],
        competences: ['Rigueur', 'Ponctualité', 'Assiduité']
    }
};

// --- MODALE EMPLOI ---
function ouvrirModaleEmploi(cleEmploi) {
    const emploi = detailsEmplois?.[cleEmploi];
    const modale = document.getElementById('modale-emploi');
    const corps = document.getElementById('corps-modale-emploi');

    if (!emploi || !modale || !corps) return;

    corps.innerHTML = `
        <h2>${emploi.titre}</h2>
        <div class="modale-metas">
            <span class="modale-badge">${emploi.entreprise}</span>
            <span class="modale-badge">${emploi.contrat}</span>
            <span class="modale-badge">${emploi.periode}</span>
        </div>
        <p>${emploi.description || ''}</p>
        
        ${emploi.missions ? `
            <h4>Missions principales :</h4>
            <ul>${emploi.missions.map(m => `<li>${m}</li>`).join('')}</ul>
        ` : ''}

        ${emploi.competences ? `
            <h4>Compétences & qualités mobilisées :</h4>
            <div class="modale-metas">
                ${emploi.competences.map(c => `<span class="modale-badge" style="background:#f3f4f6; color:#374151;">${c}</span>`).join('')}
            </div>
        ` : ''}
    `;

    modale.showModal();
}

// --- GESTION FERMETURE UNIVERSELLE ---
function fermerModales() {
    document.querySelectorAll('dialog.modale').forEach(modale => {
        if (modale.open) modale.close();
    });
}

// Fermeture au clic sur le fond sombre (backdrop)
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'DIALOG' && event.target.classList.contains('modale')) {
        event.target.close();
    }
});