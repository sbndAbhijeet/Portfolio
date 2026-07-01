import React from 'react';
import { BookOpen, Star, Award } from 'lucide-react';

interface Qualification {
  school: string;
  degree: string;
  duration: string;
  location: string;
  metricLabel: string;
  metricValue: string;
  details: string[];
}

interface Certification {
  title: string;
  provider: string;
  year: string;
  status: 'completed' | 'ongoing';
  link?: string;
}

export const Education: React.FC = () => {
  const qualifications: Qualification[] = [
    {
      school: 'Indian Institute of Information Technology Vadodara',
      degree: 'B.Tech in Computer Science and Engineering',
      duration: 'Aug 2023 – May 2027',
      location: 'Gandhinagar, Gujarat, India',
      metricLabel: 'CPI',
      metricValue: '8.39',
      details: [
        'Relevant Courses: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks.',
        'Active member of the programming community, exploring backend and AI integrations.'
      ]
    },
    {
      school: 'Sri Gayatri Junior College',
      degree: 'Class XII (Higher Secondary) – TSBIE (Maths, Physics, Chemistry)',
      duration: 'Jun 2020 – May 2022',
      location: 'Hyderabad, Telangana, India',
      metricLabel: 'Percentage',
      metricValue: '97.8%',
      details: [
        'Focused on advanced mathematics and physical sciences, preparing for engineering entrances.',
        'Graduated with high honors.'
      ]
    },
    {
      school: 'Hindu Public School',
      degree: 'Class X (Secondary) – CBSE',
      duration: 'Mar 2019 – Mar 2020',
      location: 'Hyderabad, Telangana, India',
      metricLabel: 'Percentage',
      metricValue: '89%',
      details: [
        'Completed high school with distinction, developing strong baseline analytical and math foundations.'
      ]
    }
  ];

  const certifications: Certification[] = [
    {
      title: 'Gen AI Cohort 2.0',
      provider: 'Chai aur Code',
      year: '2025',
      status: 'completed',
      link: 'https://courses.chaicode.com/learn/certificate/11917527-232479'
    }
  ];

  return (
    <section id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education &amp; Credentials</h2>
          <p className="section-subtitle">
            My academic timeline, certifications, and technical qualifications.
          </p>
        </div>

        <div className="timeline">
          {qualifications.map((qual, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{qual.duration}</div>
                <h3>{qual.degree}</h3>
                <h4>{qual.school} ({qual.location})</h4>
                
                <div className="timeline-details">
                  <div className="timeline-detail-item">
                    <Star size={16} />
                    <span>
                      <strong>{qual.metricLabel}:</strong> {qual.metricValue}
                    </span>
                  </div>
                  {qual.details.map((detail, dIdx) => (
                    <div key={dIdx} className="timeline-detail-item">
                      <BookOpen size={16} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-container">
          <h2>📜 Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="card cert-card">
                <div className="cert-icon-wrapper">
                  <Award size={24} style={{ color: cert.status === 'completed' ? 'var(--secondary)' : 'var(--accent)' }} />
                </div>
                <div className="cert-details">
                  <h4>{cert.title}</h4>
                  <p>{cert.provider}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                    <span className={`cert-status ${cert.status}`}>
                      {cert.status === 'completed' ? `✅ Done ${cert.year}` : '🟡 Ongoing'}
                    </span>
                    {cert.link && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'underline' }}
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
