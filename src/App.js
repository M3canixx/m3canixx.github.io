import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import imgYgodoku from './assets/YGOdoku.png';
import imgDiscord from './assets/Discord.png';

const profile = {
  nom: "Jahedul BHUIYAN",
  titre: "Ingénieur IA & Computer Vision",
  email: "jahedul@hotmail.fr",
  telephone: "+33 6 58 40 54 24",
  localisation: "Pantin, France",
  linkedin: "https://linkedin.com/in/jahedul-bhuiyan",
  github: "https://github.com/m3canixx",
  description: "Étant passionné par la technologies et les jeux-vidéos depuis de nombreuses années, je me suis naturellement dirigé vers des études en mathématiques et informatique. En intégrant l'ESME Sudria, j'ai pu me spécialiser en intelligence artificielle et computer vision, domaines qui me fascinent par leur potentiel. Aujourd’hui, je souhaite continuer à approfondir ces sujets et contribuer au développement de solutions innovantes basées sur l'intelligence artificielle. Je recherche un poste d’ingénieur Computer Vision, idéalement en CDI en Île-de-France ou en télétravail hybride."
};

const navItems = [
  { id: 'experiences', label: 'Expériences' },
  { id: 'formations', label: 'Formations' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'autres', label: 'Autres' },
  { id: 'contact', label: 'Contact' },
];

const competences = {
  "Langages": ["Python", "JavaScript", "React", "C++", "C#", "Java", "SQL"],
  "IA & ML": ["Computer Vision", "NLP", "GenAI", "Transformers", "PyTorch", "TensorFlow", "Keras"],
  "Vision": ["OpenCV", "YOLO", "FFMPEG", "Optical Flow"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Git", "CI/CD", "n8n"],
  "Data & BI": ["Pandas", "NumPy", "Scikit-learn", "PySpark", "Snowflake", "MongoDB", "PowerBI"],
  "SoftSkills": ["Adaptabilité", "Curiosité", "Polyvalence", "Esprit d'équipe"],
  "Centres d'intérêt": ["Voyage", "Escalade", "Esport", "Cuisine"],
  "Langues": ["Français (natif)", "Anglais (IELTS 6.5 / TOEIC 815)"],
};

const formations = [
  {
    diplome: "Diplôme d'Ingénieur — Intelligence Artificielle",
    ecole: "ESME Sudria",
    periode: "2019 – 2022",
    details: ["Reconnaissance faciale temps réel (CNN)", "Détection d'émotions (TensorFlow)", "Web scraping & ML (Selenium)"]
  },
  {
    diplome: "Semestre International",
    ecole: "Prague College",
    periode: "2020 – 2021",
    details: ["Théorie des graphes (Dijkstra)", "Programmation graphique Python"]
  },
  {
    diplome: "Certification AWS AI Educate — Data Science & ML Engineering",
    ecole: "Amazon Web Services",
    periode: "Juin – Juillet 2025",
    details: []
  },
  {
    diplome: "Certification HCIA-AI V3.0",
    ecole: "Huawei",
    periode: "Avril 2022",
    details: []
  },
];

const experiences = [
  {
    poste: "Ingénieur Computer Vision",
    entreprise: "Freelance",
    periode: "2025 – Présent",
    points: [
      "Optimisation du pipeline d'animation faciale temps réel — réduction de la latence de 70%",
      "Tracking tête/visage en temps réel via webcam (SDK Ready Player Me)",
      "Développement d'agents IA multimodaux (LLM, scraping, n8n)",
    ],
    technologies: ["Python", "OpenCV", "GenAI", "Flutter", "n8n"]
  },
  {
    poste: "Ingénieur Computer Vision Junior",
    entreprise: "ALTEN",
    periode: "Janvier 2023 – Juillet 2023",
    points: [
      "Recherche CIFRE sur les interactions humaines en conduite simulée (VR)",
      "Protocole expérimental multimodal (audio, texte, vision)",
      "Modèles Deep Learning / NLP — MSE : 0.048 | CCC : 0.970",
    ],
    technologies: ["PyTorch", "Azure", "Python", "Bash", "GitHub"]
  },
  {
    poste: "Ingénieur Computer Vision Junior",
    entreprise: "Wel2Be",
    periode: "Avril 2022 – Juillet 2022",
    points: [
      "Détection de signes de conscience chez la volaille en abattoir",
      "Dataset annoté de 10 000 vidéos industrielles",
      "Détection & tracking temps réel — Accuracy : 96% | 50 FPS",
    ],
    technologies: ["TensorFlow", "Keras", "OpenCV", "Python"]
  },
];

const projets = [
  {
    nom: "Reconnaissance faciale temps réel",
    description: "Développement d'une solution complète de reconnaissance faciale en temps réel avec interface graphique. Le système détecte et identifie des visages via webcam à l'aide d'un CNN entraîné sur des données personnalisées.",
    technologies: ["TensorFlow", "Python", "OpenCV"],
    github: "https://github.com/M3canixx/face-recognition-cnn",
    image: null
  },
  {
    nom: "Reconnaissance d'émotions faciales",
    description: "Création d'un modèle de Deep Learning basé sur AlexNet pour identifier les émotions à partir des expressions faciales. Entraîné sur des datasets publics (FER2013), le modèle classifie 7 émotions en temps réel.",
    technologies: ["Python", "OpenCV", "Keras"],
    github: "https://github.com/M3canixx/Facial-Expression-Recognition-using-AlexNet",
    image: null
  },
  {
    nom: "Détecteur de fautes d'orthographe",
    description: "Outil de détection automatique des fautes d'orthographe sur les réseaux sociaux. Utilise le web scraping pour collecter des posts et un modèle ML pour identifier les erreurs linguistiques.",
    technologies: ["Selenium", "Python", "JavaScript"],
    github: "https://github.com/M3canixx/Le_denonceur_de_dechet-inator",
    image: null
  },
  {
    nom: "YGODoku",
    description: "Jeu du Sudoku sur la thématique Yu-Gi-Oh entièrement développé en JavaScript. Interface jouable en ligne avec génération de grilles aléatoires et système de validation.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://m3canixx.github.io/YGOdoku/",
    image: imgYgodoku
  },
  {
    nom: "Morpion 3D",
    description: "Jeu de morpion développé en trois dimensions avec Pygame. Les joueurs s'affrontent sur une grille 3D avec détection automatique des victoires dans les 8 directions.",
    technologies: ["Python", "Pygame"],
    github: null,
    image: null
  },
  {
    nom: "Théorie des graphes",
    description: "Implémentation de l'algorithme de Dijkstra en Clojure pour calculer les trajets optimaux entre les principales gares européennes, avec visualisation du chemin le plus court.",
    technologies: ["Clojure"],
    github: null,
    image: null
  },
  {
    nom: "Bracelet détecteur de chute",
    description: "Bracelet intelligent embarqué sur Arduino pour cyclistes. Détecte les chutes via accéléromètre, enregistre l'événement en base de données et alerte automatiquement les contacts d'urgence.",
    technologies: ["C", "SQL", "Arduino"],
    github: null,
    image: null
  },
  {
    nom: "Trieuse de documents",
    description: "Système de tri et renommage automatique de documents et images. Analyse le contenu des fichiers et les classe intelligemment selon des règles configurables via une interface Node.js.",
    technologies: ["JavaScript", "NodeJS"],
    github: "https://github.com/M3canixx/quick_rename_pic",
    image: null
  },
  {
    nom: "Bot Discord",
    description: "Bot Discord multifonction avec commandes personnalisées, gestion des rôles, réponses automatiques et intégration d'APIs externes pour enrichir l'expérience des serveurs.",
    technologies: ["JavaScript", "NodeJS", "Discord.js"],
    github: null,
    image: imgDiscord
  },
];

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return inView;
}

function AnimSection({ id, children, className = '' }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  return (
    <section id={id} ref={ref} className={`anim-section ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </section>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = navItems.map(n => document.getElementById(n.id));
      let current = '';
      sections.forEach(s => {
        if (s && window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      setActiveNav(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* ── HEADER / NAV ── */}
      <header className="header">
        <a href="#top" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          JB<span className="logo-dot">.</span>
        </a>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map(n => (
            <button key={n.id} className={`nav-link ${activeNav === n.id ? 'active' : ''}`} onClick={() => scrollTo(n.id)}>
              {n.label}
            </button>
          ))}
        </nav>
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </header>

      {/* ── HERO ── */}
      <section className="hero" id="top">
        <div className="hero-noise" />
        <div className="hero-grid" />
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <div className="hero-content">
          <p className="hero-eyebrow">Bonjour et bienvenue, je suis</p>
          <h1 className="hero-name">{profile.nom}</h1>
          <h2 className="hero-title">{profile.titre}</h2>
          <p className="hero-desc">{profile.description}</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('contact')}>Me contacter</button>
            <a className="btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn-ghost" href={`mailto:${profile.email}`} target="_blank" rel="noreferrer">Email</a>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

            {/* ── EXPÉRIENCES ── */}
      <AnimSection id="experiences">
        <div className="section-header">
          <span className="section-tag">01</span>
          <h2 className="section-title">Expériences</h2>
        </div>
        <div className="exp-list">
          {experiences.map((e, i) => (
            <div className="exp-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="exp-header">
                <div>
                  <h3 className="exp-poste">{e.poste}</h3>
                  <p className="exp-entreprise">{e.entreprise}</p>
                </div>
                <span className="exp-periode">{e.periode}</span>
              </div>
              <ul className="exp-points">
                {e.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
              <div className="exp-techs">
                {e.technologies.map(t => <span className="exp-tech" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </AnimSection>

            {/* ── FORMATIONS ── */}
      <AnimSection id="formations" className="alt-bg">
        <div className="section-header">
          <span className="section-tag">02</span>
          <h2 className="section-title">Formations</h2>
        </div>
        <div className="timeline">
          {formations.map((f, i) => (
            <div className="timeline-item" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="timeline-dot" />
              <div className="timeline-body">
                <div className="timeline-meta">
                  <span className="timeline-school">{f.ecole}</span>
                  <span className="timeline-period">{f.periode}</span>
                </div>
                <h3 className="timeline-title">{f.diplome}</h3>
                {f.details.length > 0 && (
                  <ul className="timeline-details">
                    {f.details.map((d, j) => <li key={j}>{d}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimSection>

      {/* ── COMPÉTENCES ── */}
      <AnimSection id="competences">
        <div className="section-header">
          <span className="section-tag">03</span>
          <h2 className="section-title">Compétences</h2>
        </div>
        <div className="skills-grid">
          {Object.entries(competences).map(([cat, skills], i) => (
            <div className="skill-block" key={cat} style={{ animationDelay: `${i * 0.08}s` }}>
              <h3 className="skill-block-title">{cat}</h3>
              <div className="skill-tags">
                {skills.map(s => <span className="skill-tag" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </AnimSection>

            {/* ── PROJETS ── */}
      <AnimSection id="projets" className="alt-bg">
        <div className="section-header">
          <span className="section-tag">04</span>
          <h2 className="section-title">Projets</h2>
        </div>
        <div className="projects-list">
          {projets.map((p, i) => (
            <div
              className={`project-row ${p.github ? 'clickable' : ''}`}
              key={i}
              style={{ animationDelay: `${i * 0.07}s` }}
              onClick={() => p.github && window.open(p.github, '_blank')}
            >
              <div className="project-row-text">
                <div className="project-row-meta">
                  <span className="project-row-num">{String(i + 1).padStart(2, '0')}</span>
                  {p.github && <span className="project-row-badge">GitHub ↗</span>}
                </div>
                <h3 className="project-row-title">{p.nom}</h3>
                <p className="project-row-desc">{p.description}</p>
                <div className="project-row-techs">
                  {p.technologies.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="project-row-img">
                {p.image
                  ? <img src={p.image} alt={p.nom} />
                  : (
                    <div className="project-row-placeholder">
                      <span className="placeholder-icon">&lt;/&gt;</span>
                      <span className="placeholder-name">{p.nom}</span>
                    </div>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </AnimSection>


      {/* ── CONTACT ── */}
      <AnimSection id="contact">
        <div className="section-header">
          <span className="section-tag">05</span>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-layout">
          <p className="contact-pitch">
            Disponible pour un CDI en Île-de-France ou en télétravail hybride.<br />
            N'hésitez pas à me contacter !
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <span className="contact-icon">✉</span>
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.telephone}`} className="contact-link">
              <span className="contact-icon">☎</span>
              <span>{profile.telephone}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-icon">in</span>
              <span>LinkedIn</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-icon">&lt;/&gt;</span>
              <span>GitHub</span>
            </a>
            <span className="contact-link no-link">
              <span className="contact-icon">⌖</span>
              <span>{profile.localisation}</span>
            </span>
          </div>
        </div>
      </AnimSection>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© 2026 {profile.nom} — Tous droits réservés</p>
      </footer>
    </div>
  );
}