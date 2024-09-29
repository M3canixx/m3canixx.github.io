let currentLanguage = "fr";  // Langue par défaut

function switchLanguage() {
    currentLanguage = currentLanguage === "fr" ? "en" : "fr";

    // Change le drapeau
    document.getElementById("flag").src = currentLanguage === "fr" ? "data/uk_flag.png" : "data/fr_flag.png";


    // Header Section
    document.getElementById("header-name").textContent = translations[currentLanguage].header.name;
    document.getElementById("header-subtitle").textContent = translations[currentLanguage].header.subtitle;

    // Navigation
    document.getElementById("nav-description").textContent = translations[currentLanguage].header.nav.description;
    document.getElementById("nav-experience").textContent = translations[currentLanguage].header.nav.experience;
    document.getElementById("nav-education").textContent = translations[currentLanguage].header.nav.education;
    document.getElementById("nav-competences").textContent = translations[currentLanguage].header.nav.skills;
    document.getElementById("nav-loisirs").textContent = translations[currentLanguage].header.nav.hobbies;
    document.getElementById("nav-contact").textContent = translations[currentLanguage].header.nav.contact;

    // Description Section - Gérer plusieurs <p>
    const descriptionParagraphs = document.querySelectorAll("#description .content p");
    descriptionParagraphs.forEach((paragraph, index) => {
        paragraph.textContent = translations[currentLanguage].description[index];
    });

    // Experience Section
    const experienceColumns = document.querySelectorAll("#experience .column");
    experienceColumns.forEach((column, index) => {
        const experienceData = translations[currentLanguage].experience[index];

        // Mise à jour du titre
        column.querySelector("h2").textContent = experienceData.title;

        // Mise à jour de la date/lieu
        column.querySelector(".location-date").textContent = experienceData.locationDate;

        // Mise à jour du paragraphe de description
        column.querySelector("p").textContent = experienceData.description;

        // Mise à jour des éléments de la liste <ul>
        const listItems = column.querySelectorAll("ul li");
        listItems.forEach((li, liIndex) => {
            li.textContent = experienceData.details[liIndex];
        });
    });

    // Education Section
    const educationColumns = document.querySelectorAll("#education .column");
    educationColumns.forEach((column, index) => {
        const educationData = translations[currentLanguage].education[index];

        // Mise à jour du titre
        column.querySelector("h2").textContent = educationData.title;

        // Mise à jour de la date/lieu
        column.querySelector(".location-date").textContent = educationData.locationDate;

        // Mise à jour des éléments de la liste <ul>
        const listItems = column.querySelectorAll("ul li");
        listItems.forEach((li, liIndex) => {
            li.innerHTML = educationData.details[liIndex];  // innerHTML pour inclure les balises <a>
        });
    });

    // Skills Section
    const skillsColumns = document.querySelectorAll("#skills .column");
    skillsColumns.forEach((column, index) => {
        const skillsData = translations[currentLanguage].skills[index];

        // Mise à jour du titre
        column.querySelector("h2").textContent = skillsData.title;

        // Mise à jour des éléments de la liste <ul>
        const listItems = column.querySelectorAll("ul li");
        listItems.forEach((li, liIndex) => {
            li.innerHTML = skillsData.items[liIndex];  // innerHTML pour inclure les notes ★
        });
    });

    // Hobbies Section
    const hobbiesColumns = document.querySelectorAll("#hobbies .column");
    hobbiesColumns.forEach((column, index) => {
        const hobbiesData = translations[currentLanguage].hobbies[index];

        // Mise à jour du titre
        column.querySelector("h2").textContent = hobbiesData.title;

        // Mise à jour des éléments de la liste <ul>
        const listItems = column.querySelectorAll("ul li");
        listItems.forEach((li, liIndex) => {
            li.innerHTML = hobbiesData.items[liIndex];  // innerHTML pour inclure les notes ★
        });
    });

    // Contact Section
    // Contact Section
    const contactColumn1 = document.querySelector("#contact .column:first-child");
    const contactColumn2 = document.querySelector("#contact .column:last-child");

    // Mise à jour du contenu de la première colonne
    contactColumn1.querySelector("h2").textContent = translations[currentLanguage].contact.title;
    const contactListItems = contactColumn1.querySelectorAll("ul p");
    contactListItems[0].innerHTML = translations[currentLanguage].contact.email;
    contactListItems[1].innerHTML = translations[currentLanguage].contact.linkedin;
    contactListItems[2].innerHTML = translations[currentLanguage].contact.phone;
    contactListItems[3].innerHTML = translations[currentLanguage].contact.downloadCV;

    // Mise à jour du contenu de la deuxième colonne
    contactColumn2.querySelector("h2").textContent = translations[currentLanguage].contact.messageTitle;
    contactColumn2.querySelector("label[for='name']").textContent = translations[currentLanguage].contact.nameLabel;
    contactColumn2.querySelector("label[for='email']").textContent = translations[currentLanguage].contact.emailLabel;
    contactColumn2.querySelector("label[for='message']").textContent = translations[currentLanguage].contact.messageLabel;
    contactColumn2.querySelector("button[type='submit']").textContent = translations[currentLanguage].contact.sendButton;
}

const translations = {
    en: {
        // Header
        header: {
            name: "BHUIYAN Jahedul",
            subtitle: "Artificial Intelligence Engineer",
            nav: {
                description: "Description",
                experience: "Experience",
                education: "Education",
                skills: "Skills",
                hobbies: "Hobbies",
                contact: "Contact"
            }
        },
        
        // Description Section
        description: [
            "I am an AI engineer from ESME Sudria, Paris, passionate about new technologies and innovation.",
            "My goal is to enhance my skills through diverse and stimulating experiences.",
            "Currently looking for my first full-time job in data, I am ready to tackle new technical challenges and contribute to innovative projects.",
            "Feel free to get in touch! You’ll find my contact information at the end of this interactive journey."
        ],
        
        experience: [
            {
                title: "Final Year Internship - ALTEN",
                locationDate: "Sèvres | January 2023 - July 2023",
                description: "CIFRE PhD project with ALTEN and CentraleSupélec:",
                details: [
                    "Immersive behavioral analysis: Study of human interactions in virtual environments with a focus on deep learning and NLP.",
                    "Research and development: State-of-the-art on transformers in cross-modality.",
                    "Algorithm design: Development in Python with PyTorch for behavioral data analysis on audio, text, and vision.",
                    "Data management: Collection, processing, and creation of a dataset for emotion prediction (valence-arousal).",
                    "Tools and technologies: BitVise, GitHub, Microsoft Azure, Visual Studio Code.",
                    "Skills acquired: Python, NLP, transformers, deep learning, PyTorch, Bash."
                ]
            },
            {
                title: "Study Internship - Wel2Be",
                locationDate: "Rennes | April 2022 – July 2022",
                description: "Development of a tool to recognize signs of consciousness in poultry at slaughterhouses:",
                details: [
                    "Animal welfare: Improving slaughterhouse practices by detecting signs of consciousness.",
                    "Data collection and processing: Recording and labeling videos on-site, with processing via FFmpeg.",
                    "Algorithm design: Development in Python using OpenCV for image analysis and TensorFlow/Keras for deep learning.",
                    "Tools and technologies: GitHub for version control, Visual Studio Code for development.",
                    "Skills acquired: Image analysis, Python, TensorFlow, Keras, OpenCV, image processing."
                ]
            }
        ],
        
        // Education Section
        education: [
            {
                title: "AI Engineering Degree - ESME Sudria",
                locationDate: "Ivry-Sur-Seine | 2019 - 2022",
                details: [
                    'Real-time facial recognition: Development of a facial recognition solution with UI, using Deep Learning, Python, and OpenCV. <a href="https://github.com/M3canixx/face-recognition-cnn" target="_blank" rel="noopener noreferrer">[View Project]</a>',
                    'Facial emotion recognition: Creation of a Deep Learning model to identify emotions from facial expressions, using Python and OpenCV. <a href="https://github.com/M3canixx/Facial-Expression-Recognition-using-VGG" target="_blank" rel="noopener noreferrer">[View Project]</a>',
                    'Spell checker: Tool for detecting spelling errors on social media via Web Scraping, using Selenium in Python and JavaScript. <a href="https://github.com/M3canixx/Le_denonceur_de_dechet-inator" target="_blank" rel="noopener noreferrer">[View Project]</a>',
                    'Pharmaceutical stock management app: Developed in Java to track and manage medicine stock.'
                ]
            },
            {
                title: "International Semester - Prague College",
                locationDate: "Prague | 2020 - 2021",
                details: [
                    'Python game: 3D Tic-Tac-Toe with advanced Python programming.',
                    "Graph theory: Dijkstra's algorithm for optimizing routes between European train stations."
                ]
            },
            {
                title: "CPGE TSI - Lycée Le Corbusier",
                locationDate: "Aubervilliers | 2017 - 2019",
                details: [
                    "Preparatory Class for TSI (Technologies and Industrial Sciences).",
                    "TIPE: Creation of a Scooter Parking."
                ]
            }
        ],
        
        // Skills Section
        skills: [
            {
                title: "Programming Languages",
                items: [
                    "Python ★★★★",
                    "JavaScript ★★★",
                    "C++ ★★",
                    "C# ★★",
                    "Java ★★"
                ]
            },
            {
                title: "Domain",
                items: [
                    "Machine Learning",
                    "Deep Learning",
                    "Web Scraping",
                    "Big Data",
                    "Computer Vision",
                    "Computer Graphics",
                    "NLP",
                    "DevOps"
                ]
            },
            {
                title: "Frameworks",
                items: [
                    "TensorFlow",
                    "Keras",
                    "PyTorch",
                    "OpenCV",
                    "Scikit-Learn",
                    "Pandas",
                    "Scipy",
                    "Seaborn",
                    "Matplotlib",
                    "NodeJS"
                ]
            },
            {
                title: "Development Tools",
                items: [
                    "BitVise",
                    "GitHub",
                    "MS Visual Studio",
                    "Visual Studio Code",
                    "MATLAB",
                    "SolidWorks",
                    "Unity"
                ]
            },
            {
                title: "Cloud Technologies",
                items: [
                    "Microsoft Azure",
                    "AWS",
                    "Docker"
                ]
            },
            {
                title: "Certification",
                items: [
                    "Certification: Huawei HCIA-AI V3.0 (Artificial Intelligence)"
                ]
            }
        ],
        
        // Hobbies Section
        hobbies: [
            {
                title: "🌍 Languages",
                items: [
                    "French ★★★★★",
                    "English ★★★★",
                    "Spanish ★★",
                    "Japanese ★★",
                    "Italian ★"
                ]
            },
            {
                title: "🎮 Hobbies",
                items: [
                    "Video Games",
                    "E-sports",
                    "Football",
                    "Climbing",
                    "Travel"
                ]
            },
            {
                title: "💻 Projects",
                items: [
                    "Fall Detection Bracelet: Developed with Arduino and created a web interface.",
                    "Document Sorter: Application in JavaScript using the Ramdba library.",
                    "VR Interaction: Developed in C# with Unity, including programming controller inputs for virtual reality experiences.",
                    "Online Portfolio: Designed an online portfolio using HTML, CSS, and JavaScript.",
                    "Discord Bot: Created a bot for Discord using JavaScript.",
                    "3D Animation: Modeling and animation with Blender.",
                    "3D Modeling: Design and modeling of parts and assemblies in Solidworks."
                ]
            }
        ],
        
        // Contact Section
        contact: {
            title: "Contact",
            email: "Email: <a href='mailto:jahedul@hotmail.fr'>jahedul@hotmail.fr</a>",
            linkedin: "LinkedIn: <a href='https://www.linkedin.com/in/jahedul-bhuiyan/' target='_blank'>Jahedul Bhuiyan</a>",
            phone: "Phone: <a href='tel:0658405424'>06.58.40.54.24</a>",
            downloadCV: "<a href='/data/CV.pdf' download='CV_BHUIYAN_Jahedul.pdf' target='_blank'><button class='bouton-cv'>Download CV</button></a>",
            messageTitle: "Send me a message",
            nameLabel: "Name:",
            emailLabel: "Email:",
            messageLabel: "Message:",
            sendButton: "Send"
        },
    },
    fr: {
        // Header
        header: {
            name: "BHUIYAN Jahedul",
            subtitle: "Ingénieur en Intelligence Artificielle",
            nav: {
                description: "Description",
                experience: "Expérience",
                education: "Éducation",
                skills: "Compétences",
                hobbies: "Loisirs",
                contact: "Contact"
            }
        },
        
        // Description Section
        description: [
            "Je suis un ingénieur en IA diplômé de l'ESME Sudria à Paris, passionné par les nouvelles technologies et l'innovation.",
            "Mon objectif est d'enrichir mes compétences à travers des expériences variées et stimulantes.",
            "Actuellement à la recherche de mon premier CDI dans le domaine de la data, je suis prêt à relever de nouveaux défis techniques et à contribuer à des projets innovants.",
            "N'hésitez pas à me contacter ! Mes coordonnées vous attendent à la fin de ce parcours interactif."
        ],

        experience: [
            {
                title: "Stage de fin d'études - ALTEN",
                locationDate: "Sèvres | Janvier 2023 - Juillet 2023",
                description: "Projet de thèse CIFRE avec ALTEN et CentraleSupélec :",
                details: [
                    "Analyse comportementale immersive : Étude des interactions humaines en environnements virtuels avec un focus sur le deep learning et le NLP.",
                    "Recherche et développement : État de l'art sur les transformers en cross-modalité.",
                    "Conception d'algorithmes : Développement en Python avec PyTorch pour l'analyse de données comportementales sur audio, texte et vision.",
                    "Gestion de données : Collecte, traitement et création d'un dataset pour la prédiction des émotions (valence-arousal).",
                    "Outils et technologies : BitVise, GitHub, Microsoft Azure, Visual Studio Code.",
                    "Compétences acquises : Python, NLP, transformers, deep learning, PyTorch, Bash."
                ]
            },
            {
                title: "Stage d'études - Wel2Be",
                locationDate: "Rennes | Avril 2022 – Juillet 2022",
                description: "Développement d'un outil de reconnaissance des signes de conscience chez la volaille en abattoir :",
                details: [
                    "Bien-être animal : Amélioration des pratiques en abattoir en détectant les signes de conscience.",
                    "Collecte et traitement des données : Enregistrement et labélisation de vidéos sur site, avec traitement via FFmpeg.",
                    "Conception d'algorithmes : Développement en Python utilisant OpenCV pour l'analyse d'images et TensorFlow/Keras pour le deep learning.",
                    "Outils et technologies : GitHub pour la gestion de version, Visual Studio Code pour le développement.",
                    "Compétences acquises : Analyse d'image, Python, TensorFlow, Keras, OpenCV, traitement image."
                ]
            }
        ],
        
        // Education Section
        education: [
            {
                title: "Diplôme d'Ingénieur en IA - ESME Sudria",
                locationDate: "Ivry-Sur-Seine | 2019 - 2022",
                details: [
                    'Reconnaissance de visage en temps réel : Développement d\'une solution de reconnaissance faciale avec IHM, utilisant Deep Learning, Python et OpenCV. <a href="https://github.com/M3canixx/face-recognition-cnn" target="_blank" rel="noopener noreferrer">[Voir le projet]</a>',
                    'Reconnaissance d’émotions par expression faciale : Création d’un modèle de Deep Learning pour identifier les émotions à partir des expressions faciales, en Python et OpenCV. <a href="https://github.com/M3canixx/Facial-Expression-Recognition-using-VGG" target="_blank" rel="noopener noreferrer">[Voir le projet]</a>',
                    'Détecteur de fautes d’orthographe : Outil de détection des fautes sur les réseaux sociaux via Web Scraping, utilisant Selenium en Python et JavaScript. <a href="https://github.com/M3canixx/Le_denonceur_de_dechet-inator" target="_blank" rel="noopener noreferrer">[Voir le projet]</a>',
                    'Application de gestion des stocks pharmaceutiques : Développement en Java pour le suivi et la gestion des stocks de médicaments.'
                ]
            },
            {
                title: "Semestre International - Prague College",
                locationDate: "Prague | 2020 - 2021",
                details: [
                    'Jeu en Python : Morpion en 3D avec programmation avancée en Python.',
                    "Théorie des graphes : Algorithme de Dijkstra pour optimiser les trajets entre gares européennes."
                ]
            },
            {
                title: "CPGE TSI - Lycée Le Corbusier",
                locationDate: "Aubervilliers | 2017 - 2019",
                details: [
                    "Classe Préparatoire TSI (Technologie et Science de l'Industrie).",
                    "TIPE : Création d'un Parking à Trottinette."
                ]
            }
        ],
        
        // Skills Section
        skills: [
            {
                title: "Langage de programmation",
                items: [
                    "Python ★★★★",
                    "JavaScript ★★★",
                    "C++ ★★",
                    "C# ★★",
                    "Java ★★"
                ]
            },
            {
                title: "Domaine",
                items: [
                    "Machine Learning",
                    "Deep Learning",
                    "Web Scraping",
                    "Big Data",
                    "Computer Vision",
                    "Computer Graphics",
                    "NLP",
                    "DevOps"
                ]
            },
            {
                title: "Frameworks",
                items: [
                    "TensorFlow",
                    "Keras",
                    "PyTorch",
                    "OpenCV",
                    "Scikit-Learn",
                    "Pandas",
                    "Scipy",
                    "Seaborn",
                    "Matplotlib",
                    "NodeJS"
                ]
            },
            {
                title: "Outils de développement",
                items: [
                    "BitVise",
                    "GitHub",
                    "MS Visual Studio",
                    "Visual Studio Code",
                    "MATLAB",
                    "SolidWorks",
                    "Unity"
                ]
            },
            {
                title: "Technologies Cloud",
                items: [
                    "Microsoft Azure",
                    "AWS",
                    "Docker"
                ]
            },
            {
                title: "Certification",
                items: [
                    "Certification : Huawei HCIA-AI V3.0 (Intelligence Artificielle)"
                ]
            }
        ],
        
        // Hobbies Section
        hobbies: [
            {
                title: "🌍 Langues",
                items: [
                    "Français ★★★★★",
                    "Anglais ★★★★",
                    "Espagnol ★★",
                    "Japonais ★★",
                    "Italien ★"
                ]
            },
            {
                title: "🎮 Passions",
                items: [
                    "Jeux Vidéo",
                    "E-sport",
                    "Football",
                    "Escalade",
                    "Voyage"
                ]
            },
            {
                title: "💻 Projets",
                items: [
                    "Bracelet détecteur de chute : Développement avec Arduino et création d'une interface web.",
                    "Trieuse de documents : Application en JavaScript utilisant la bibliothèque Ramdba.",
                    "Interaction VR : Développement en C# avec Unity, incluant la programmation des contrôles des manettes pour des expériences de réalité virtuelle.",
                    "Portfolio Internet : Conception d'un portfolio en ligne avec HTML, CSS et JavaScript.",
                    "Bot Discord : Création d'un bot pour Discord en JavaScript.",
                    "Animation 3D : Modélisation et animation avec Blender.",
                    "Modélisation 3D : Conception et modélisation de pièces et d'assemblages sur Solidworks."
                ]
            }
        ],
        
        // Contact Section
        contact: {
            title: "Contact",
            email: "Mail : <a href='mailto:jahedul@hotmail.fr'>jahedul@hotmail.fr</a>",
            linkedin: "LinkedIn : <a href='https://www.linkedin.com/in/jahedul-bhuiyan/' target='_blank'>Jahedul Bhuiyan</a>",
            phone: "Téléphone : <a href='tel:0658405424'>06.58.40.54.24</a>",
            downloadCV: "<a href='/data/CV.pdf' download='CV_BHUIYAN_Jahedul.pdf' target='_blank'><button class='bouton-cv'>Télécharger le CV</button></a>",
            messageTitle: "Envoyez-moi un message",
            nameLabel: "Nom :",
            emailLabel: "Email :",
            messageLabel: "Message :",
            sendButton: "Envoyer"
        },
    }
};
