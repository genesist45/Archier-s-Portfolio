import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/yourusername'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/yourusername'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/yourusername'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/yourusername'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer modern-footer">
      <div className="footer-bar">
        <div className="footer-col footer-follow">
          <div className="footer-title">FOLLOW ME</div>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/Chengmats" target="_blank" rel="noopener noreferrer" title="Facebook" className="footer-social-icon">
              <img src="/Facebookz.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram" className="footer-social-icon">
              <img src="/Instagram.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" title="Twitter" className="footer-social-icon">
              <img src="/Twitter.png" alt="Twitter" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title="Github" className="footer-social-icon">
              <img src="/Github.png" alt="Github" />
            </a>
          </div>
        </div>
        <div className="footer-col footer-contact">
          <div className="footer-title">CONTACT</div>
          <div className="footer-contact-email">Email: archierlacson100@gmail.com</div>
        </div>
        <div className="footer-col footer-copyright">
          <div className="footer-title">COPYRIGHT &copy; {currentYear}</div>
          <div className="footer-copyright-text">All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 