import React, { useState } from 'react';
import { Mail, Linkedin, Github, Briefcase, GraduationCap, Award, Code, Download, ExternalLink } from 'lucide-react';
import './App.css';

// Données à personnaliser
const profile = {
  nom: "Jahedul BHUIYAN",
  titre: "Ingénieur Computer Vision",
  email: "jahedul@hotmail.fr",
  telephone: "+33 6 58 40 54 24",
  localisation: "Pantin, France",
  linkedin: "linkedin.com/in/jahedul-bhuiyan",
  github: "github.com/m3canixx",
  description: "Ingénieur Computer Vision diplômé de l'ESME Sudria, spécialisé en deep learning temps réel, traitement d'images et IA générative. Expérience en R&D industrielle (ALTEN, Wel2Be) et en développement de SDK temps réel (animation faciale, avatars 3D). Trilingue technique : PyTorch, TensorFlow, OpenCV. Recherche un CDI en Île-de-France ou en télétravail hybride pour rejoindre une équipe IA produit ambitieuse."
};

const experiences = [
  {
    poste: "Ingénieur Computer Vision",
    entreprise: "Freelance",
    periode: "2025 - Présent",
    description: [
      {
        text: "Amélioration d'un SDK de génération d'avatars 3D (Ready Player Me) : optimisation du pipeline d'animation faciale temps réel via webcam.",
        bullets: [
          "Optimisation du SDK : réduction de la latence de 70%.",
          "Mise en place d'un tracking de la tête et du visage en temps réel.",
        ]
      },
      {
        text: "Développement d'agents IA multimodaux pour analyse et génération de contenu (LLM).",
        bullets: [
          "Scraping de données web et intégration dans des workflows d'automatisation (n8n).",
        ]
      }
    ],
    technologies: ["Python", "OpenCV", "Web Scrapping", "GenAI", "Flutter"]
  },
  {
    poste: "Ingénieur Computer Vision Junior",
    entreprise: "ALTEN",
    periode: "Janvier 2023 - Juillet 2023",
    description: [
      {
        text: "Recherche CIFRE sur les interactions humaines en conduite simulée (VR)",
        bullets: [
          "Conception d'un protocole expérimental multimodal (audio, texte, vision).",
          "Création d'un dataset multimodal annoté pour la prédiction d'émotions du conducteur. Dataset : IEMOCAP, MSP Podcast, CMU-MOSEI.",
          "Développement et entraînement de modèles Deep Learning / NLP (Transformers, fusion multimodale). MSE : 0.048, CCC : 0.970."
        ]
      },
    ],
    technologies: ["GitHub", "Azure", "Python", "PyTorch", "Bash"]
  },
  {
    poste: "Ingénieur Computer Vision Junior",
    entreprise: "Wel2Be",
    periode: "Avril 2022 - Juillet 2022",
    description: [
      {
        text: "Développement d'un outil de reconnaissance des signes de conscience chez la volaille en abattoir.",
        bullets: [
          "Analyse vidéo en environnement industriel pour le suivi du bien-être animal (élevage, conformité réglementaire).",
          "Création d'un dataset annoté de vidéos d'abattoirs pour entraîner des modèles de vision par ordinateur. Dataset : 10 000 annotations de vidéos.",
          "Développement d'algorithmes de détection et de tracking temps réel (Python, OpenCV). Acuracy : 96%, FPS : 50.",
          "Mise en place d'un prototype de contrôle qualité pour audit réglementaire client."
        ]
      }
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"]
  }
];

const formations = [
  {
    diplome: "Diplôme d'ingénieur en Intelligence Artificielle — ESME Sudria",
    ecole: "ESME Sudria",
    periode: "2019 - 2022",
    details: [
      {
        text: "Projets académiques en Computer Vision et Intelligence Artificielle :",
        bullets: [
          "Reconnaissance faciale temps réel (Python, Keras, CNN).",
          "Détection d'émotions (TensorFlow).",
          "Détection de fautes textuelles via web scraping (Selenium, ML)."
        ]
      }
    ],
  },
  {
    diplome: "Semestre International",
    ecole: "Prague College",
    periode: "2020 - 2021",
    details: [
      {
        text: "Formation générale en informatique et programmation :",
        bullets: [
          "Études de la théorie des graphes (Dijkstra).",
          "Études de la programmation graphique (Python).",
        ]
      }
    ],
  },
  {
    diplome: "Certification AWS AI Educate — Data Science, ML Engineering",
    ecole: "",
    periode: "Juin - Juillet 2025",
    details: ""
  },
  {
    diplome: "Certification Huawei HCIA-AI V3.0 — Intelligence Artificielle",
    ecole: "",
    periode: "Avril 2022",
    details: ""
  }
];

const competences = {
  langage: ["Python", "Javascript", "React", "SQL", "C++", "C#", "Java"],
  ai: ["Computer Vision", "NLP", "GenAI", "Transformers", "Pytorch", "TensorFlow", "Keras"],
  vision: ["OpenCV", "YOLO", "FFMPEG", "Optical Flow", "Dataset labeling", "Data augmentation"],
  cloud: ["AWS ", "Azure", "Docker", "Git", "CI/CD", "n8n"],
  data: ["Pandas", "NumPy", "Scikit-learn", "PySpark", "Snowflake", "MongoDB", "NoSQL", "PowerBi"],
};

const projets = [
  {
    nom: "Reconnaissance de visage en temps réel",
    description: "Développement d'une solution de reconnaissance faciale avec IHM.",
    technologies: ["Tensorflow", "Python", "OpenCV"],
    github : "https://github.com/M3canixx/face-recognition-cnn"
  },
  {
    nom: "Reconnaissance d'émotions par expression faciale",
    description: "Création d'un modèle de Deep Learning pour identifier les émotions à partir des expressions faciales",
    technologies: ["Python", "OpenCV"],
    github : "https://github.com/M3canixx/Facial-Expression-Recognition-using-AlexNet"
  },
  {
    nom: "Détecteur de fautes d'orthographe",
    description: "Outil de détection des fautes sur les réseaux sociaux",
    technologies: ["Web Scraping", "Selenium", "Python", "JavaScript"],
    github : "https://github.com/M3canixx/Le_denonceur_de_dechet-inator"
  },
  {
    nom: "Morpion en 3D",
    description: "Jeu de morpion développé en 3D",
    technologies: ["Python", "Pygame"]
  },
  {
    nom: "Théorie des graphes",
    description: "Algorithme de Dijkstra pour optimiser les trajets entre gares européennes",
    technologies: ["Clojure"]
  },
  {
    nom: "Application de gestion des stocks pharmaceutiques",
    description: "Développement d'une application pour le suivi et la gestion des stocks de médicaments",
    technologies: ["Java", "SQL"]
  },
  {
    nom: "Bracelet détecteur de chute",
    description: "Développement d'un bracelet intelligent pour cyclistes détectant les chutes et alertant les contacts d'urgence",
    technologies: ["C", "SQL", "Arduino"]
  },
  {
    nom: "Trieuse de documents",
    description: "Système de tri automatique de documents",
    technologies: ["Javascript", "NodeJS"],
    github : "https://github.com/M3canixx/quick_rename_pic"
  },
  {
    nom: "Portfolio Internet",
    description: "Conception d'un portfolio en ligne",
    technologies: ["HTML", "React"],
    github : "https://m3canixx.github.io/"
  },
  {
    nom: "Bot Discord",
    description: "Création d'un bot pour Discord",
    technologies: ["JavaScript", "NodeJS", "Discord.js"]
  },
  {
    nom: "YGODoku",
    description: "Jeu de Sudoku développé en JavaScript",
    technologies: ["JavaScript", "HTML", "CSS"],
    github : "https://m3canixx.github.io/YGOdoku/"
  },
];

function renderDescription(description) {
  if (typeof description === "string") {
    return <p className="card-description">{description}</p>;
  }

  return (
    <div className="card-description">
      {description.map((block, i) => (
        <div key={i} className={i < description.length - 1 ? "desc-block" : ""}>
          <p>{block.text}</p>
          {block.bullets && (
            <ul className="desc-bullets">
              {block.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('experience');
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="app-container">
      {/* Animated background elements */}
      <div className="background-animation">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-main">
            <div className="header-text">
              <div className="portfolio-badge">
                <span>Portfolio</span>
              </div>
              <h1 className="header-title">{profile.nom}</h1>
              <p className="header-subtitle">{profile.titre}</p>

              <div className="contact-links">
                <a href={`mailto:${profile.email}`} className="contact-link">
                  <Mail size={16} />
                  <span>{profile.email}</span>
                </a>
                <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="header-actions">
              <button className="download-btn">
                <span className="download-btn-content">
                  <Download size={20} />
                  Télécharger CV
                </span>
                <div className="download-btn-overlay"></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-content">
          <div className="nav-buttons">
            {[
              { id: 'experience', icon: Briefcase, label: 'Expérience' },
              { id: 'formation', icon: GraduationCap, label: 'Formation' },
              { id: 'competences', icon: Code, label: 'Compétences' },
              { id: 'projets', icon: Award, label: 'Projets' }
            ].map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
                >
                  <div className="nav-button-inner">
                    <Icon size={18} />
                    <span>{section.label}</span>
                  </div>
                  {activeSection === section.id && <div className="nav-indicator"></div>}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="main-content">
        {/* À propos */}
        <section className="about-section">
          <div className="glass-card">
            <div className="glass-glow glass-glow-1"></div>
            <div className="glass-glow glass-glow-2"></div>
            <div className="glass-content">
              <div className="glass-bg-gradient"></div>
              <div className="glass-bubble glass-bubble-1"></div>
              <div className="glass-bubble glass-bubble-2"></div>
              <h2 className="section-title">
                <span className="title-bar"></span>
                À propos
              </h2>
              <p className="about-text">{profile.description}</p>
            </div>
          </div>
        </section>

        {/* Expérience */}
        {activeSection === 'experience' && (
          <section className="content-section">
            {experiences.map((exp, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="card-wrapper"
              >
                <div className={`card-glow card-glow-purple ${hoveredCard === index ? 'hovered' : ''}`}></div>
                <div className={`card-glow-xl card-glow-purple ${hoveredCard === index ? 'hovered' : ''}`}></div>
                <div className={`glass-card-content ${hoveredCard === index ? 'hovered' : ''}`}>
                  <div className="card-bg-gradient"></div>
                  <div className={`card-bubble card-bubble-1 ${hoveredCard === index ? 'hovered' : ''}`}></div>
                  <div className={`card-bubble card-bubble-2 ${hoveredCard === index ? 'hovered' : ''}`}></div>

                  <div className="card-header">
                    <div className="card-info">
                      <h3 className="card-title">{exp.poste}</h3>
                      <p className="card-company">{exp.entreprise}</p>
                      <p className="card-period">{exp.periode}</p>
                    </div>
                    <div className="card-icon">
                      <Briefcase size={28} />
                    </div>
                  </div>

                  {renderDescription(exp.description)}

                  <div className="card-tags">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Formation */}
        {activeSection === 'formation' && (
          <section className="content-section">
            {formations.map((form, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="card-wrapper"
              >
                <div className={`card-glow card-glow-purple ${hoveredCard === index ? 'hovered' : ''}`}></div>
                <div className={`card-glow-xl card-glow-purple ${hoveredCard === index ? 'hovered' : ''}`}></div>
                <div className={`glass-card-content ${hoveredCard === index ? 'hovered' : ''}`}>
                  <div className="card-bg-gradient card-bg-purple"></div>
                  <div className={`card-bubble card-bubble-purple ${hoveredCard === index ? 'hovered' : ''}`}></div>

                  <div className="card-header">
                    <div className="card-info">
                      <h3 className="card-title">{form.diplome}</h3>
                      <p className="card-company card-company-purple">{form.ecole}</p>
                      <p className="card-period">{form.periode}</p>
                    </div>
                    <div className="card-icon">
                      <GraduationCap className="icon-purple" size={28} />
                    </div>
                  </div>

                  {renderDescription(form.details)}
                  
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Compétences */}
        {activeSection === 'competences' && (
          <section className="skills-section">
            {[
              { title: 'Langage', skills: competences.langage },
              { title: 'IA', skills: competences.ai },
              { title: 'Vision', skills: competences.vision },
              { title: 'Cloud', skills: competences.cloud },
              { title: 'Data&Bi', skills: competences.data },
            ].map((category, idx) => (
              <div key={idx} className="skill-card-wrapper">
                <div className="skill-card-glow"></div>
                <div className="skill-card-glow-xl"></div>
                <div className="skill-card">
                  <div className="skill-card-bg"></div>
                  <div className="skill-card-bubble"></div>

                  <h3 className="skill-title">
                    <Code size={24} />
                    {category.title}
                  </h3>
                  <div className="skill-list">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="skill-item">
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Projets */}
        {activeSection === 'projets' && (
          <section className="projects-section">
            {projets.map((projet, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="project-card-wrapper"
                onClick={() => projet.github && window.open(projet.github, '_blank')}
                style={{ cursor: projet.github ? 'pointer' : 'default' }}
              >
                <div className={`project-card-glow ${hoveredCard === index ? 'hovered' : ''}`}></div>
                <div className={`project-card-glow-xl ${hoveredCard === index ? 'hovered' : ''}`}></div>
                <div className={`project-card ${hoveredCard === index ? 'hovered' : ''}`}>
                  <div className="project-card-bg"></div>
                  <div className={`project-bubble project-bubble-1 ${hoveredCard === index ? 'hovered' : ''}`}></div>
                  <div className={`project-bubble project-bubble-2 ${hoveredCard === index ? 'hovered' : ''}`}></div>

                  <div className="project-header">
                    <h3 className="project-title">{projet.nom}</h3>
                    <ExternalLink className={`project-link-icon ${hoveredCard === index ? 'visible' : ''}`} size={24} />
                  </div>

                  <p className="project-description">{projet.description}</p>

                  <div className="project-tags">
                    {projet.technologies.map((tech, i) => (
                      <span key={i} className="project-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© 2025 {profile.nom}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;