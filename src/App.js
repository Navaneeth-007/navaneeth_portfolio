// App.jsx
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaCode, FaBriefcase, FaTrophy, FaLanguage, FaHeart, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaDatabase, FaGitAlt, FaNodeJs, FaBootstrap, FaDownload } from 'react-icons/fa';
import { SiFlutter, SiCplusplus, SiMongodb, SiExpress, SiRedux, SiC, SiFirebase } from 'react-icons/si';
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
  const [showMore, setShowMore] = useState(false);
  
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
            <li><a onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
            <li><a onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Navaneeth S</h1>
          <h2>Software Developer</h2>
          <p>Passionate and Innovative Developer with Expertise in App and Web Development</p>
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
          <div className="about-wrapper">
            <div className="about-content reveal">
              <p>
              I am a passionate and innovative developer with a strong foundation in computer science and hands-on experience in Flutter and React. Currently pursuing a Master of Technology in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at Amrita School of Computing, I constantly seek opportunities to apply cutting-edge technologies to real-world problems.
              </p>
              <p>
              I am looking for a dynamic position in a leading engineering firm where I can leverage my technical skills and academic background to contribute to meaningful projects. With a keen eye for detail and a drive for excellence, I aim to deliver exceptional solutions that make a difference. I'm eager to grow in a collaborative environment and build a long-term career in the tech industry.
              </p>
              <p>
              Feel free to reach out to me for freelance projects, collaborations, or any innovative tech ideas you'd like to bring to life. I'm always excited to work with passionate individuals and teams to create impactful digital solutions.
              </p>
              <div className="about-details">
                <div className="detail-item reveal">
                  <FaMapMarkerAlt />
                  <span>Nandanam, Vishavarsserikkara, Mannar, Kerala, Pin: 689622</span>
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
            <div className="profile-image reveal">
              <img src="/assets/profile.jpg" alt="Navaneeth S" />
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
                <h3>SignAI - Real-time Sign Language Interpretation</h3>
                <div className="project-tech">HTML |CSS |JavaScript |Python | Mediapipe </div>
              </div>
              <p>
                Developed a real-time video calling application with integrated sign language recognition using machine learning to convert gestures into text and speech.
              </p>
              <div className="project-links">
                <a href="https://github.com/Navaneeth-007/SignAI" className="project-link">View Project</a>
              </div>
            </div>

            <div className="project-card reveal">
              <div className="project-header">
                <h3>Blood Link - Application for Blood Donation Management</h3>
                <div className="project-tech">Flutter | Firebase</div>
              </div>
              <p>
                Developed a user-friendly app that provides a platform to donate and request blood easily.
              </p>
              <div className="project-links">
                <a href="https://github.com/cs-48/blood_link" className="project-link">View Project</a>
              </div>
            </div>

            <div className="project-card reveal">
              <div className="project-header">
                <h3>Voxel Web Reader</h3>
                <div className="project-tech">JavaScript | HTML | CSS | Python| YOLO </div>
              </div>
              <p>
                Developed a voice-controlled web reader extension for web browsers with YOLO-powered image description.
              </p>
              <div className="project-links">
                <a href="https://github.com/Navaneeth-007/Voxel_Web_Reader" className="project-link">View Project</a>
              </div>
            </div>
          </div>

          <div className={`hidden-projects ${showMore ? 'show' : ''}`}>
            <div className="project-card reveal">
              <div className="project-header">
                <h3>Shopoholic - E-Commerce Platform</h3>
                <div className="project-tech">React | Firebase</div>
              </div>
              <p>
                Implemented a user-friendly e-commerce platform that provides a personalized user experience with data security.
              </p>
              <div className="project-links">
                <a href="https://arjun-sreekumar.github.io/shopoholic--Ecommerce-platform" className="project-link">View Project</a>
              </div>
            </div>

            <div className="project-card reveal">
              <div className="project-header">
                <h3>Stock Price Prediction App</h3>
                <div className="project-tech">Streamlit | Python | LSTM</div>
              </div>
              <p>
                Built a Streamlit application for predicting stock prices using an LSTM (Long Short-Term Memory) neural network.
              </p>
              <div className="project-links">
                <a href="https://github.com/Navaneeth-007/Stock_Price_prediction" className="project-link">View Project</a>
              </div>
            </div>
          </div>

          <div className="view-more-container">
            <button className="view-more-btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'View More Projects'}
            </button>
          </div>
        </div>
      </section>
      
      <section id="skills" className="skills">
        <h2 className="section-title reveal">Skills</h2>
        <div className="container">
          <div className="skills-container">
            <div className="technical-skills reveal">
              <h3>Technical Skills</h3>
              <div className="skill-grid">
                <div className="skill-item">
                  <div className="skill-icon"><FaHtml5 /></div>
                  <div className="skill-name">HTML</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><FaCss3Alt /></div>
                  <div className="skill-name">CSS</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><FaJs /></div>
                  <div className="skill-name">JavaScript</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><FaReact /></div>
                  <div className="skill-name">React</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><SiFlutter /></div>
                  <div className="skill-name">Flutter</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><FaPython /></div>
                  <div className="skill-name">Python</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '55%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><FaJava /></div>
                  <div className="skill-name">Java</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><SiC /></div>
                  <div className="skill-name">C</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><SiFirebase /></div>
                  <div className="skill-name">Firebase</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><FaNodeJs /></div>
                  <div className="skill-name">Node.js</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><FaDatabase /></div>
                  <div className="skill-name">SQL</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><FaGitAlt /></div>
                  <div className="skill-name">Git</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bottom-row">
              <div className="soft-skills-container reveal">
                <h3>Soft Skills</h3>
                <div className="soft-skills">
                  <div className="soft-skill">Leadership</div>
                  <div className="soft-skill">Adaptability</div>
                  <div className="soft-skill">Time Management</div>
                  <div className="soft-skill">Self Assessment</div>
                  <div className="soft-skill">Team Management</div>
                  <div className="soft-skill">Problem Solving</div>
                  <div className="soft-skill">Collaboration</div>
                </div>
              </div>
              
              <div className="languages-container reveal">
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
              <h3>Finalist of " I AM KALAM ALL KERALA SCIENCE EXHIBITION " (2018)</h3>
              <p>Developed a Salt Water Intrusion Prevention System</p>
            </div>
          </div>

          <div className="achievement-item reveal">
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <div className="achievement-content">
              <h3>Finalist of " Kochi Hackathon '25 " (2025)</h3>
              <p>Developed a Chrome extension for accessible web reading with voice control and AI-driven image descriptions.</p>
            </div>
          </div>

          <div className="achievement-item reveal">
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <div className="achievement-content">
              <h3>Finalist of " Tredence Infinity AI Hackathon " (2025)</h3>
              <p>Developed a real-time video calling application with sign language interpretation capabilities.</p>
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
      
      <section id="services" className="services">
        <h2 className="section-title reveal">Services</h2>
        <div className="container">
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-icon">
                <FaCode />
              </div>
              <h3>Web Development</h3>
              <p>Custom web applications built with modern technologies like React, Node.js, and Firebase. Responsive design and seamless user experience guaranteed.</p>
            </div>

            <div className="service-card reveal">
              <div className="service-icon">
                <SiFlutter />
              </div>
              <h3>Mobile App Development</h3>
              <p>Cross-platform mobile applications developed with Flutter. Native-like performance with beautiful UI and smooth animations.</p>
            </div>

            <div className="service-card reveal">
              <div className="service-icon">
                <FaPython />
              </div>
              <h3>AI & ML Solutions</h3>
              <p>Machine learning models and AI-powered features integration. Data analysis and predictive modeling for smart applications.</p>
            </div>
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
                <p>Nandanam, Vishavarsserikkara, Mannar, Kerala, Pin: 689622</p>
              </div>
              <div className="social-links">
                <a href="https://github.com/Navaneeth-007" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/navaneeth-s-34694021b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
              <a href="/assets/Navaneeth.pdf" download className="download-resume">
                <FaDownload /> Download Resume
              </a>
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