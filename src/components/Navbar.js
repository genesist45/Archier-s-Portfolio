import React from 'react';
import './Navbar.css';

const navItems = [
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'what-i-love-section', label: 'What I Love', icon: '❤️' },
  { id: 'education-timeline-section', label: 'My Academic Journey', icon: '🎓' },
  { id: 'projects', label: 'Projects', icon: '🧩' },
  { id: 'skills', label: 'Skills', icon: '🛠️' },
  { id: 'contact', label: 'Contact', icon: '✉️' },
];

const socialLinks = [
  { name: 'Facebook', icon: <img src="/Facebookz.png" alt="Facebook" style={{width: '22px', height: '22px'}} />, url: 'https://www.facebook.com/Chengmats' },
  { name: 'Instagram', icon: <img src="/Instagram.png" alt="Instagram" style={{width: '22px', height: '22px'}} />, url: 'https://instagram.com/' },
  { name: 'Twitter', icon: <img src="/Twitter.png" alt="Twitter" style={{width: '22px', height: '22px'}} />, url: 'https://twitter.com/' },
  { name: 'Github', icon: <img src="/Github.png" alt="Github" style={{width: '22px', height: '22px'}} />, url: 'https://github.com/' },
  { name: 'YouTube', icon: <img src="/Youtube.png" alt="YouTube" style={{width: '22px', height: '22px'}} />, url: 'https://youtube.com/' },
];

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="sidebar glass-panel fade-in">
      <div className="sidebar-profile">
        <img src="/Archy.png" alt="Archier Pitogo Lacson" className="sidebar-avatar" />
        <h2 className="sidebar-name">Archier Pitogo Lacson</h2>
        
      </div>
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            className="sidebar-link tilt-3d"
            onClick={() => scrollToSection(item.id)}
          >
            <span className="sidebar-link-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-social">
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-social-icon tilt-3d"
            title={social.name}
          >
            <span>{social.icon}</span>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Navbar; 