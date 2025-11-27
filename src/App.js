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
  description: "Je suis un ingénieur en Intelligence Artificielle diplômé de l'ESME Sudria, passionné par les nouvelles technologies et l'innovation, mon objectif est d'enrichir mes compétences à travers des expériences variées et stimulantes. Actuellement à la recherche de mon premier CDI dans le domaine de la data, je suis prêt à relever de nouveaux défis techniques et à contribuer à des projets innovants. N'hésitez pas à me contacter !"
};

const experiences = [
  {
    poste: "Ingénieur Computer Vision",
    entreprise: "Freelance",
    periode: "2025 - Présent",
    description: "Développement d'applications utilisant la vision par ordinateur et l'IA.",
    technologies: ["Python", "OpenCV", "Web Scrapping", "TensorFlow"]
  },
  {
    poste: "Ingénieur Computer Vision Junior",
    entreprise: "ALTEN",
    periode: "Janvier 2023 - Juillet 2023",
    description: "Étude des interactions humaines en simulation de conduite.",
    technologies: ["GitHub", "Azure", "Python", "PyTorch", "Bash"]
  },
  {
    poste: "Ingénieur Computer Vision Junior",
    entreprise: "Wel2Be",
    periode: "Avril 2022 - Juillet 2022",
    description: "Développement d'un outil de reconnaissance des signes de conscience chez la volaille en abattoir.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"]
  }
];

const formations = [
  {
    diplome: "Diplôme d'Ingénieur en IA",
    ecole: "ESME Sudria",
    periode: "2019 - 2022",
    details: "Spécialisation en vision par ordinateur et apprentissage automatique"
  },
  {
    diplome: "Semestre International",
    ecole: "Prague College",
    periode: "2020 - 2021",
    details: "Formation générale en informatique et programmation"
  },
  {
    diplome: "CPGE TSI",
    ecole: "Lycée Le Corbusier",
    periode: "2017 - 2019",
    details: "Formation générale en maths, physique et ingenieurie"
  }
];

const competences = {
  langage: ["Python", "Javascript", "C++", "C#", "Java"],
  domaine: ["Machine Learning", "Deep Learning", "Big Data", "Computer Vision", "NLP"],
  frameworks: ["TensorFlow", "Keras", "PyTorch", "OpenCV", "NodeJS", "Jupyter"],
  outils: ["Git", "Docker", "BitVise", "Microsoft Azure", "AWS"],
  certifiaction: ["Huawei HCIA-AI V3.0", "AWS Educate Introduction to Generative AI", "AWS Educate Machine Learning Foundations"],
};

const projets = [
  {
    nom: "Reconnaissance de visage en temps réel",
    description: "Développement d'une solution de reconnaissance faciale avec IHM.",
    technologies: ["Tensorflow", "Python", "OpenCV"]
  },
  {
    nom: "Reconnaissance d'émotions par expression faciale",
    description: "Création d'un modèle de Deep Learning pour identifier les émotions à partir des expressions faciales",
    technologies: ["Python", "OpenCV"]
  },
  {
    nom: "Détecteur de fautes d'orthographe",
    description: "Outil de détection des fautes sur les réseaux sociaux",
    technologies: ["Web Scraping", "Selenium", "Python", "JavaScript"]
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
    technologies: ["Javascript", "NodeJS"]
  },
  {
    nom: "Portfolio Internet",
    description: "Conception d'un portfolio en ligne",
    technologies: ["HTML", "React"]
  },
  {
    nom: "Bot Discord",
    description: "Création d'un bot pour Discord",
    technologies: ["JavaScript", "NodeJS", "Discord.js"]
  },
];

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

            {/* <div className="header-actions">
              <button className="download-btn">
                <span className="download-btn-content">
                  <Download size={20} />
                  Télécharger CV
                </span>
                <div className="download-btn-overlay"></div>
              </button>
            </div> */}
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

                  <p className="card-description">{exp.description}</p>

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
                <div className={`card-glow card-glow-cyan ${hoveredCard === index ? 'hovered' : ''}`}></div>
                <div className={`card-glow-xl card-glow-cyan ${hoveredCard === index ? 'hovered' : ''}`}></div>
                <div className={`glass-card-content ${hoveredCard === index ? 'hovered' : ''}`}>
                  <div className="card-bg-gradient card-bg-cyan"></div>
                  <div className={`card-bubble card-bubble-cyan ${hoveredCard === index ? 'hovered' : ''}`}></div>

                  <div className="card-header">
                    <div className="card-info">
                      <h3 className="card-title">{form.diplome}</h3>
                      <p className="card-company card-company-cyan">{form.ecole}</p>
                      <p className="card-period">{form.periode}</p>
                    </div>
                    <div className="card-icon">
                      <GraduationCap className="icon-cyan" size={28} />
                    </div>
                  </div>

                  <p className="card-description">{form.details}</p>
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
              { title: 'Domaine', skills: competences.domaine },
              { title: 'Frameworks', skills: competences.frameworks },
              { title: 'Outils', skills: competences.outils },
              { title: 'Certifiaction', skills: competences.certifiaction }
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