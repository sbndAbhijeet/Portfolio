import React, { useState } from 'react';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

interface Project {
  title: string;
  category: 'rag' | 'backend' | 'all';
  problem: string;
  solution: string;
  engineering: string;
  tags: string[];
  repoUrl: string;
  imgUrl: string;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'rag' | 'backend'>('all');

  const projectsData: Project[] = [
    {
      title: 'Lumin – AI Chat Assistant',
      category: 'rag',
      problem: 'One-off chat demos do not scale when you need multiple tools, models, and workflows behind a single interface.',
      solution: 'Developed an AI-powered chat application with persistent conversations, external tool support, and PDF/notes-based retrieval for contextual responses.',
      engineering: 'Built a FastAPI backend with MongoDB and a responsive React interface. Implemented workflow-based routing for tool invocation and designed a Blog-Note system to organize useful AI responses.',
      tags: ['React', 'FastAPI', 'MongoDB', 'LangChain', 'LangGraph'],
      repoUrl: 'https://github.com/sbndAbhijeet/ChatMe',
      imgUrl: '/assets/Lumin_logo.png',
    },
    {
      title: 'WebQuery – RAG Web Assistant',
      category: 'rag',
      problem: 'Reading long documentation pages and FAQs is slow when you only need specific answers quickly.',
      solution: 'Developed a Manifest v3 browser extension for natural language queries over documentation and web content.',
      engineering: 'Implemented a Retrieval-Augmented Generation (RAG) pipeline using FastAPI, embeddings, and Qdrant vector search. Structured per-site collections with custom BeautifulSoup parsing.',
      tags: ['FastAPI', 'Qdrant', 'LangChain', 'JavaScript', 'Chrome Extension'],
      repoUrl: 'https://github.com/sbndAbhijeet/WebQuery_RAG',
      imgUrl: '/assets/web_query.jpg',
    },
    {
      title: 'PDFQuery – Ask Questions',
      category: 'rag',
      problem: 'Searching through long, dense academic and project PDF files manually is slow and error-prone.',
      solution: 'Built a Streamlit frontend and FastAPI backend that lets users upload PDFs, index them into Qdrant, and query them via a streamed RAG pipeline.',
      engineering: 'Containerized Qdrant via Docker, separated UI and API services, and designed configuration layers to swap between LLM providers (OpenAI, Gemini).',
      tags: ['FastAPI', 'Qdrant', 'Streamlit', 'Docker', 'RAG'],
      repoUrl: 'https://github.com/sbndAbhijeet/PDFQuery_Rag',
      imgUrl: '/assets/PDFQuery.png',
    },
    {
      title: 'Course Registration System',
      category: 'backend',
      problem: 'The institute needed an academic registration workflow capturing role-based dashboard approval steps.',
      solution: 'Built a web-based course registration platform mirroring IIIT Vadodara\'s student and faculty processes.',
      engineering: 'Used Django, SQLite, and Bootstrap. Integrated session-based authentication, semester-based course filtering, and automated Gmail notifications for approvals.',
      tags: ['Django', 'Python', 'SQLite', 'Bootstrap', 'Gmail API'],
      repoUrl: 'https://github.com/sbndAbhijeet/Course-Registration',
      imgUrl: '/assets/VortexReg.png',
    },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore my work focused on backend system design, GenAI, and Retrieval-Augmented Generation.
          </p>
        </div>

        <div className="project-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === 'rag' ? 'active' : ''}`}
            onClick={() => setFilter('rag')}
          >
            GenAI &amp; RAG
          </button>
          <button
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend &amp; APIs
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="card project-card">
              <div className="project-img-wrapper">
                <img src={project.imgUrl} alt={project.title} />
              </div>
              <div className="project-card-info">
                <h3>{project.title}</h3>
                <p>
                  <strong>Problem:</strong> {project.problem}
                  <br />
                  <br />
                  <strong>Solution:</strong> {project.solution}
                  <br />
                  <br />
                  <strong>Engineering:</strong> {project.engineering}
                </p>
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.repoUrl}
                    className="btn btn-secondary btn-small"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
