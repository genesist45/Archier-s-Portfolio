import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mzzvzvan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (err) {
      alert('An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'archierlacson100@gmail.com',
      link: 'mailto:archierlacson100@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+63 975 627 1349',
      link: 'tel:+639756271349'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Cagayan De Oro City',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <img src="/Facebookz.png" alt="Facebook" style={{width: '22px', height: '22px'}} />,
      url: 'https://www.facebook.com/Chengmats'
    },
    {
      name: 'Instagram',
      icon: <img src="/Instagram.png" alt="Instagram" style={{width: '22px', height: '22px'}} />,
      url: 'https://instagram.com/'
    },
    {
      name: 'Twitter',
      icon: <img src="/Twitter.png" alt="Twitter" style={{width: '22px', height: '22px'}} />,
      url: 'https://twitter.com/'
    },
    {
      name: 'Github',
      icon: <img src="/Github.png" alt="Github" style={{width: '22px', height: '22px'}} />,
      url: 'https://github.com/'
    },
    {
      name: 'YouTube',
      icon: <img src="/Youtube.png" alt="YouTube" style={{width: '22px', height: '22px'}} />,
      url: 'https://www.youtube.com/@chacheng4034'
    }
  ];

  return (
    <section id="contact" className="contact fade-in">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Let's connect and build something amazing!</p>
        </div>
        <div className="contact-content glass-panel tilt-3d">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              This is my personal portfolio and your future Technical Writer or Programmer.<br/>
              Feel free to reach out for collaborations, projects, or just to say hi!
            </p>
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <span>{info.icon}</span>
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon tilt-3d"
                    title={social.name}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 