import React from 'react';
import './Hero.css';

const Hero = () => {
  // Parallax mouse effect (optional, can be enhanced)
  React.useEffect(() => {
    const handleMove = e => {
      const hero = document.querySelector('.hero-avatar');
      if (hero) {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        hero.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero surprise-hero fade-in">
      {/* Animated 3D background */}
      <div className="bg-3d-animated">
        <div className="neon-orb neon-orb-1"></div>
        <div className="neon-orb neon-orb-2"></div>
        <div className="neon-orb neon-orb-3"></div>
        {/* Add floating shapes for extra animation */}
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        {/* 3D animated cubes */}
        <div className="cube3d">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
        <div className="cube3d2">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
      <div className="hero-surprise-container">
        <div className="hero-surprise-avatar">
          <div className="avatar-shadow"></div>
          <img 
            src="/Archy.png" 
            alt="Archy" 
            className="profile-image surprise-avatar-img"
          />
        </div>
        <div className="hero-surprise-text">
          <h1 className="hero-title neon-text surprise-title enhanced-name super-3d-name">
            <span className="neon-glow">Archier Pitogo Lacson</span>
          </h1>
          {/* Only show the name and buttons, remove all description text */}
          <div className="hero-buttons surprise-buttons">
            <a 
              className="btn tilt-3d surprise-btn"
              href="/resume.pdf" 
              download
            >
              Download Resume
            </a>
            <button 
              className="btn tilt-3d surprise-btn"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow neon-glow"></div>
        <span className="neon-blue">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero; 