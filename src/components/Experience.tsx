import React from 'react';
import { Layers, Server, Cpu } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My industry experience building real-world decentralized systems and backends.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">May 2026 - Present</div>
              <h3>Software Engineering Intern</h3>
              <h4>WETEC Systems GmbH (Remote, Germany)</h4>
              
              <div className="timeline-details">
                <div className="timeline-detail-item">
                  <Server size={18} />
                  <span>
                    Working with self-hosted <strong>Matrix (Synapse)</strong> infrastructure and decentralized messaging systems.
                  </span>
                </div>
                <div className="timeline-detail-item">
                  <Layers size={18} />
                  <span>
                    Configuring <strong>Docker-based</strong> Matrix services with <strong>Element client</strong> integration.
                  </span>
                </div>
                <div className="timeline-detail-item">
                  <Cpu size={18} />
                  <span>
                    Exploring AI-assisted workflows and <strong>Model Context Protocol (MCP)</strong> integration for chat systems.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
