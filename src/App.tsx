import { useState } from 'react'
import './App.css'

const projects = [
  { number: '01', type: 'Design produit · 2025', title: 'NOVA FINANCE', description: 'Une expérience financière claire et rassurante, pensée pour reprendre le contrôle de son budget.', tags: ['UI/UX', 'Figma', 'Product design'], visual: 'finance' },
  { number: '02', type: 'Développement web · 2024', title: 'STUDIO NORD', description: 'Un portfolio éditorial pour un studio créatif indépendant, au croisement du design et du digital.', tags: ['React', 'TypeScript', 'CSS'], visual: 'studio' },
  { number: '03', type: 'Identité visuelle · 2024', title: 'FORME LIBRE', description: 'Une identité flexible et colorée pour une nouvelle génération de lieux culturels.', tags: ['Branding', 'Direction artistique'], visual: 'forme' },
]

const skills = ['UI / UX design', 'React & TypeScript', 'Design system', 'Prototypage', 'Accessibilité', 'Figma']

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#accueil" aria-label="Accueil, Alex Martin">AM<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen}>{menuOpen ? '✕' : '☰'}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navigation principale" onClick={() => setMenuOpen(false)}>
          <a href="#apropos">À propos</a><a href="#projets">Projets</a><a href="#contact" className="nav-contact">Me contacter <Arrow diagonal /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="accueil">
        <div className="hero-copy">
          <div className="availability"><span className="pulse" /> DISPONIBLE POUR DE NOUVEAUX PROJETS</div>
          <p className="eyebrow">DES IDÉES CLAIRES. DES EXPÉRIENCES UTILES.</p>
          <h1>Je conçois<br />des expériences<br /><span className="accent-text">qui ont du sens.</span></h1>
          <p className="hero-intro">Bonjour, moi c’est Alex. Designer et développeur créatif, je transforme les idées en produits numériques simples, beaux et intuitifs.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projets">Découvrir mes projets <Arrow /></a><a className="text-link" href="#apropos">En savoir plus <Arrow /></a></div>
        </div>
        <div className="hero-art" aria-label="Composition graphique abstraite bleue" role="img">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orb orb-back" /><div className="orb orb-main"><span>AM</span></div><div className="orb orb-small" /><div className="art-caption"><span>CRÉATIVITÉ</span><span>×</span><span>TECHNOLOGIE</span></div><span className="art-index">01 — 03</span>
        </div>
        <a href="#apropos" className="scroll-cue"><span /> DÉFILER POUR EXPLORER</a>
      </section>

      <section className="about section-wrap" id="apropos">
        <div className="section-heading"><p className="eyebrow">UN PEU À PROPOS</p><span className="section-index">01 / QUI JE SUIS</span></div>
        <div className="about-grid"><h2>Le beau attire.<br /><span className="muted">Le simple reste.</span></h2><div className="about-copy"><p>Je suis un designer indépendant basé à Paris. J’aime faire le lien entre une idée ambitieuse et une expérience que tout le monde peut comprendre.</p><p>Du premier croquis à la dernière ligne de code, je travaille avec soin, curiosité et une obsession : rendre le numérique plus humain.</p><a className="text-link" href="mailto:bonjour@alexmartin.design">Parlons de votre projet <Arrow diagonal /></a></div></div>
        <div className="skills-row"><span className="skills-label">MON TERRAIN DE JEU</span><div className="skill-list">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div></div>
      </section>

      <section className="projects section-wrap" id="projets">
        <div className="section-heading"><div><p className="eyebrow">SÉLECTION DE PROJETS</p><h2>Du concret,<br /><span className="muted">avec intention.</span></h2></div><span className="section-index">02 / CE QUE JE FAIS</span></div>
        <div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}>
          <div className={`project-visual ${project.visual}`} aria-hidden="true">
            {project.visual === 'finance' && <><div className="finance-window"><div className="window-dots"><i /><i /><i /></div><div className="finance-label">SOLDE TOTAL</div><div className="finance-number">12 480<span> €</span></div><div className="chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-base" /></div><div className="floating-chip">↗  +12,8%</div></>}
            {project.visual === 'studio' && <><div className="studio-circle">N.</div><span className="studio-word">STUDIO<br />NORD</span><span className="studio-small">CRÉER, AUTREMENT.</span></>}
            {project.visual === 'forme' && <><span className="forme-type">forme<br /><i>libre.</i></span><div className="forme-shape shape-a" /><div className="forme-shape shape-b" /><div className="forme-shape shape-c" /></>}
          </div>
          <div className="project-info"><div className="project-meta"><span>{project.number} / {project.type}</span><a href="#contact" aria-label={`En savoir plus sur ${project.title}`}><Arrow diagonal /></a></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        </article>)}</div>
      </section>

      <section className="contact section-wrap" id="contact"><div className="section-heading"><p className="eyebrow">ET MAINTENANT ?</p><span className="section-index">03 / À VOUS</span></div><h2>Une idée en tête ?<br /><span className="accent-text">Construisons-la.</span></h2><div className="contact-bottom"><p>Un projet, une question ou juste envie d’échanger ?<br />Ma boîte mail est toujours ouverte.</p><a className="button button-primary" href="mailto:bonjour@alexmartin.design">bonjour@alexmartin.design <Arrow diagonal /></a></div></section>

      <footer className="footer section-wrap"><a className="wordmark" href="#accueil">AM<span>.</span></a><span>DESIGN & DÉVELOPPEMENT AVEC INTENTION.</span><div className="social-links"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a><a href="https://github.com" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a></div><span className="copyright">© 2025 ALEX MARTIN</span></footer>
    </main>
  )
}

export default App
