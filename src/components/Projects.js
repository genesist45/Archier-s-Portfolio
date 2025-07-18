import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with React and beautiful neon/3D effects.',
    tech: ['React', 'CSS', 'Formspree'],
    icon: '💻',
    link: '#',
    github: '#',
    featured: true
  },
  {
    title: 'Blog Platform',
    description: 'A full-featured blog platform with markdown support and user authentication.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    icon: '📝',
    link: '#',
    github: '#'
  },
  {
    title: 'Weather App',
    description: 'A real-time weather dashboard with animated backgrounds and API integration.',
    tech: ['React', 'OpenWeatherMap API'],
    icon: '🌦️',
    link: '#',
    github: '#'
  }
];

const Projects = () => (
  <section id="projects" className="projects-section glass-panel fade-in">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some things I've built and designed</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className={`project-card tilt-3d${project.featured ? ' featured' : ''}`} key={idx}>
            {project.featured && <div className="featured-badge">✨ Featured</div>}
            <div className="project-icon animated-icon">{project.icon}</div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.tech.map((t, i) => (
                  <span className="tech-tag" key={i}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 