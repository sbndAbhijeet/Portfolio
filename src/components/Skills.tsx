import React from 'react';
import { 
  Code, Cpu, Database, Settings, Award, 
  ExternalLink
} from 'lucide-react';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Backend & APIs',
      icon: <ServerIcon />,
      skills: [
        'FastAPI (REST APIs, Dependency Injection)',
        'Django (MVC, Authentication, Templates)',
        'Python, Java, JavaScript (Node.js)',
        'Session Management & Auth Workflows'
      ]
    },
    {
      title: 'GenAI & RAG Systems',
      icon: <Cpu size={22} />,
      skills: [
        'LangChain & LangGraph Orchestration',
        'Qdrant Vector Database',
        'OpenAI & Gemini API Integration',
        'Chunking & Context Retrieval Optimization'
      ]
    },
    {
      title: 'Databases & Stores',
      icon: <Database size={22} />,
      skills: [
        'MongoDB (NoSQL Document Store)',
        'MySQL & SQLite (Relational)',
        'Qdrant (Vector Database)',
        'Database Modeling & Querying'
      ]
    },
    {
      title: 'Tools & Concepts',
      icon: <Settings size={22} />,
      skills: [
        'Git & GitHub Version Control',
        'Docker Containerization',
        'Data Structures & Algorithms',
        'Object-Oriented Programming (OOP)'
      ]
    }
  ];

  const dsaMeters = [
    { label: 'Implementation & Debugging', value: '85%' },
    { label: 'Algorithmic Thinking', value: '80%' },
    { label: 'Complexity Awareness', value: '75%' }
  ];

  const codingPlatforms = [
    { name: 'LeetCode', handle: 'Bhanu_546', url: 'https://leetcode.com/u/Bhanu_546' },
    { name: 'Codeforces', handle: 'Bhanu_546', url: 'https://codeforces.com/profile/Bhanu_546' },
    { name: 'CodeChef', handle: 'sbndabhijeet', url: 'https://www.codechef.com/users/sbndabhijeet' },
    { name: 'GeeksforGeeks', handle: 'sbndabh9cn4', url: 'https://www.geeksforgeeks.org/user/sbndabh9cn4' },
    { name: 'HackerRank', handle: 'sbndabhijeet', url: 'https://www.hackerrank.com/profile/sbndabhijeet' }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <p className="section-subtitle">
            A breakdown of my technical toolkit, problem-solving focus areas, and developer activity.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card skill-category-card">
              <h3>
                {category.icon}
                <span>{category.title}</span>
              </h3>
              <ul className="skill-items">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="dsa-section">
          <div className="card dsa-topics">
            <h3>Problem Solving &amp; DSA</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              I regularly practice algorithms and data structures to write optimized code, focusing on complexity analysis and correctness.
            </p>
            <ul className="dsa-topics-grid">
              <li><Award size={16} /> Arrays, Strings, Hashing</li>
              <li><Award size={16} /> Recursion &amp; Backtracking</li>
              <li><Award size={16} /> Linked Lists, Stacks, Queues</li>
              <li><Award size={16} /> Trees &amp; Graphs (BFS, DFS)</li>
              <li><Award size={16} /> Dynamic Programming</li>
              <li><Award size={16} /> Greedy Algorithms</li>
              <li><Award size={16} /> Binary Search on Answer</li>
              <li><Award size={16} /> Time &amp; Space Complexity</li>
            </ul>
          </div>

          <div className="card dsa-meters-wrapper">
            <h3>DSA Focus Areas</h3>
            <div className="dsa-meter-card">
              {dsaMeters.map((meter, idx) => (
                <div key={idx} className="dsa-meter-row">
                  <div className="dsa-meter-label">
                    <span>{meter.label}</span>
                    <span>{meter.value}</span>
                  </div>
                  <div className="dsa-meter-bar-container">
                    <div className="dsa-meter-bar-fill" style={{ width: meter.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="platforms-grid">
          <div className="card platforms-list-card">
            <h3>Coding Platform Profiles</h3>
            <ul className="platform-links-list">
              {codingPlatforms.map((platform, idx) => (
                <li key={idx}>
                  <a
                    href={platform.url}
                    className="platform-item-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="platform-info-main">
                      <Code size={18} style={{ color: 'var(--primary)' }} />
                      <span className="platform-name">{platform.name}</span>
                      <span className="platform-handle">{platform.handle}</span>
                    </div>
                    <ExternalLink size={16} className="arrow-icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="card github-activity-card">
            <h3>GitHub Presence</h3>
            <div className="github-activity-visual">
              <GithubIcon size={48} />
              <h4>sbndAbhijeet</h4>
              <p>
                Consistently committing to backend projects, browser extensions, and GenAI experiment pipelines.
              </p>
              <a
                href="https://github.com/sbndAbhijeet"
                className="btn btn-secondary btn-small"
                style={{ marginTop: '1.25rem' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="stats-section" style={{ marginTop: '4rem' }}>
          <div className="card stats-card" style={{ padding: '2rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>
              <span>📊 Live Developer Stats</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              My real-time development activity, language breakdown, and algorithmic consistency fetched dynamically.
            </p>
            
            <div className="stats-images-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="activity-graph-wrapper" style={{ width: '100%', overflow: 'hidden' }}>
                <img 
                  src="https://github-readme-activity-graph.vercel.app/graph?username=sbndAbhijeet&theme=radical&bg_color=0d1117&hide_border=true" 
                  alt="GitHub Activity Graph" 
                  style={{ width: '100%', borderRadius: '12px', display: 'block' }} 
                />
              </div>
              
              <div className="stats-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                <img 
                  src="https://leetcard.jacoblin.cool/Bhanu_546?theme=radical&font=Fira%20Code" 
                  alt="LeetCode Stats" 
                  style={{ width: '100%', borderRadius: '12px' }} 
                />
                <img 
                  src="https://github-stats-extended.vercel.app/api?username=sbndAbhijeet&show_icons=true&theme=radical&hide_border=true" 
                  alt="GitHub Stats" 
                  style={{ width: '100%', borderRadius: '12px' }} 
                />
                <img 
                  src="https://github-stats-extended.vercel.app/api/top-langs/?username=sbndAbhijeet&layout=compact&theme=radical&hide_border=true" 
                  alt="Top Languages" 
                  style={{ width: '100%', borderRadius: '12px' }} 
                />
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=sbndAbhijeet&theme=radical&hide_border=true" 
                  alt="GitHub Streak" 
                  style={{ width: '100%', borderRadius: '12px' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple server icon SVG component
const ServerIcon: React.FC = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="22"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);
