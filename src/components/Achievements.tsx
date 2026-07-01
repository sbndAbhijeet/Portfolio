import React from 'react';
import { Trophy, Cloud, Award, ExternalLink } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievementsList = [
    {
      title: 'Infosys HackWithInfy 2026',
      description: 'Selected as Specialist Programmer L1 (Trainee) through HackWithInfy, a national-level coding competition and selective hiring initiative.',
      metric: 'Specialist Programmer L1',
      icon: <Trophy size={24} />,
      linkText: null,
      linkUrl: null
    },
    {
      title: 'Google Cloud Skills Boost',
      description: 'Participated in the Arcade Facilitator Program, completing cloud infrastructure, networking, and deployment labs.',
      metric: 'Arcade Facilitator (2025)',
      icon: <Cloud size={24} />,
      linkText: 'Arcade Facilitator Profile',
      linkUrl: 'https://www.cloudskillsboost.google/'
    },
    {
      title: 'LeetCode Problem Solving',
      description: 'Consistently solved challenging algorithmic problems, focusing on trees, dynamic programming, graphs, and greedy methods.',
      metric: '400+ Solved • 1563 Max Rating',
      icon: <Award size={24} />,
      linkText: 'LeetCode Profile',
      linkUrl: 'https://leetcode.com/u/Bhanu_546'
    }
  ];

  return (
    <section id="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Notable milestones, coding contests, and program participations.
          </p>
        </div>

        <div className="achievements-grid">
          {achievementsList.map((ach, idx) => (
            <div key={idx} className="card achievement-card">
              <div className="achievement-badge">
                {ach.icon}
              </div>
              <h3>{ach.title}</h3>
              <p>{ach.description}</p>
              <div className="achievement-metric">
                {ach.metric}
              </div>
              {ach.linkUrl && (
                <a 
                  href={ach.linkUrl} 
                  className="achievement-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>{ach.linkText}</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
