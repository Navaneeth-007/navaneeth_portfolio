// App.jsx
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaCode, FaBriefcase, FaTrophy, FaLanguage, FaHeart } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });

      // Scroll reveal animation
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    emailjs.init("xXsMlqtJuru6WDxkC"); // Replace with your EmailJS public key
  }, []);
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await emailjs.send(
        "service_cr7mg2o",
        "template_7z6yc8a",
        {
          to_name: "Navaneeth", // Your name
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email // This ensures replies go to the sender
        }
      );

      if (response.status === 200) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 3000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div className="App">
      <header>
        <div className="logo">NS</div>
        <nav>
          <ul>
            <li><a onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
            <li><a onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a onClick={() => scrollToSection('achievements')} className={activeSection === 'achievements' ? 'active' : ''}>Achievements</a></li>
            <li><a onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Navaneeth S</h1>
          <h2>Software Developer</h2>
          <p>Passionate and innovative developer with expertise in Flutter and React</p>
          <div className="social-links">
            <a href="https://github.com/Navaneeth-007" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/navaneeth-s-34694021b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:nsnandanam@gmail.com"><FaEnvelope /></a>
          </div>
          <button className="cta-button" onClick={() => scrollToSection('contact')}>Get In Touch</button>
        </div>
      </section>
      
      <section id="about" className="about">
        <h2 className="section-title reveal">About Me</h2>
        <div className="container">
          <div className="about-content reveal">
            <p>
              I am a passionate and innovative developer with a strong foundation in computer science 
              and hands-on experience in Flutter and React. Currently pursuing a Master of Technology 
              in CSE with a focus on AI and ML at Amrita School of Computing.
            </p>
            <p>
              I am seeking a dynamic position in a leading engineering firm to leverage my technical 
              skills and educational background, while contributing to the organization's success with 
              exceptional solutions and problem-solving capabilities. I am eager to build a long-term 
              career and deliver outstanding results in a collaborative environment.
            </p>
            <div className="about-details">
              <div className="detail-item reveal">
                <FaMapMarkerAlt />
                <span>Nandanam, Vishavarsserikkara, Mannar, Kerala, PIN: 689622</span>
              </div>
              <div className="detail-item reveal">
                <FaPhone />
                <span>+91 9746744381</span>
              </div>
              <div className="detail-item reveal">
                <FaEnvelope />
                <span>nsnandanam@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="education" className="education">
        <h2 className="section-title reveal">Education</h2>
        <div className="container">
          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <h3>Master of Technology in CSE with AI and ML</h3>
                <h4>Amrita School of Computing, Amritapuri</h4>
                <p>2024 - Present</p>
                <p>CGPA: 8.8</p>
              </div>
            </div>
            
            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <h3>Bachelor of Technology in Computer Science and Engineering</h3>
                <h4>College of Engineering, Kallooppara</h4>
                <p>2020 - 2024</p>
                <p>CGPA: 7.68, KTU</p>
              </div>
            </div>
            
            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <h3>Senior Secondary Education</h3>
                <h4>Placid Vidya Vihar, Changanassery</h4>
                <p>2020</p>
                <p>Percentage: 80.2%, CBSE</p>
              </div>
            </div>
            
            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <h3>Secondary Education</h3>
                <h4>SBHSS, Mannar</h4>
                <p>2018</p>
                <p>Percentage: 92.2%, CBSE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="projects">
        <h2 className="section-title reveal">Projects</h2>
        <div className="container">
          <div className="project-cards">
            <div className="project-card reveal">
              <div className="project-header">
                <h3>E-Commerce Platform</h3>
                <div className="project-tech">React | Firebase</div>
              </div>
              <p>
                Implemented a user-friendly e-commerce platform that provides a personalized user experience with data security.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
            
            <div className="project-card reveal">
              <div className="project-header">
                <h3>Application for Blood Donation Management</h3>
                <div className="project-tech">Flutter | Firebase</div>
              </div>
              <p>
                Developed a user-friendly app that provides a platform to donate and request blood easily.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
            
            <div className="project-card reveal">
              <div className="project-header">
                <h3>Voxel Web Reader</h3>
                <div className="project-tech">JavaScript | HTML | CSS | Python</div>
              </div>
              <p>
                Developed a voice-controlled web reader extension for web browsers with YOLO-powered image description.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="skills" className="skills">
        <h2 className="section-title reveal">Skills</h2>
        <div className="container">
          <div className="skills-container">
            <div className="skills-category reveal">
              <h3>Technical Skills</h3>
              <div className="skill-grid">
                <div className="skill-item">
                  <div className="skill-name">C</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">JAVA</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">HTML</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">CSS</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">JAVASCRIPT</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">SQL</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">REACT</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">FLUTTER</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">PYTHON</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skills-category reveal">
              <h3>Soft Skills</h3>
              <div className="soft-skills">
                <div className="soft-skill">Leadership</div>
                <div className="soft-skill">Adaptability</div>
                <div className="soft-skill">Time Management</div>
                <div className="soft-skill">Self Assessment</div>
              </div>
            </div>
            
            <div className="skills-category reveal">
              <h3>Languages</h3>
              <div className="languages">
                <div className="language">
                  <h4>Malayalam</h4>
                  <p>Native or Bilingual Proficiency</p>
                </div>
                <div className="language">
                  <h4>English</h4>
                  <p>Full Professional Proficiency</p>
                </div>
                <div className="language">
                  <h4>Hindi</h4>
                  <p>Professional Working Proficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="achievements" className="achievements">
        <h2 className="section-title reveal">Achievements</h2>
        <div className="container">
          <div className="achievement-item reveal">
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <div className="achievement-content">
              <h3>Finalist of "I AM KALAM ALL KERALA SCIENCE EXHIBITION" (2018)</h3>
              <p>Developed a Salt Water Intrusion Prevention System</p>
            </div>
          </div>
        </div>
        
        <div className="interests">
          <h3 className="reveal">Interests</h3>
          <div className="interest-items">
            <div className="interest-item reveal">Travelling</div>
            <div className="interest-item reveal">Philately</div>
            <div className="interest-item reveal">Numismatics</div>
            <div className="interest-item reveal">Web Development</div>
            <div className="interest-item reveal">App Development</div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="contact">
        <h2 className="section-title">Contact Me</h2>
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope />
                <p>nsnandanam@gmail.com</p>
              </div>
              <div className="contact-item">
                <FaPhone />
                <p>+91 9746744381</p>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <p>Nandanam, Vishavarsserikkara, Mannar, Kerala, PIN: 689622</p>
              </div>
              <div className="social-links">
                <a href="https://github.com/Navaneeth-007" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/navaneeth-s-34694021b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
            
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <p className="form-status success">Message sent successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="form-status error">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Navaneeth S. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;