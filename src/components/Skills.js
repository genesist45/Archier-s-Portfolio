import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: '🟨', level: 90 },
  { name: 'React', icon: '⚛️', level: 85 },
  { name: 'Node.js', icon: '🟩', level: 80 },
  { name: 'CSS', icon: '🎨', level: 88 },
  { name: 'Writing', icon: '✍️', level: 92 },
  { name: 'Teamwork', icon: '🤝', level: 95 },
  { name: 'Problem Solving', icon: '🧠', level: 90 },
];

const Skills = () => (
  <section id="skills" className="skills-section glass-panel fade-in">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">What I do best</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-card tilt-3d" key={idx}>
            <div className="skill-icon animated-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
            <div className="skill-level">{skill.level}%</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 