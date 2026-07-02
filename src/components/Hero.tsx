import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Abhijeet</span>
          </h1>
          <div className="hero-subtitle">
            Backend &amp; GenAI Engineer • CS @ IIIT Vadodara
          </div>
          <p className="hero-description">
            I specialize in building robust <strong>backend systems and AI-powered applications</strong> with a strong focus on 
            <strong> FastAPI, Django, MongoDB</strong>, and <strong>Retrieval-Augmented Generation (RAG)</strong> using 
            <strong> LangChain</strong> and <strong>LangGraph</strong>. 
            Currently, I am a Software Engineering Intern exploring Matrix (Synapse) infrastructure and decentralized communication workflows.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={handleScrollToProjects}>
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1W0WOGxeGFMCFcFQ8hwB9hfqwYsHoNbQZ/view" 
              className="btn btn-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src="./assets/Profile_photo.jpg" alt="Abhijeet" />
          </div>
        </div>
      </div>
    </section>
  );
};
