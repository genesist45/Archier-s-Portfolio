import React, { useState, useEffect } from 'react';
import './About.css';

const whatILove = [
  {
    title: 'Dog',
    image: '/Dog.png',
    desc: `This is Luna. I gave her to my girlfriend as a graduation gift, something special, something filled with love. She was more than just a pet and she became family.\n\nBut just a few weeks after my girlfriend's birthday, Luna passed away. It was so sudden. we didn't expect to lose her that soon. It broke my heart, not just because she was gone, but because of how much love she carried with her in such a short time.\n\nShe made us smile, she gave us comfort, and now she's a memory I will always hold close. I still get teary just thinking about her.\n\nLuna will always have a special place in my heart and now in my portfolio too.\n\n"Luna, forever in our hearts. 🐾"`
  },
  {
    title: 'Gaming',
    image: '/Gaming.png',
    desc: 'I was first introduced to gaming at the age of 8, thanks to my grandmother who had a computer. My early memories include playing games on sites like Y8, Y9, Friv, and other offline games on the computer, which helped me develop critical thinking and problem-solving skills. As I got older and entered my teenage years, I became more involved in multiplayer games like DOTA, Counter-Strike, Kill-On-Sight (KOS), AssaultFire (AF), Crossfire (CF), and various games on Facebook. These games not only expanded my social network but also taught me valuable skills like teamwork, strategy, and communication.'
  },
  {
    title: 'Hiking',
    image: '/Hikings.png',
    desc: 'I really enjoy hiking with my friends because it gives me a sense of happiness and helps me escape from stress. Being out in nature is refreshing, and every hike feels like a new adventure. I love exploring new trails and discovering beautiful, peaceful places I\'ve never seen before.'
  },
  {
    title: 'Music',
    image: '/Music.png',
    desc: 'Music has always been a huge part of my life. It\'s my go-to for almost everything, whether I\'m studying, hanging out with friends, or just relaxing. It helps me focus and get into the zone, especially during late-night study sessions. I love discovering new artists and genres, and I feel like music really helps me express my emotions in ways words sometimes can\'t. It\'s like a personal soundtrack that keeps me going through the ups and downs of university life. There\'s always a song for every moment, and I\'m always looking to find something fresh to add to my playlist.'
  },
  {
    title: 'Studying',
    image: '/Studyings.png',
    desc: 'Studying can be tough, but I\'ve learned that staying organized and managing my time well makes it easier. I try to break tasks into smaller steps and keep track of deadlines. Sometimes, I switch up my study environment, either the quiet library or a lively coffee shop, depending on what I need to focus. It\'s all about finding a balance, staying motivated, and pushing through, even when things get stressful.'
  },
  {
    title: 'Basketball',
    image: '/Basketball.png',
    desc: 'I\'ve always had a deep love for basketball, and one of my proudest moments was being named to the Mythical Five as a Power Forward on June 25, 2019. It\'s a recognition that I truly cherish. When I first tried out for the basketball team during my 1st year in college, I honestly didn\'t expect to make it. But to my surprise, I ended up being the varsity player for our department, BSIT (Information Technology). Since then, basketball has been a constant passion, and I\'ve continued to play, pushing myself to improve. My goal is to achieve even more in the game while staying healthy and enjoying every moment on the court.'
  },
];

const education = [
  { degree: 'Elementary', school: 'Tablon Elementary School', year: '' },
  { degree: 'High School', school: 'Tablon Nation High School', year: '' },
  { degree: 'Senior High', school: 'Tablon Senior High School', year: '' },
  { degree: 'College (Current)', school: 'Tagoloan Community College', year: '' },
];

const educationTimeline = [
  {
    year: '2012',
    title: 'Elementary School Graduate',
    image: '/Elementary.png', // Updated to use the correct image
    desc: 'Graduated from Tablon Elementary School. This was the first big step in my academic journey, filled with fun memories and foundational learning.'
  },
  {
    year: '2018',
    title: 'High School Graduate',
    image: '/Highschool.png', // Updated to use the correct image
    desc: 'Completed my studies at Tablon Nation High School. Here, I discovered my love for technology and made lifelong friends.'
  },
  {
    year: '2020',
    title: 'Senior High School Graduate',
    image: '/Seniorhigh.png', // Updated to use the correct image
    desc: 'Graduated from Tablon Senior High School, majoring in EIM (Electrical Installation and Maintenance). This period shaped my technical skills and hands-on experience with electrical systems.'
  },
  {
    year: 'Current',
    title: 'College (Tagoloan Community College)',
    image: '/College.png', // Updated to use the correct image
    desc: 'Currently pursuing a Bachelor of Science in Information Technology. I am excited for the future and the opportunities ahead!'
  }
];

const About = () => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    const handleEsc = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [lightbox]);

  return (
    <section id="about" className="about fade-in">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know Archier Pitogo Lacson</p>
        </div>
        <div className="about-content glass-panel tilt-3d">
          <div className="about-image">
            <div className="profile-image">
              <img 
                src="/Archy.png" 
                alt="Archier Pitogo Lacson" 
                className="profile-photo"
              />
            </div>
          </div>
          <div className="about-text">
            <h3 className="about-enhanced-name">Hi, I'm Archier Pitogo Lacson</h3>
            <div className="about-tagline">Aspiring IT Professional & Digital Creator</div>
            <p>
              Hi! I'm Archier Pitogo Lacson from Cagayan de Oro City, currently studying at Tagoloan Community College (TCC) where I'm pursuing a Bachelor of Science in Information Technology.
              <br /><br />
              I'm passionate about technology and communication, and I enjoy working on programming projects as well as technical writing. I'm also skilled in fast and accurate computer typing, something I take pride in. I believe that having “fast hands” is one of my secret strengths!
              <br /><br />
              What drives me every day is the motivation I get from my family, especially my grandmother, who inspired me to continue my studies and never give up. My journey in IT is just getting started, and I'm eager to keep learning and growing in this field.
              <br /><br />
              In the future, I hope to graduate and gain more experience and skills in programming and tech-related fields.
            </p>
            {/* Removed about-stats section for a cleaner look */}
          </div>
        </div>

        {/* WHAT I LOVE SECTION */}
        <div id="what-i-love-section" className="what-i-love-section glass-panel fade-in">
          <h2 className="section-title">WHAT I LOVE</h2>
          <p className="section-subtitle">These are the things that I love</p>
          <div className="what-i-love-grid">
            {whatILove.map((item, idx) => (
              <div className="love-card tilt-3d" key={idx}>
                <div className="love-card-img" onClick={() => setLightbox(item)} style={{cursor:'pointer'}}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="love-card-title">{item.title}</div>
                <div className="love-card-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightbox && (
          <div className="love-lightbox-overlay" onClick={() => setLightbox(null)}>
            <div className="love-lightbox-modal" onClick={e => e.stopPropagation()}>
              <img src={lightbox.image} alt={lightbox.title} className="love-lightbox-img" />
              <div className="love-lightbox-title">{lightbox.title}</div>
              <div className="love-lightbox-desc">{lightbox.desc}</div>
              <button className="love-lightbox-close" onClick={() => setLightbox(null)}>&times;</button>
            </div>
          </div>
        )}

        {/* EDUCATION TIMELINE SECTION */}
        <div id="education-timeline-section" className="education-timeline-section glass-panel fade-in">
          <h2 className="section-title">My Academic Journey</h2>
          <div className="timeline">
            {educationTimeline.map((milestone, idx) => (
              <div className={`timeline-item${idx % 2 === 0 ? ' left' : ' right'}`} key={idx}>
                <div className="timeline-marker" onClick={() => setLightbox({ ...milestone, year: milestone.year })} style={{cursor:'pointer'}}>
                  <img src={milestone.image} alt={milestone.title} className="timeline-photo" />
                </div>
                <div className="timeline-content" onClick={() => setLightbox({ ...milestone, year: milestone.year })} style={{cursor:'pointer'}}>
                  <div className="timeline-header">
                    <h4>{milestone.year}</h4>
                  </div>
                  <h5>{milestone.title}</h5>
                  <p>{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Lightbox Modal */}
        {lightbox && (
          <div className="timeline-lightbox-overlay" onClick={() => setLightbox(null)}>
            <div className="timeline-lightbox-modal" onClick={e => e.stopPropagation()}>
              <img src={lightbox.image} alt={lightbox.title} className="timeline-lightbox-img" />
              <div className="timeline-lightbox-year">{lightbox.year}</div>
              <div className="timeline-lightbox-title">{lightbox.title}</div>
              <div className="timeline-lightbox-desc">{lightbox.desc}</div>
              <button className="timeline-lightbox-close" onClick={() => setLightbox(null)}>&times;</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About; 